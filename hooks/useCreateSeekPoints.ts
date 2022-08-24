import { useEffect, useState } from "react";
import { StepsFactory } from "../factories/StepsFactory";

export type SeekPoints = number[];

export const useCreateSeekPoints = (
  slide: number, 
  stepsFactory: StepsFactory
): SeekPoints => {

  const [points, setPoints] = useState<number[]>([0]);

  useEffect(() => {
    const points = stepsFactory.getSeekBarStartsBySlide(slide);
    setPoints(points)
  }, [slide]);

  return points;
};
