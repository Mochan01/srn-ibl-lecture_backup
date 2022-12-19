import { FC, useMemo, useContext, useEffect, useState, useRef } from "react";
import { handleStep, getAudioFileName } from "../../utils";
import {
  GetDataProviderContext,
  GlobalStateContext,
  TimerContext,
} from "../../stores";
import { useAudio } from "../../hooks/useAudio";

interface NarrationProps {
  /**
   * 擬似的なロードの遅延(デバッグ用)
   */
  delay?: number;
}

/**
 * ナレーションの再生
 */
export const Narration: FC<NarrationProps> = ({ delay = 0 }) => {
  const { progress } = useContext(GlobalStateContext);
  const getData = useContext(GetDataProviderContext);
  const { start, reset } = useContext(TimerContext);

  const audioName = useMemo(
    () => handleStep(getData(progress.slide, progress.step))(getAudioFileName),
    [getData, progress]
  );

  let timer = useRef<NodeJS.Timeout>(); // タイマー デバッグ用 遅延ロード
  useEffect(() => () => timer.current && clearTimeout(timer.current), [timer]);
  const [play, stop] = useAudio(audioName, {
    onload: async () => {
      timer.current = setTimeout(() => setIsCanPlay(true), delay);
    },
  });

  // オーディオがロードされたら、再生開始
  const [isCanPlay, setIsCanPlay] = useState(false);
  useEffect(() => {
    if (!isCanPlay) return;
    start();
    play();
  }, [isCanPlay, start, play]);

  // オーディオが存在しない場合、ロードされたものと見做す
  useEffect(() => {
    !audioName && setIsCanPlay(true);
  }, [audioName]);

  // // アンマウント時にタイマー初期化
  useEffect(
    () => () => {
      reset();
      stop();
    },
    [reset, stop]
  );

  return null;
};
