import { useEffect, useState } from "react";
import {useSound} from "use-sound";

export interface UseNarration {
  /**
   * 音声ファイルのパス
   */
  sound: string;
  /**
   * 音声が終わったとき
   */
  onEnd?: () => void;
}

/**
 * ナレーション再生
 * @param sound 
 * @param onend 
 */
export const useNarration = ({ sound, onEnd }: UseNarration) => {

  const [soundLoaded, setSoundLoaded] = useState(false);

  const [play, { stop }] = useSound(sound, {
    onload: () => {
      setSoundLoaded(true);
    },
    onend: () => {
      if (!onEnd) return;
      onEnd();
    }
  });

  useEffect(() => {
    if (!soundLoaded) return;

    play();
    return () => stop();
  }, [soundLoaded]);
};
