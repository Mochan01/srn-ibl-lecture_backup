import React, { FC } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { Step, StepProps } from "../../atoms/Step/Step";

export interface SlideProps {
  steps: StepProps[];
}

interface MainProps {
}

const Main = styled(SwiperSlide)`
  & > div {
    &:first-child {
      position: static;
    }
    position: absolute;
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
