import { FC } from "react";
import { useNarration } from "../../../hooks/useNarration";
import { useTimeout, UseTimeoutProps } from "../../../hooks/useTimeout";

export interface NarrationProps extends UseTimeoutProps {
  sound: string;
}

export const Narration: FC<NarrationProps> = ({
  sound,
  onEnd,
  duration
}) => {

  useNarration(sound);
  useTimeout({ duration, onEnd });

  return null;
};
