import { useEffect, useState, Dispatch, SetStateAction, useContext, useMemo, useCallback } from "react";
import { StepsFactoryContext } from "../components/providers/StepsFactoryProvider/StepsFactoryProvider";
import { SlideProgressContext } from "../components/providers/SlideProgressProvider/SlideProgressProvider";
import { StepsProgressContext } from "../components/providers/StepsProgressProvider/StepsProgressProvider";

export interface useSeekBarExport {
  /**
   * シークバーの進捗
   */
  seekValue: number;
  /**
   * シークバーを操作したとき
   */
  onValueChange: (nextValue: number[]) => void;
  /**
   * シークバーから手を離したとき
   */
  onPointerUp: () => void;
}

export const useSeekBar = (): useSeekBarExport => {

  // コンテキストAPI 状態管理
  const { slideProgress } = useContext(SlideProgressContext);
  const { stepsProgress, setStepsProgress } = useContext(StepsProgressContext);
  const stepsFactory = useContext(StepsFactoryContext);

  // シークバーがfixする位置を生成
  const points = useMemo(() => {
    return stepsFactory.getSeekBarStartsBySlide(slideProgress);
  }, [slideProgress]);

  // スライドのページが変わったときにシークバーの初期位置を更新する
  const [seekValue, seekValueDispatch] = useState<number>(0);
  useEffect(() => seekValueDispatch(points[0]), [points]);

  // ステップのページが変わったときにシークバーの初期位置を更新する
  useEffect(() => seekValueDispatch(points[stepsProgress]), [stepsProgress]);

  // シークバーを操作したとき
  const onValueChange
    = useCallback(nextValue => seekValueDispatch(nextValue[0]), []);

  // シークバーから手を離したとき
  const onPointerUp = useCallback(() => {

    // シークバーを特定の位置にfixさせる
    const closest = points.reduce((prev, curr) => {
      return Math.abs(curr - seekValue) < Math.abs(prev - seekValue) ? curr : prev;
    });

    seekValueDispatch(closest);
    setStepsProgress(points.indexOf(closest));
  }, [seekValue]);

  return {
    seekValue,
    onValueChange,
    onPointerUp
  };
};
