import React, { FC } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { Step, StepProps } from "../../atoms/Step/Step";

export interface SlideProps {
  steps: StepProps[];
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
  steps
}) => {
  return (
    <>
      <Main>
        { steps.map(({ $src }, i) => <Step key={ i } $src={ $src } />) }
      </Main>
    </>
  );
};
