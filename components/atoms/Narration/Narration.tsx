import { FC } from "react";
import { UseNarration, useNarration } from "../../../hooks/useNarration";

export interface NarrationProps extends UseNarration {
}

export const Narration: FC<NarrationProps> = ({
  sound,
  onEnd
}) => {
  useNarration({ sound, onEnd });
  return null;
};
