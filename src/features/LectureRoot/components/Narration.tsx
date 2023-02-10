import { FC, useContext, useEffect, useState, useRef } from "react";
import { GlobalStateContext, TimerContext } from "../providers";
import { useAudio } from "../../../hooks/useAudio";
import { JsonDataProviderContext } from "../providers";
import { handleJsonData, getStepData } from "../utils";

interface NarrationProps {
  /**
   * 擬似的なロードの遅延(デバッグ用)
   */
  delay?: number;
}

/**
 * ナレーションの再生
 */
export const Narration: FC<NarrationProps> = ({ delay = 0 }) => {
  const { progress } = useContext(GlobalStateContext);
  const { start, reset } = useContext(TimerContext);

  // mp3のパス 取得
  const data = useContext(JsonDataProviderContext);
  const getJsonData = handleJsonData(data, progress);
  const { mp3 } = getJsonData(getStepData).audio;

  let timer = useRef<NodeJS.Timeout>(); // タイマー デバッグ用 遅延ロード
  useEffect(() => () => timer.current && clearTimeout(timer.current), [timer]);
  const [play, stop] = useAudio(mp3, {
    onload: async () => {
      timer.current = setTimeout(() => setIsCanPlay(true), delay);
    },
  });

  // オーディオがロードされたら、再生開始
  const [isCanPlay, setIsCanPlay] = useState(false);
  useEffect(() => {
    if (!isCanPlay) return;
    start();
    play();
  }, [isCanPlay, start, play]);

  // オーディオが存在しない場合、ロードされたものと見做す
  useEffect(() => {
    !mp3 && setIsCanPlay(true);
  }, [mp3]);

  // // アンマウント時にタイマー初期化
  useEffect(
    () => () => {
      reset();
      stop();
    },
    [reset, stop]
  );

  return null;
};
