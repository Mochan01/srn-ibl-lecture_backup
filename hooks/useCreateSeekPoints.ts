import { useEffect, useState } from "react";
import { UseAllProgress } from "./useManageProgress";
import { StepsFactory } from "../factories/StepsFactory";

export type SeekPoints = number[];

export const useCreateSeekPoints = (
  progress: UseAllProgress, 
  stepsFactory: StepsFactory
): SeekPoints => {

  const [points, setPoints] = useState<number[]>([0]);

  useEffect(() => {
    const slide = progress.slide;
    const points = stepsFactory.getSeekBarStartsBySlide(slide!);
    setPoints(points)
  }, [progress]);

  return points;
};
