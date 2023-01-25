import React, { FC, useContext } from "react";
import { css } from "styled-components";
import { TitleBase } from "./components/TitleBase";
import { CloseBtn } from "../../elements/CloseBtn";
import { Characters } from "../../elements/Characters";
import { ScaleWrapper } from "../../elements/ScaleWrapper";
import { Container } from "../../elements/Container";
import { PresentedBy } from "./components/PresentedBy";
import { Narration } from "../../elements/Narration";
import { GlobalStateContext, LectureProvider, LectureProviderProps } from "../../stores";
import { MainComponentProps } from "../../types";
import { useWatchStepEnd } from "../../hooks/useWatchStepEnd";
import { useAutoMoveProgress } from "../../hooks/useAutoMoveProgress";

export interface TitleProps extends LectureProviderProps, MainComponentProps {
  onClickSkip?: () => void;
}

export const Main: FC<TitleProps> = ({
  unitName,
  unitTitle,
  onClickSkip = () => {},
  onClickClose = () => {},
}) => {
  const { timestamp, isPlaying, progress } = useContext(GlobalStateContext);

  // 自動再生
  const isStepEnd = useWatchStepEnd();
  useAutoMoveProgress(isStepEnd);

  return (
    <>
      {isPlaying && (
        <Narration
          key={timestamp + "_" + progress.slide + "_" + progress.step}
        />
      )}
      <ScaleWrapper>
        <Container>
          <PresentedBy
            css={css`
              position: absolute;
              bottom: 20px;
              right: 62px;
            `}
          />
          <Characters
            css={css`
              position: absolute;
              top: 50%;
              right: 90px;
              transform: translateY(-50%);
            `}
          />
          <TitleBase
            css={css`
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              margin: auto;
            `}
            {...{ unitName, unitTitle, onClickSkip }}
          />
          <CloseBtn
            css={css`
              position: absolute;
              top: 20px;
              right: 62px;
            `}
            onClick={onClickClose}
          />
        </Container>
      </ScaleWrapper>
    </>
  );
};

export const Title: FC<TitleProps> = (props) => (
  <LectureProvider json={props.json} autoPlay={props.autoPlay}>
    <Main {...props} />
  </LectureProvider>
);
