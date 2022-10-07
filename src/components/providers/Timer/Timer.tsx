import { FC } from "react";
import { useTimeout, UseTimeoutProps } from "../../../hooks/useTimeout";

export interface TimerProps extends UseTimeoutProps {
}

export const Timer: FC<TimerProps> = ({
  duration,
  onEnd
}) => {
  useTimeout({ duration, onEnd });
  return null;
};
