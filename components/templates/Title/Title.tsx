import React, { FC, useMemo, useState, memo } from "react";
import styled from "styled-components";
import { SkipBtn } from "../../atoms/SkipBtn/SkipBtn";
import { TitleBase, TitleBaseProps } from "../../atoms/TitleBase/TitleBase";
import { useScalable } from "../../../hooks/useScalable";
import { StepsFactory } from "../../../factories/StepsFactory";
import { CloseBtn } from "../../atoms/CloseBtn/CloseBtn";
import { ProgressionTrigger } from "../../providers/ProgressionTrigger/ProgressionTrigger";
import { Cast } from "../../molecules/Cast/Cast";
import { StepProps } from "../../../variable_types/StepProps";

export interface TitleProps {
  data?: object;
  unitName: TitleBaseProps["unitName"];
  unitTitle: TitleBaseProps["unitTitle"];
  onClickSkip?: () => void;
  onClickClose?: () => void;
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
  display: grid;
  width: 1150px;
  grid-template-columns: 914px 236px;
  grid-template-rows: 202px 332px 90px 456px;
  height: 0;
  margin: 0 auto;
  position: relative;
`;

export const Title: FC<TitleProps> = ({
  unitName,
  unitTitle,
  data,
  onClickSkip = () => {},
  onClickClose = () => {}
}) => {

  const scale = useScalable(1150);
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
    <Main scale={ scale }>
      <CastMemo { ...{ isPlay, step } } />
      <div style={ {
        gridColumn: "1 / 2",
        gridRow: "2 / 3",
        alignSelf: "end",
        justifySelf: "end"
      } }>
        <TitleBase
          onClick={ () => setIsPlay(true) }
          { ...{ unitName, unitTitle } }
        />
      </div>
      <div style={ {
        gridColumn: "1 / 2",
        gridRow: "3 / 4",
        alignSelf: "end",
        justifySelf: "end"
      } }>
        { isPlay && <SkipBtn onClick={ onClickSkip } /> }
      </div>
      <img
        style={ {
          gridColumn: "1 / 3",
          gridRow: "4 / 5",
          alignSelf: "end",
          justifySelf: "end"
        } }
        src={ new URL("../../../assets/lecture_title_offer.png", import.meta.url).toString() }
      />
      <div style={ {
        gridColumn: "2 / 3",
        gridRow: "1 / 2",
        justifySelf: "end",
        marginTop: 16
      } }>
        <CloseBtn onClick={ onClickClose } />
      </div>
    </Main>
  </>;
};

/**
 *　先生と生徒
 */
const CastWrapper = styled.div`
  position: absolute;
  top: 100px;
  right: 0;
`;

const CastMemo: FC<{ isPlay: boolean, step: StepProps }> = memo(({
  isPlay,
  step
}) => {
  return (
    <CastWrapper>
      <Cast
        teacher={ isPlay ? step.teacher : "animation_1" }
        student={ step.student } 
      >
        { step.speech }
      </Cast>
    </CastWrapper>
  );
});
