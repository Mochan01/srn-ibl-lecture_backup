import React, { FC, useContext } from "react";
import { Radix } from "./Radix";
import {
  ProgressProviderContext,
  GetDataProviderContext,
  PlayStatusProviderContext,
  SeekProviderContext,
} from "../../../../stores/providers";
import { StepType } from "src-ibl-lecture-master/types/StepType";
import { handleStepArray, getSeekStarts } from "../../../../utils";

export interface SeekBarProps {
  className?: string;
}

/**
 * シークバー
 */
export const SeekBar: FC<SeekBarProps> = (props) => {
  const { state: progress, setState: setProgress } = useContext(
    ProgressProviderContext
  );
  const getData = useContext(GetDataProviderContext);

  // シークバーを マウスアップ / マウスダウン したときのイベント
  const { state: value, setState: setValue } = useContext(SeekProviderContext);
  const { setState: setPlayStatus } = useContext(PlayStatusProviderContext);
  const onPointerDown = () => setPlayStatus("STOPPED");
  const onPointerUp = (position: number) => {
    const seekStarts = handleStepArray(getData(progress.slide))(getSeekStarts);
    // シークバーの位置がデータ上のスタート位置（seekbar_start）より前にいくことがあり、その場合はundefinedが返る
    let closest = seekStarts.filter((x) => x <= position).reverse()[0];
    // なので、ここで補正する
    closest = typeof closest === "number" ? closest : seekStarts[0];
    let step = seekStarts.indexOf(closest) + 1;

    // 結果発表ステップでは止まらないようにする
    const isResultStep = !!(getData(progress.slide, step) as StepType).question
      .is_result_step;
    step = step - (isResultStep ? 1 : 0); // 結果発表ステップならその一個前のstepに止める
    if (step <= 0) step = 1; // 一個前のstepが存在しない場合の補正

    // 現在の進捗の決定
    setProgress({ step });
    setPlayStatus("PLAYING");
  };

  return <Radix {...{ value, setValue, onPointerUp, onPointerDown }} />;
};
