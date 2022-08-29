import { useContext, useMemo } from "react";
import { StepsFactoryContext } from "../components/providers/StepsFactoryProvider/StepsFactoryProvider";
import { SlideProgressContext } from "../components/providers/SlideProgressProvider/SlideProgressProvider";

export interface useSeekBarExport {
  points: number[];
  point: number;
}

/**
 * シークバーがfixする位置を生成
 * @param stepsProgress 
 * @returns 
 */
export const useCreateSeekPoints = (stepsProgress: number): useSeekBarExport => {

  const { slideProgress } = useContext(SlideProgressContext);
  const stepsFactory = useContext(StepsFactoryContext);

  const points = useMemo(() => {
    return stepsFactory.getSeekBarStartsBySlide(slideProgress);
  }, [slideProgress]);
  const point
    = useMemo(() => points[stepsProgress], [slideProgress, stepsProgress]);

  return {
    points,
    point
  };
};
