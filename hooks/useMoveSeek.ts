import { useEffect, useState, Dispatch, SetStateAction } from "react";

type SeekPoints = number[];

export const useMoveSeek = (points: SeekPoints)
  : [SeekPoints, Dispatch<SetStateAction<SeekPoints>>] => {

  const [value, setValue] = useState<SeekPoints>([0]);
  useEffect(() => setValue([points[0]]), [points]);

  return [value, setValue];
};
