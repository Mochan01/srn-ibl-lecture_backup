import React, { useContext, FC, ReactNode } from "react";
import { GlobalStateContext } from "../providers";
import { ScaleWrapper } from "../../../elements/ScaleWrapper";
import { Narration, DebugWindow, Characters } from "../components";
import { useAutoMoveProgress, useGetNextStep, useWatchStepEnd } from "../hooks";
import { formatSlideStep } from "../../../utils";
import { CloseBtn } from "../../../elements/CloseBtn";
import { css } from "styled-components";
import { Container } from "../../../elements/Container";

export interface ChildWrapperProps {
  onClose?: () => void;
  onLastStep?: () => void;
  children?: ReactNode;
}

export const ChildWrapper: FC<ChildWrapperProps> = ({
  onClose,
  onLastStep,
  children,
}) => {
  const { timestamp, isPlaying, progress } = useContext(GlobalStateContext);

  // ステップの終了を検知
  const isStepEnd = useWatchStepEnd();

  // 次のステップを取得
  const goToStep = useGetNextStep(isStepEnd, onLastStep);

  // 次のステップに進むか、次のステップが取得されなければ停止
  useAutoMoveProgress(goToStep ? formatSlideStep(goToStep) : undefined);

  return (
    <>
      {/** スライド、ステップ切替時、また、リプレイ時に再マウントさせたいのでkeyを指定 */}
      {isPlaying && (
        <Narration
          key={timestamp + "_" + progress.slide + "_" + progress.step}
        />
      )}
      <ScaleWrapper>
        <Container>
          <Characters />
          {children}
          <CloseBtn
            css={css`
              position: absolute;
              top: 20px;
              right: 62px;
            `}
            onClick={() => onClose && onClose()}
          />
        </Container>
      </ScaleWrapper>
      {process.env.NODE_ENV === "development" && <DebugWindow />}
    </>
  );
};
