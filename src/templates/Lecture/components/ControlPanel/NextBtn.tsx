import React, { FC, useEffect, useMemo, useContext } from "react";
import { MiniBtn, MiniBtnProps } from "./MiniBtn";
import { useTimer } from "use-timer";
import {
  JsonDataProviderContext,
  GlobalStateContext,
  GlobalDispatchContext,
} from "../../../../features/LectureRoot/providers";
import { getSlideData, getLastStepData, getStepData, handleJsonData } from "../../../../features/LectureRoot/utils";
import { useWatchStepEnd } from "../../../../features/LectureRoot/hooks/useWatchStepEnd";
import { Lecture } from "src-ibl-lecture-master-unit/types";

export interface NextBtnProps extends Pick<MiniBtnProps, "className"> {
  onLeave: () => void;
}

export const NextBtn: FC<NextBtnProps> = ({ onLeave, ...props }) => {
  const { progress } = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  const lectureData = useContext(JsonDataProviderContext) as Lecture[];
  const getLectureData = handleJsonData(lectureData, progress);

  const currentSlideLen = getLectureData(getSlideData).length;

  // ステップの最後に達したらボタンを光らせる
  const isStepEnd = useWatchStepEnd();
  const isBlink = useMemo(() => {
    return isStepEnd && progress.step >= currentSlideLen;
  }, [isStepEnd, progress, currentSlideLen]);

  // スライドの最後に達したら「次へ」ボタンの文言を変える
  const isLeave = useMemo(() => {
    return (
      getLectureData(getLastStepData).progress.slide ===
      getLectureData(getStepData).progress.slide
    );
  }, [getLectureData]);

  const { time, start, reset } = useTimer();
  useEffect(() => (isBlink ? start() : reset()), [start, reset, isBlink]);

  const variant = useMemo(
    () => (isBlink ? (time % 2 === 0 ? "flashing1" : "flashing2") : "nextOn"),
    [isBlink, time]
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
