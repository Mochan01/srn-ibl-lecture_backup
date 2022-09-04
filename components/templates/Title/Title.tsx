import React, { FC, useMemo, useState } from "react";
import styled from "styled-components";
import { SkipBtn } from "../../atoms/SkipBtn/SkipBtn";
import { TitleBase } from "../../atoms/TitleBase/TitleBase";
import { useScalable } from "../../../hooks/useScalable";
import { Spacer } from "../../providers/Spacer/Spacer";
import { StepsFactory } from "../../../factories/StepsFactory";
import { Narration } from "../../providers/Narration/Narration";
import { Timer } from "../../providers/Timer/Timer";

export interface TitleProps {
  onOver?: () => void;
}

interface WrapperProps {
  scale: number;
}

const Main = styled.div.attrs<WrapperProps>(
  ({ scale }) => ({
    style: {
      transform: `scale(${ scale })`
    }
  })
)<WrapperProps>`
  transform-origin: left top;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: fit-content;
`;

export const Title: FC<TitleProps> = ({
  onOver = () => {}
}) => {

  const scale = useScalable();

  const initStep = useMemo(() => StepsFactory.getCurrentStepData(0, 0), []);
  const [step, setStep] = useState(initStep);

  const onEnd = () => {
    const next = StepsFactory.getCurrentStepData(0, step.stepProgress + 1);

    // 終わり
    if (!next) {
      onOver();
      return;
    }

    setStep(next);
  };

  return (
    <Main scale={ scale }>
      <Narration key={ "narration" + step.stepProgress } sound={ step.sound } />
      <Timer key={ "timer" + step.stepProgress } duration={ step.duration } onEnd={ onEnd } />
      <TitleBase
        unitName="ダミーテキスト"
        unitTitle="ダミーテキストダミーテキスト"
      />
      <Spacer size={ 32 } />
      <SkipBtn onClick={ onOver } />
    </Main>
  );
};
