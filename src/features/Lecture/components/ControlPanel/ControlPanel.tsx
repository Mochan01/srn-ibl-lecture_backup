import React, { FC, useContext, useMemo } from "react";
import {
  GetDataProviderContext,
  ProgressProviderContext,
  PlayStatusProviderContext,
  SeekProviderContext,
} from "../../../../stores/providers";
import { StepType } from "src-ibl-lecture-master/types/StepType";
import { NextBtn } from "./NextBtn";
import { PrevBtn } from "./PrevBtn";
import { PlayBtn } from "./PlayBtn";
import { ReplayBtn } from "./ReplayBtn";
import { PageBullet } from "./PageBullet";
import { SIZE } from "../../../../data/SIZE";
import { handleStep, getSeekStart } from "../../../../utils";
import styled from "styled-components";
const ImageLecture = new URL(
  "../../../../assets/prod/lecture_panel_answer.png",
  import.meta.url
).toString();

export interface ControlBarProps {
  onLectureLeave: (key: "begin" | "end") => void;
  className?: string;
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
export const ControlPanel: FC<ControlBarProps> = ({
  onLectureLeave,
  className,
}) => {
  const { state: progress, setState: setProgress } = useContext(
    ProgressProviderContext
  );
  const { state: playStatus, setState: setPlayStatus } = useContext(
    PlayStatusProviderContext
  );

  const getData = useContext(GetDataProviderContext);
  const isFirstSlide = useMemo(() => {
    return !getData(progress.slide - 1).length;
  }, [progress.slide]);
  
  // スライドの最後に達したら「次へ」ボタンの文言を変える
  const isLastSlide = useMemo(() => {
    return !getData(progress.slide + 1).length;
  }, [progress.slide]);

  // ステップの最後に達したらボタンを光らせる
  const isLastStep = useMemo(() => {
    return !getData(progress.slide, progress.step + 1);
  }, [progress.slide, progress.step]);
  const isBlink = useMemo(() => {
    return isLastStep && playStatus === "CONTINUE";
  }, [isLastStep, playStatus]);

  const slideData = useMemo(() => getData(), []) as StepType[];
  const { setState: setValue } = useContext(SeekProviderContext);

  return (
    <Main {...{ className }}>
      <PageBullet
        slideLen={slideData[slideData.length - 1].progress.slide}
        slideIndex={progress.slide}
        onClick={(slide) => setProgress({ slide })}
      />
      <PrevBtn
        css="margin-left: 160px;"
        onClick={() => {
          if (isFirstSlide) {
            // スライドが最初の時にボタンを押すとタイトルに戻るようにしたいとのこと
            onLectureLeave("begin");
            return;
          }
          setProgress({ slide: "prev" });
        }}
      />
      <PlayBtn
        css="margin-left: 30px;"
        isPlay={playStatus === "PLAYING"}
        onClick={() => {
          if (playStatus === "PLAYING") {
            setValue(
              handleStep(getData(progress.slide, progress.step))(getSeekStart)
            );
            setPlayStatus("STOPPED");
          } else {
            setPlayStatus("PLAYING");
          }
        }}
      />
      <NextBtn
        {...{ isBlink }}
        css="margin-left: 30px;"
        caption={ isLastSlide ? "レクチャーを終了" : "次ページ" }
        onClick={() => {
          if (isLastSlide) {
            // スライドが最後の時にボタンを押すとレクチャーを終了させたいとのこと
            onLectureLeave("end");
            return;
          }
          setProgress({ slide: "next" });
          playStatus === "CONTINUE" && setPlayStatus("PLAYING");
        }}
      />
      <ReplayBtn
        css="margin-left: 130px;"
        onClick={() => {
          setProgress({ step: 1 });
          setPlayStatus("PLAYING");
        }}
      />
    </Main>
  );
};
