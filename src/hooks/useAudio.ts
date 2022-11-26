import useSound from "use-sound";
import { assetsPath } from "../data/assetsPath";

// After component is unmounted, sound is still playing
// https://github.com/joshwcomeau/use-sound/issues/106
declare const Howler: any;

interface UseAudio {
  onload?: () => void;
  volume?: number;
}

const VOLUME = 0.7;

/**
 * useSound、バグだらけなので使いたくなかったが、適度にメンテされててかつ人気なので他に選択肢がなかった...
 * 音周りはブラウザ互換がカオスなのもあり自前で実装すると沼にハマるかもしれない
 * @param audio
 * @param onload
 * @returns
 */
export const useAudio = (
  audio?: string,
  { onload, volume = VOLUME }: UseAudio = { volume: VOLUME }
) => {
  const [play] = useSound(audio ? assetsPath[audio] : "", { onload, volume });
  const stop = () => typeof Howler === "object" && Howler.stop();
  return [play, stop];
};
