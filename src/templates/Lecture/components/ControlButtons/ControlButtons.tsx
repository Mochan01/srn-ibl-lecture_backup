import React, { FC, useContext, useMemo } from "react";
import { SIZE } from "../../../../data/SIZE";
import styled from "styled-components";
import { Lecture } from "src-ibl-lecture-master-unit/types";
import {
  useMoveProgress,
  useWatchStepEnd,
} from "../../../../features/LectureRoot/hooks";
import {
  GlobalStateContext,
  GlobalDispatchContext,
  JsonDataProviderContext,
} from "../../../../features/LectureRoot/providers";
import {
  handleJsonData,
  getSlideData,
  getLastStepData,
  getStepData,
} from "../../../../features/LectureRoot/utils";
import { PageBullet } from "../../../../elements/PageBullet";
import { ReplayBtn } from "../../../../elements/ReplayBtn";
import { PlayBtn } from "../../../../elements/PlayBtn";
import { PrevBtn } from "../../../../elements/PrevBtn";
import { NextBtn } from "../../../../elements/NextBtn";
const ImageLecture = new URL(
  "../../../../assets/prod/lecture_panel_answer.png",
  import.meta.url
).toString();

export interface ControlButtonsProps {
  onLectureLeave: (key: "begin" | "end") => void;
  className?: string;
  disableKey?: "full" | "some" | "none";
}

/* lecture_panel.png */
const Main = styled.div`
  display: flex;
  width: ${SIZE.W}px;
  height: 95px;
  background-position: 0 -2009px;
  background-image: url(${ImageLecture});
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
`;

/**
 * コントロールパネル
 */
export const ControlButtons: FC<ControlButtonsProps> = ({
  onLectureLeave,
  disableKey,
  className,
}) => {
  const { progress, isPlaying } = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  const moveProgress = useMoveProgress();
  const lectureData = useContext(JsonDataProviderContext) as Lecture[];
  const getLectureData = handleJsonData(lectureData, progress);

  const currentSlideLen = getLectureData(getSlideData).length;
  const currentStepData = getLectureData(getStepData).progress.slide;
  const lastStepData = getLectureData(getLastStepData).progress.slide;

  // ステップの最後に達したらボタンを光らせる
  const isStepEnd = useWatchStepEnd();
  const isBlink = useMemo(() => {
    return isStepEnd && progress.step >= currentSlideLen;
  }, [isStepEnd, progress, currentSlideLen]);

  // スライドの最後に達したら「次へ」ボタンの文言を変える
  const isLeave = useMemo(() => {
    return lastStepData === currentStepData;
  }, [currentStepData, lastStepData]);

  return (
    <Main {...{ className }}>
      <PageBullet
        slideLen={lastStepData}
        slideIndex={currentStepData}
        onClick={(i) => moveProgress({ slide: i + 1, step: 1 })}
        isActive={disableKey !== "full" && disableKey !== "some"}
      />
      <PrevBtn
        onClick={() => {
          // スライドが最初の状態で戻ろうとしたらタイトルに戻したいとのこと
          if (currentStepData === 1) {
            onLectureLeave("begin");
            return;
          }
          moveProgress({ slide: progress.slide - 1, step: 1 });
        }}
        css="margin-left: 146px;"
        isActive={disableKey !== "full" && disableKey !== "some"}
      />
      <PlayBtn
        isPlaying={isPlaying}
        onClick={() => {
          dispatch({ type: "isPlaying", val: !isPlaying });
          dispatch({ type: "timestamp" });
        }}
        css="margin-left: 20px;"
        isActive={disableKey !== "full"}
      />
      <NextBtn
        isBlink={isBlink}
        isLeave={isLeave}
        onClick={() => {
          if (isLeave) {
            onLectureLeave("end");
            return;
          }
          dispatch({
            type: "progress",
            val: { slide: progress.slide + 1, step: 1 },
          });
        }}
        css="margin-left: 20px;"
        isActive={disableKey !== "full" && disableKey !== "some"}
      />
      <ReplayBtn
        onClick={() => {
          moveProgress({ slide: 1, step: 1 });
          dispatch({ type: "timestamp" });
        }}
        css="margin-left: 80px;"
        isActive={disableKey !== "full"}
      />
    </Main>
  );
};
