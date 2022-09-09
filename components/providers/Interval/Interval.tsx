import { FC } from "react";
import { useInterval } from "../../../hooks/useInterval";

export interface IntervalProps {
  callback: () => void;
}

export const Interval: FC<IntervalProps> = ({
  callback
}) => {
  useInterval(callback);
  return null;
};
