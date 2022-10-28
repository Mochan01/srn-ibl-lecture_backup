import { useContext, useEffect, useMemo } from "react";
import {
  ProgressProviderContext,
  PlayStatusProviderContext,
  AudioLoadingProviderContext,
  GetDataProviderContext,
  SeekProviderContext,
} from "../stores/providers";
import {
  handleStep,
  handleStepArray,
  getTime,
  getTotalTime,
  getLength,
  getSeekStart,
  getQuestion,
} from "../utils";
import { useTimer } from "use-timer";

/**
 * レクチャーコンテンツのライフサイクルを制御します
 * 処理が複雑なので、READMEにフローチャートを置いておきます
 */
export const useLecture = () => {
  const { state: progress, setState: setProgress } = useContext(
    ProgressProviderContext
  );
  const { state: playStatus, setState: setPlayStatus } = useContext(
    PlayStatusProviderContext
  );
  const { state: isAudioLoaded, setState: setIsAudioLoaded } = useContext(
    AudioLoadingProviderContext
  );

  // データ読み込み
  const getData = useContext(GetDataProviderContext);
  const getStep = useMemo(
    () => handleStep(getData(progress.slide, progress.step)),
    [progress.slide, progress.step]
  );

  // playStatusの変更を検知、stepを進める
  useEffect(() => {
    if (playStatus !== "CONTINUE") return;

    // ステップを自動で次に進めるか？判定
    if (getStep(getQuestion)) return;

    setProgress({ step: "next" });
    setPlayStatus("PLAYING");
  }, [playStatus]);

  // タイマー定義
  const endTime = getStep(getTime);
  const { time, start, pause, reset } = useTimer({
    interval: 100,
    step: 100,
    endTime,
  });

  // isAudioLoadedの変更を検知
  // タイマーの動作開始 / 動作終了
  useEffect(() => {
    // prettier-ignore
    isAudioLoaded ? (() => { reset(); start(); })() : pause();
  }, [isAudioLoaded]);

  // タイマーの動作を検知
  const { setState: setSeekValue } = useContext(SeekProviderContext);
  useEffect(() => {
    // シークバーのアニメーション開始
    const totalTime = getStep(getTotalTime);
    const currentTime = totalTime - getStep(getTime) + time;

    const slideTime = handleStep(
      getData(
        progress.slide,
        handleStepArray(getData(progress.slide))(getLength)
      )
    )(getTotalTime);

    setSeekValue((currentTime / slideTime) * 100);

    // タイマー動作終了
    endTime <= time && setPlayStatus("CONTINUE");
  }, [time]);

  // progress.slideの変更を検知
  // シークバーを初期位置に戻す
  useEffect(() => setSeekValue(getStep(getSeekStart)), [progress.slide]);
};
