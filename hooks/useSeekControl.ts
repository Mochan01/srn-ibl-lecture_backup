import { useCallback, useState, Dispatch, SetStateAction } from "react";

interface UseSeekControl {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  getClosest: () => number;
}

/**
 * control the seek bar
 * @param points fix position
 * @param index initial index in the points
 * @param fixBasis the basis of which the position of trigger to fix
 * @returns 
 */
export const useSeekControl = (
  points: number[],
  index: number,
  fixBasis: "CENTER" | "EDGE"
): UseSeekControl => {

  const [value, setValue] = useState(points[index]);

  const getClosest = useCallback(() => {

    let closest: number;

    switch (fixBasis) {
      case "CENTER":
        closest = points.reduce((prev, curr) => {
          return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;
        });
        break;
      case "EDGE":
        closest = points.reduce((prev, curr) => {
          return curr < value ? curr : prev;
        });
        break;
    };

    setValue(closest);

    return closest;
  }, [value]);

  return {
    value,
    setValue,
    getClosest
  };
};
