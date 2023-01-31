import React, { FC, useContext } from "react";
import {
  GlobalStateContext,
  LectureProvider,
  LectureProviderProps,
} from "../../stores";
import { Screen } from "./components/Screen";
import { ScaleWrapper } from "../../elements/ScaleWrapper";
import { Narration } from "../../elements/Narration";
import { ControlPanel } from "./components/ControlPanel";
import { Characters } from "../../elements/Characters";
import styled, { css } from "styled-components";
import { CloseBtn } from "../../elements/CloseBtn";
import { Container } from "../../elements/Container";
import { DebugWindow } from "../../elements/DebugWindow/DebugWindow";
import { SeekBar } from "./components/SeekBar";
import { MainComponentProps } from "../../types";

export interface LectureProps extends LectureProviderProps, MainComponentProps {
  isPlaying?: boolean;
  onLectureLeave: (key: "begin" | "end") => void;
  className?: string;
}

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
        <Narration
          key={timestamp + "_" + progress.slide + "_" + progress.step}
        />
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

export const Lecture: FC<LectureProps> = (props) => (
  <LectureProvider json={props.json} autoPlay={props.autoPlay}>
    <Main {...props} />
  </LectureProvider>
);
