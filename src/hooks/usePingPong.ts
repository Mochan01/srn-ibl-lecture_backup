import { useCallback } from "react";
import { useAudio } from "./useAudio";

/**
 * 正解音 鳴らす
 * @param isCorrect 
 * @returns 
 */
export const usePingPong = (isCorrect: boolean) => {
  const [play] = useAudio("quiz_correct.mp3");

  const playPingPong = useCallback(async () => {
    if (!isCorrect) return;

    // 再生してる間待たないとナレーションと被って音が鳴らなくなる
    play();
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }, [isCorrect, play]);

  return playPingPong;
};
