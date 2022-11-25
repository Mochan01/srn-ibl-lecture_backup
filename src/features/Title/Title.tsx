import React, { FC, useContext } from "react";
import { css } from "styled-components";
import { TitleBase } from "./components/TitleBase";
import { CloseBtn } from "../../elements/CloseBtn";
import { Characters } from "../../elements/Characters";
import { ScaleWrapper } from "../../elements/ScaleWrapper";
import { Container } from "../../elements/Container";
import { PresentedBy } from "./components/PresentedBy";
import { Narration } from "../../elements/Narration";
import {
  PlayStatusProviderContext,
  LectureProvider,
  ProgressProviderContext,
} from "../../stores";
import { useLecture } from "../../hooks";
import { Props } from "../../types";

export interface TitleProps extends Props {
  onClickSkip?: () => void;
}

export const Main: FC<TitleProps> = ({
  unitName,
  unitTitle,
  onClickSkip = () => {},
  onClickClose = () => {},
}) => {
  useLecture();
  const { state: playStatus, setState: setPlayStatus } = useContext(
    PlayStatusProviderContext
  );
  const { state: progress } = useContext(ProgressProviderContext);
  return (
    <>
      {playStatus === "PLAYING" && (
        <Narration key={`${progress.slide}_${progress.step}`} />
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
          <CloseBtn
            css={css`
              position: absolute;
              top: 20px;
              right: 62px;
            `}
            onClick={onClickClose}
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
            onClickStart={() => setPlayStatus("PLAYING")}
            {...{ unitName, unitTitle, onClickSkip }}
          />
        </Container>
      </ScaleWrapper>
    </>
  );
};

export const Title: FC<TitleProps> = ({ json, ...props }) => (
  <LectureProvider {...{ json }}>
    <Main {...props} />
  </LectureProvider>
);
