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
  getTransitionData,
} from "../../../../features/LectureRoot/utils";
import { PageBullet } from "../../../../elements/PageBullet";
import { ReplayBtn } from "../../../../elements/ReplayBtn";
import { PlayBtn } from "../../../../elements/PlayBtn";
import { PrevBtn } from "../../../../elements/PrevBtn";
import { NextBtn } from "../../../../elements/NextBtn";
import { ControlPanelProps } from "../ControlPanel";
const ImageLecture = new URL(
  "../../../../assets/prod/lecture_panel_answer.png",
  import.meta.url
).toString();

export interface ControlButtonsProps extends ControlPanelProps {
  disableKey?: "full" | "some" | "none";
}

/* lecture_panel.png */
const Main = styled.div`
  display: flex;
  width: ${SIZE.W}px;
  height: 95px;
  background-position: 0 -2009px;
  background-image: url(${ImageLecture});
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
`;

/**
 * コントロールパネルのボタン類
 */
export const ControlButtons: FC<ControlButtonsProps> = ({
  onLectureLeave,
  slideTransitionsData,
  disableKey,
  className,
}) => {
  const { progress, isPlaying, isMaxValue } = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  const moveProgress = useMoveProgress();
  const lectureData = useContext(JsonDataProviderContext) as Lecture[];
  const getLectureData = handleJsonData(lectureData, progress);

  const currentSlideLen = getLectureData(getSlideData).length;
  const lastSlide = getLectureData(getLastStepData).progress.slide;

  // ステップの最後に達したらボタンを光らせる
  const isStepEnd = useWatchStepEnd();
  const isBlink = useMemo(() => {
    if (isMaxValue) return true;
    return isStepEnd && progress.step >= currentSlideLen;
  }, [isMaxValue, isStepEnd, progress.step, currentSlideLen]);

  const currentSlide = progress.slide;
  // 現在のスライドの前ページと次ページの遷移先のスライドを取得
  const transitionData = getTransitionData(slideTransitionsData, currentSlide);
  const nextSlide = transitionData?.next;
  const backSlide = transitionData?.back;

  return (
    <Main {...{ className }}>
      <PageBullet
        slideLen={lastSlide}
        slideIndex={currentSlide}
        onClick={(i) => {
          moveProgress({ slide: i + 1, step: 1 });
          dispatch({ type: "isMaxValue", val: false });
        }}
        isActive={
          process.env.NODE_ENV === "development" ||
          (disableKey !== "full" && disableKey !== "some")
        }
      />
      <PrevBtn
        onClick={() => {
          // スライドが最初の状態で戻ろうとしたらタイトルに戻したいとのこと
          if (!backSlide) {
            onLectureLeave("begin");
            return;
          }
          moveProgress({ slide: backSlide, step: 1 });
          dispatch({ type: "isMaxValue", val: false });
        }}
        css="margin-left: 51px;"
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
        isLeave={!nextSlide}
        onClick={() => {
          if (!nextSlide) {
            onLectureLeave("end");
            return;
          }
          moveProgress({ slide: nextSlide, step: 1 });
          // 停止中の場合は次ページで再生させるためにtrueを設定
          dispatch({ type: "isPlaying", val: true });
          dispatch({ type: "isMaxValue", val: false });
        }}
        css="margin-left: 20px;"
        isActive={disableKey !== "full" && disableKey !== "some"}
      />
      <ReplayBtn
        onClick={() => {
          moveProgress({ slide: progress.slide, step: 1 });
          dispatch({ type: "timestamp" });
          dispatch({ type: "isMaxValue", val: false });
        }}
        css="position: absolute; left: 898px"
        isActive={disableKey !== "full"}
      />
    </Main>
  );
};
