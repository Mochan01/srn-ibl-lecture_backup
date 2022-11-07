import React, { FC, useContext, useMemo } from "react";
import {
  GetDataProviderContext,
  ProgressProviderContext,
  PlayStatusProviderContext,
  SeekProviderContext,
} from "../../../../stores/providers";
import { StepType } from "src-ibl-lecture-master/variable_types/StepType";
import { NextBtn } from "./NextBtn";
import { PrevBtn } from "./PrevBtn";
import { PlayBtn } from "./PlayBtn";
import { ControlPanelL } from "./ControlPanelL";
import { ControlPanelB } from "./ControlPanelB";
import { ControlPanelA } from "./ControlPanelA";
import { handleStep, getSeekStart } from "../../../../utils";
import styled from "styled-components";

export interface ControlBarProps {
  onClickPrev: (progress: number) => void;
  className?: string;
}

const Main = styled.div`
  display: flex;
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
      <ControlPanelL
        slideLen={slideData[slideData.length - 1].progress.slide}
        slideIndex={progress.slide}
        onClick={(slide) => setProgress({ slide })}
      />
      <ControlPanelB>
        <PrevBtn
          onClick={() => {
            setProgress({ slide: "prev" });
            // スライドが最初の時にボタンを押すとタイトルに戻るようにしたいとのこと
            onClickPrev(progress.slide);
          }}
        />
        <PlayBtn
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
          onClick={() => setProgress({ slide: "next" })}
          isBlink={isBlink}
        />
      </ControlPanelB>
      <ControlPanelA />
    </Main>
  );
};
