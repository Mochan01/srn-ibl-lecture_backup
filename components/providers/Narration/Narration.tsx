import { FC } from "react";
import { useNarration } from "../../../hooks/useNarration";

export interface NarrationProps {
  sound: string;
}

export const Narration: FC<NarrationProps> = ({
  sound
}) => {

  useNarration(sound);

  return null;
};
