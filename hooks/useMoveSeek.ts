import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { SeekPoints } from "./useCreateSeekPoints";

export const useMoveSeek = (points: SeekPoints)
  : [SeekPoints, Dispatch<SetStateAction<SeekPoints>>] => {

  const [value, setValue] = useState<SeekPoints>([0]);
  useEffect(() => setValue([points[0]]), [points]);

  return [value, setValue];
};
