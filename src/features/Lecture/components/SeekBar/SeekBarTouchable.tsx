import React, { FC, useContext, useState } from "react";
import { Radix } from "./Radix";
import {
  GetDataProviderContext,
  GlobalStateContext,
  GlobalDispatchContext,
} from "../../../../stores/providers";
import { handleStepArray, getSeekStarts } from "../../../../utils";
import { StepType } from "src-ibl-lecture-master/types/stepType";

export interface SeekBarTouchableProps {
  className?: string;
}

/**
 * シークバー（ユーザが操作する用）
 */
export const SeekBarTouchable: FC<SeekBarTouchableProps> = (props) => {
  const [value, setValue] = useState(0);
  const { progress } = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  const getData = useContext(GetDataProviderContext);

  const onPointerUp = () => {
    const seekStarts = handleStepArray(getData(progress.slide))(getSeekStarts);
    // シークバーの位置がデータ上のスタート位置（seekbar_start）より前にいくことがあり、その場合はundefinedが返る
    let closest = seekStarts.filter((x) => x <= value).reverse()[0];
    // なので、ここで補正する
    closest = typeof closest === "number" ? closest : seekStarts[0];
    let step = seekStarts.indexOf(closest) + 1;

    // 結果発表ステップでは止まらないようにする
    // https://www.notion.so/1ca89cdacc8a4907b2894b2c29d86ba8#28d778653c7641a8863de578b7bebe46
    const getIsResultStep = (step: number) => {
      return !!(getData(progress.slide, step) as StepType).question
        .is_result_step;
    };
    // 結果発表ステップならその一個前のstepに止める
    if (getIsResultStep(step)) {
      step = step - 1;
      // 一個前が正解ステップかもしれないのでそしたらさらにその前のstepに止める
      if (getIsResultStep(step)) step = step - 1;
    }

    dispatch({ type: "progress", val: { ...progress, step } });
    dispatch({ type: "timestamp" });
  };

  return (
    <div {...props} {...{ onPointerUp }}>
      <Radix {...{ value, setValue }} />
    </div>
  );
};
