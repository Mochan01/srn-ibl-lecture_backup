import { useEffect, useState, useContext, useMemo, useCallback } from "react";
import { StepsFactoryContext } from "../components/providers/StepsFactoryProvider/StepsFactoryProvider";
import { SlideProgressContext } from "../components/providers/SlideProgressProvider/SlideProgressProvider";
import { StepsProgressContext } from "../components/providers/StepsProgressProvider/StepsProgressProvider";
import { useAnimationFrame } from "./useAnimationFrame";

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
   * シークバーの操作を始めたとき
   */
   onPointerDown: () => void;
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

  const [time, setTime] = useState(new Date().getTime());

  // シークバーがfixする位置を生成
  const points = useMemo(() => {
    return stepsFactory.getSeekBarStartsBySlide(slideProgress);
  }, [slideProgress]);

  // スライドのページが変わったときにシークバーの初期位置を更新する
  const [seekValue, seekValueDispatch] = useState<number>(0);
  useEffect(() => seekValueDispatch(points[0]), [points]);

  // ステップのページが変わったときにシークバーの初期位置を更新する
  useEffect(() => seekValueDispatch(points[stepsProgress]), [stepsProgress]);

  // 進捗に応じてシークバーをアニメーションさせる
  /*
  const currentTime = useMemo(() => new Date().getTime(), [slideProgress]);
    */
  const duration = 5000;
  const [isRunning, setIsRunning] = useState(false);

  const beforeSeekValue = useMemo(() => seekValue, [time]);

  useEffect(() => {
    setIsRunning(true);
  }, [time]);

  useAnimationFrame(isRunning, () => {

    const nextTime = new Date().getTime();

    let percentage = ((nextTime - time) / duration) * (100 - beforeSeekValue);
    const zero = 100;

    percentage *= zero;
    percentage = Math.floor(percentage);
    percentage /= zero;

    seekValueDispatch(percentage + beforeSeekValue);

    if (percentage < 100 - beforeSeekValue) return;
    setIsRunning(false);
  });


  // useEffect(() => { seekValueDispatch(percentage); }, [percentage]);

  // シークバーを操作したとき
  const onValueChange
    = useCallback(nextValue => seekValueDispatch(nextValue[0]), []);

  const onPointerDown = () => {
    setIsRunning(false);
    // setTime(new Date().getTime());
  };

  // シークバーから手を離したとき
  const onPointerUp = useCallback(() => {
    setTime(new Date().getTime());

    // シークバーを特定の位置にfixさせる
    const closest = points.reduce((prev, curr) => {
      return Math.abs(curr - seekValue) < Math.abs(prev - seekValue) ? curr : prev;
    });

    setStepsProgress(points.indexOf(closest));
    seekValueDispatch(closest)
  }, [seekValue]);

  return {
    seekValue,
    onValueChange,
    onPointerDown,
    onPointerUp
  };
};
