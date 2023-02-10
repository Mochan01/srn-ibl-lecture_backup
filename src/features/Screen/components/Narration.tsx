import { FC, useEffect } from "react";
import { useAudio } from "../../../hooks/useAudio";

interface NarrationProps {
  narration: string;
}

/**
 * ナレーションの再生
 */
export const Narration: FC<NarrationProps> = ({ narration }) => {
  const [play, stop] = useAudio(narration);

  useEffect(() => play(), [play]);
  useEffect(() => () => stop(), [stop]);

  return null;
};
