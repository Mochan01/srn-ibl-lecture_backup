import React, { FC, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import { SkipBtn } from "../../atoms/SkipBtn/SkipBtn";
import { TitleBase, TitleBaseProps } from "../../atoms/TitleBase/TitleBase";
import { StepsFactory } from "../../../factories/StepsFactory";
import { CloseBtn } from "../../atoms/CloseBtn/CloseBtn";
import { ProgressionTrigger } from "../../providers/ProgressionTrigger/ProgressionTrigger";
import { Cast } from "../../molecules/Cast/Cast";
import { ScaleWrapper } from "../../layouts/ScaleWrapper/ScaleWrapper";
import { PresentedBy } from "../../atoms/PresentedBy/PresentedBy";
const ImgBg = new URL("../../../assets/prod/lecture_bg.png", import.meta.url).toString();

export interface TitleProps {
  data?: object;
  unitName: TitleBaseProps["unitName"];
  unitTitle: TitleBaseProps["unitTitle"];
  onClickSkip?: () => void;
  onClickClose?: () => void;
}

const Main = styled.div`
  width: 1920px;
  height: 1080px;
  position: relative;
  background-image: url(${ ImgBg });
  background-size: contain;
  background-repeat: no-repeat;
`;

const _TitleBase = styled(TitleBase)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;

const _CloseBtn = styled(CloseBtn)`
  position: absolute;
  top: 20px;
  right: 62px;
`;

const _PresentedBy = styled(PresentedBy)`
  position: absolute;
  bottom: 20px;
  right: 62px;
`;

const _SkipBtn = styled(SkipBtn)`
  position: absolute;
  right: 615px;
  bottom: 300px;
`;

export const Title: FC<TitleProps> = ({
  unitName,
  unitTitle,
  data,
  onClickSkip = () => {},
  onClickClose = () => {}
}) => {

  const factory = new StepsFactory(data);

  const initStep = useMemo(() => factory.getCurrentStepData(0, 0), []);
  const [step, setStep] = useState(initStep);

  const onEnd = () => {
    const next = factory.getCurrentStepData(0, step.stepProgress + 1);

    // 終わり
    if (!next) {
      onClickSkip();
      return;
    }

    setStep(next);
  };

  const [isPlay, setIsPlay] = useState(false);

  return <>
    { isPlay &&
      <ProgressionTrigger
        key={ step.stepProgress }
        sound={ step.sound }
        duration={ step.duration }
        onEnd={ onEnd }
      /> }
    <ScaleWrapper>
      <Main>
        <_PresentedBy />
        <_CloseBtn onClick={ onClickClose } />
        <Cast
          teacher={ isPlay ? step.teacher : "animation_1" }
          student={ step.student }
          css={ css`
            position: absolute;
            top: 50%;
            right: 90px;
            transform: translateY(-50%);
          ` }
        >
          { step.speech }
        </Cast>
        <_TitleBase
          onClick={ () => setIsPlay(true) }
          { ...{ unitName, unitTitle } }
        />
        { isPlay && <_SkipBtn onClick={ onClickSkip } /> }
      </Main>
    </ScaleWrapper>
  </>;
};

