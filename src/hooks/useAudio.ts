import { useCallback } from "react";
import useSound from "use-sound";
import { createAssetUri } from "../utils";

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
  const [play] = useSound(audio ? createAssetUri(audio) : "", {
    onload,
    volume,
  });
  const stop = useCallback(
    () => typeof Howler === "object" && Howler.stop(),
    []
  );
  return [play, stop];
};
