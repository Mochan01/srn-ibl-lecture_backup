import React, {
  FC,
  useMemo,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { handleStep, getAudioFileName } from "../../utils";
import {
  GetDataProviderContext,
  GlobalStateContext,
  TimerContext,
} from "../../stores";
import { assetsPath } from "../../data/assetsPath";

interface NarrationProps {
  /**
   * 擬似的なロードの遅延(デバッグ用)
   */
  delay: number;
}

/**
 * ナレーションの再生
 */
export const Narration: FC<NarrationProps> = ({ delay = 0 }) => {
  const { progress } = useContext(GlobalStateContext);
  const getData = useContext(GetDataProviderContext);
  const { start, reset } = useContext(TimerContext);

  const audioName = useMemo(
    () => handleStep(getData(progress.slide, progress.step))(getAudioFileName),
    [getData, progress]
  );

  const src = useMemo(() => audioName && assetsPath[audioName], [audioName]);
  const ref = useRef<HTMLAudioElement>(null);

  // オーディオがロードされたら、再生開始
  const [isCanPlay, setIsCanPlay] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      start();
      ref.current && ref.current.play();
    }, delay);
    return () => clearTimeout(timer);
  }, [start, isCanPlay, delay]);

  // オーディオが存在しない場合、ロードされたものと見做す
  useEffect(() => {
    !src && setIsCanPlay(true);
  }, [src]);

  // アンマウント時にタイマー初期化
  useEffect(() => () => reset(), [reset]);

  return (
    <>
      {src && (
        <audio {...{ src, ref }} onCanPlayThrough={() => setIsCanPlay(true)} />
      )}
    </>
  );
};
