import { useEffect, useState, Dispatch, SetStateAction, useContext, useMemo } from "react";
import { SlideProgressContext, StepsFactoryContext } from "../components/providers/Context/Context";

export interface useSeekBarExport {
  seekValue: number,
  seekValueDispatch: Dispatch<SetStateAction<number>>;
  points: number[];
}

export const useSeekBar = (): useSeekBarExport => {

  // コンテキストAPIからデータとスライドが何枚目かを取得
  const { slideProgress } = useContext(SlideProgressContext);
  const stepsFactory = useContext(StepsFactoryContext);

  // シークバーがfixする位置を生成
  const points = useMemo(() => {
    return stepsFactory.getSeekBarStartsBySlide(slideProgress);
  }, [slideProgress]);

  // スライドのページが変わったときにシークバーの初期位置を更新する
  const [seekValue, seekValueDispatch] = useState<number>(0);
  useEffect(() => seekValueDispatch(points[0]), [points]);

  return {
    seekValue,
    seekValueDispatch,
    points
  };
};
