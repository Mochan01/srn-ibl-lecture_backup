import React, { FC, useEffect, useMemo, useContext } from "react";
import { MiniBtn, MiniBtnProps } from "./MiniBtn";
import { useTimer } from "use-timer";
import {
  GetDataProviderContext,
  GlobalStateContext,
  GlobalDispatchContext,
} from "../../../../stores/providers";
import { useWatchStepEnd } from "../../../../hooks/useWatchStepEnd";

export interface NextBtnProps extends Pick<MiniBtnProps, "className"> {
  onLeave: () => void;
}

export const NextBtn: FC<NextBtnProps> = ({ onLeave, ...props }) => {
  const { progress } = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  // ステップの最後に達したらボタンを光らせる
  const getData = useContext(GetDataProviderContext);
  const isLastStep = useMemo(() => {
    return !getData(progress.slide, progress.step + 1);
  }, [getData, progress]);

  const isStepEnd = useWatchStepEnd();
  const isBlink = useMemo(
    () => isStepEnd && isLastStep,
    [isStepEnd, isLastStep]
  );

  const { time, start, reset } = useTimer();
  useEffect(() => (isBlink ? start() : reset()), [start, reset, isBlink]);

  const variant = useMemo(
    () => (isBlink ? (time % 2 === 0 ? "flashing1" : "flashing2") : "nextOn"),
    [isBlink, time]
  );

  // スライドの最後に達したら「次へ」ボタンの文言を変える
  const isLeave = useMemo(
    () => !getData(progress.slide + 1).length,
    [getData, progress.slide]
  );

  return (
    <MiniBtn
      {...props}
      {...{ variant }}
      onClick={() => {
        if (isLeave) {
          onLeave();
          return;
        }
        dispatch({
          type: "progress",
          val: { slide: progress.slide + 1, step: 1 },
        });
      }}
      caption={isLeave ? "レクチャーを終了" : "次ページ"}
      hoverVariant="nextOff"
    />
  );
};
