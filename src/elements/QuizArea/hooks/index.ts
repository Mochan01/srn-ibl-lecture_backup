import { useEffect, useMemo, useContext } from "react";
import { useRef } from "react";
import { useAudio } from "../../../hooks/useAudio";
import {
  GetDataProviderContext,
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../../stores/providers";
import {
  handleStep,
  getNextStepIfCorrect,
  getNextStepIfWrong,
} from "../../../utils";

/**
 * クイズで回答したときの処理作成（音を鳴らす、次のステップに進む）
 * @param correctIndex
 * @param chooseIndex
 * @returns
 */
export const useCreateAnswerAction = (
  correctIndex: number,
  chooseIndex: number | void
) => {
  // 今押してる選択肢は正解なのか判定
  const isCorrect = useMemo(() => {
    return chooseIndex === correctIndex;
  }, [chooseIndex, correctIndex]);

  // 次のステップを取得
  const getData = useContext(GetDataProviderContext);
  const { progress } = useContext(GlobalStateContext);
  const nextStep = useMemo(
    () =>
      handleStep(getData(progress.slide, progress.step))(
        isCorrect ? getNextStepIfCorrect : getNextStepIfWrong
      ),
    [getData, progress, isCorrect]
  );

  // アンマウント時にタイマーをリセット
  let timer = useRef<NodeJS.Timeout>();
  useEffect(() => () => timer.current && clearTimeout(timer.current), [timer]);

  const [play] = useAudio("quiz_correct.mp3", { volume: 0.4 });
  const dispatch = useContext(GlobalDispatchContext);
  return () => {
    // 正解なら音を鳴らす
    isCorrect && play();
    // 正解音がなり終わるまで、1秒待機
    timer.current = setTimeout(() => {
      if (!nextStep) {
        console.error("Next step was undefined.");
        return;
      }
      dispatch({ type: "progress", val: { ...progress, step: nextStep } });
    }, 1000);
  };
};
