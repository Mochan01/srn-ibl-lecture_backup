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
  onClickPrev: (progress: number) => void;
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
  onClickPrev,
  className,
}) => {
  const { state: progress, setState: setProgress } = useContext(
    ProgressProviderContext
  );
  const { state: playStatus, setState: setPlayStatus } = useContext(
    PlayStatusProviderContext
  );

  // ステップの最後に達したらボタンを光らせる
  const getData = useContext(GetDataProviderContext);
  const isBlink = useMemo(() => {
    return (
      !getData(progress.slide, progress.step + 1) && playStatus === "CONTINUE"
    );
  }, [progress.slide, progress.step, playStatus]);

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
          setProgress({ slide: "prev" });
          // スライドが最初の時にボタンを押すとタイトルに戻るようにしたいとのこと
          onClickPrev(progress.slide);
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
        onClick={() => {
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
