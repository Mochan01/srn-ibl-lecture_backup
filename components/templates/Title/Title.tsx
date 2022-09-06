import React, { FC, useMemo, useState } from "react";
import styled from "styled-components";
import { SkipBtn } from "../../atoms/SkipBtn/SkipBtn";
import { TitleBase } from "../../atoms/TitleBase/TitleBase";
import { useScalable } from "../../../hooks/useScalable";
import { StepsFactory } from "../../../factories/StepsFactory";
import { Narration } from "../../providers/Narration/Narration";
import { Timer } from "../../providers/Timer/Timer";
import { CloseBtn } from "../../atoms/CloseBtn/CloseBtn";

export interface TitleProps {
  data?: object;
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
  grid-template-columns: 914px 236px;
  grid-template-rows: 202px 332px 90px 456px;
`;

export const Title: FC<TitleProps> = ({
  data,
  onClickSkip = () => {},
  onClickClose = () => {}
}) => {

  const scale = useScalable();
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

  return <>
    <Narration key={ "narration" + step.stepProgress } sound={ step.sound } />
    <Timer key={ "timer" + step.stepProgress } duration={ step.duration } onEnd={ onEnd } />
    <Main scale={ scale }>
      <div style={ {
        gridColumn: "1 / 2",
        gridRow: "2 / 3",
        alignSelf: "end",
        justifySelf: "end"
      } }>
        <TitleBase
          unitName="ダミーテキスト"
          unitTitle="ダミーテキストダミーテキスト"
        />
      </div>
      <div style={ {
        gridColumn: "1 / 2",
        gridRow: "3 / 4",
        alignSelf: "end",
        justifySelf: "end"
      } }>
        <SkipBtn onClick={ onClickSkip } />
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
