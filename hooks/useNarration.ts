import { useEffect, useState } from "react";
import {useSound} from "use-sound";

/**
 * ナレーション再生
 * @param sound 
 * @param onLoaded 
 */
export const useNarration = (
  sound: string,
  onLoaded: () => void
) => {

  const [isLoaded, setIsLoaded] = useState(false);

  const [play, { stop }] = useSound(sound, {
    onload: async () => {
      setIsLoaded(true);
      onLoaded();
    },
    volume: .1
  });

  useEffect(() => {
    if (!isLoaded) return;

    play();
    return () => stop();
  }, [isLoaded]);
};
