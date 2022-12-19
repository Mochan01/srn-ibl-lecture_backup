import React, { FC, useContext } from "react";
import { GlobalStateContext, LectureProvider } from "../../stores";
import { Screen } from "./components/Screen";
import { ScaleWrapper } from "../../elements/ScaleWrapper";
import { Narration } from "../../elements/Narration";
import { ControlPanel, ControlBarProps } from "./components/ControlPanel";
import { Characters } from "../../elements/Characters";
import styled, { css } from "styled-components";
import { CloseBtn } from "../../elements/CloseBtn";
import { Container } from "../../elements/Container";
import { JsonData, MainComponentProps } from "../../types";
import { PlayStatusProviderProps } from "../../stores/providers";
import jsonData from "../../assets/data/lecture1.json";
import { DebugWindow } from "../../elements/DebugWindow/DebugWindow";
import { SeekBar } from "./components/SeekBar";

export interface LectureProps
  extends ControlBarProps,
    MainComponentProps,
    Pick<PlayStatusProviderProps, "isPlaying"> {}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: fit-content;
  height: fit-content;
`;

const Main: FC<LectureProps> = ({
  onLectureLeave,
  onClickClose,
  unitName,
  unitTitle,
  className,
}) => {
  const { timestamp, isPlaying, progress } = useContext(GlobalStateContext);
  return (
    <div {...{ className }}>
      {/** スライド、ステップ切替時、また、リプレイ時に再マウントさせたいのでkeyを指定 */}
      {isPlaying && (
        <Narration key={timestamp + "_" + progress.slide + "_" + progress.step} />
      )}
      <ScaleWrapper>
        <Container>
          <Characters
            css={css`
              position: absolute;
              top: 50%;
              right: 0px;
              transform: translateY(-50%);
            `}
          />
          <CloseBtn
            css={css`
              position: absolute;
              top: 20px;
              right: 62px;
            `}
            onClick={onClickClose}
          />
          <Wrapper>
            <Screen {...{ unitName, unitTitle }} />
            <SeekBar />
            <ControlPanel {...{ onLectureLeave }} />
          </Wrapper>
        </Container>
      </ScaleWrapper>
      <DebugWindow />
    </div>
  );
};

export const Lecture: FC<LectureProps> = ({
  json = jsonData as JsonData,
  isPlaying,
  ...props
}) => {
  return (
    <LectureProvider {...{ json, isPlaying }}>
      <Main {...props} />
    </LectureProvider>
  );
};
