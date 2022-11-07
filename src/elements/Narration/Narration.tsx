import { FC, useMemo, useContext, useEffect } from "react";
import { handleStep, getAudioFileName } from "../../utils";
import {
  GetDataProviderContext,
  ProgressProviderContext,
  AudioLoadingProviderContext,
} from "../../stores";
import { useAudio } from "../../hooks";

/**
 * ナレーションの再生
 */
export const Narration: FC = () => {
  const { state: progress } = useContext(ProgressProviderContext);
  const { state: isAudioLoaded, setState: setIsAudioLoaded } = useContext(
    AudioLoadingProviderContext
  );

  const getData = useContext(GetDataProviderContext);
  const audio = useMemo(
    () => handleStep(getData(progress.slide, progress.step))(getAudioFileName),
    [progress.step]
  );

  const [play, stop] = useAudio(audio, {
    onload: () => setIsAudioLoaded(true),
  });

  useEffect(() => {
    isAudioLoaded ? play() : stop();
  }, [isAudioLoaded]);

  useEffect(() => {
    // オーディオが存在しない場合、ロードされたものと見做す
    if (!audio) setIsAudioLoaded(true);
    // アンマウント時に必ず初期化
    return () => {
      setIsAudioLoaded(false);
      stop();
    };
  }, []);

  return null;
};
