import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { Step, StepProps } from "../../atoms/Step/Step";
import { useStepProgress } from "../../../hooks/useStepProgress";

export interface SlideProps {
  steps: StepProps[];
  onChange?: (step: number) => void;
}

const Main = styled(SwiperSlide)`
  & > div {
    &:first-child {
      position: static;
    }
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

export const Slide: FC<SlideProps> = ({
  steps,
  onChange = () => {}
}) => {

  const step = useStepProgress(steps.length);

  useEffect(() => onChange(step), [step]);

  return (
    <>
      <Main>
        { /** stepに応じて描画 */ }
        { steps.map(({ $src }, i) => {
          if (i > step) return;
          return <Step key={ i } $src={ $src } />;
        }) }
      </Main>
    </>
  );
};
