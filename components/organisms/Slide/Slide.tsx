import React, { FC, Fragment } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { Step, StepProps } from "../../atoms/Step/Step";
import { Narration, NarrationProps } from "../../atoms/Narration/Narration";
import { QuizArea } from "../../molecules/QuizArea/QuizArea";

export type StepNarrationProps = StepProps & NarrationProps;

export interface SlideProps {
  steps: StepNarrationProps[];
  stepsProgress: number;
  play: boolean;
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
  stepsProgress,
  play
}) => {
  return (
    <>
      <Main>
        { /** ステップに応じて描画 */ }
        { steps.map(({ image, sound }, i) => {
          if (i > stepsProgress) return;
          return (
            <Fragment key={ i }>
              { i <= stepsProgress && <Step image={ image } /> }
              { play && i === stepsProgress &&
                <Narration sound={ sound } /> }
              <QuizArea
                questions={[
                  "アリスは川辺でおねえさんのよこにすわって",
                  "なんにもすることがないのでとても退屈",
                  "一、二回はおねえさんの読んでいる本をのぞいてみたけれど、そこには絵も会話もないのです。",
                  "「絵や会話のない本なんて、なんの役にもたたないじゃないの」とアリスは"
                ]}
                correctIndex={ 0 }
                x={ 50 }
                y={ 50 }
                width={ 50 }
                height={ 50 }
              />
            </Fragment>
          );
        }) }
      </Main>
    </>
  );
};
