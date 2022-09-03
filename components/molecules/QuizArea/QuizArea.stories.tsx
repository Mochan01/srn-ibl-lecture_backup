import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { QuizArea, QuizAreaProps } from "./QuizArea";
import { SlideProgressProvider } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { StepListProvider } from "../../providers/StepListProvider/StepListProvider";
import { RunSeekProvider } from "../../providers/RunSeekProvider/RunSeekProvider";
import { PlayProvider } from "../../providers/PlayProvider/PlayProvider";

export default {
  title: "molecules/QuizArea",
  component: QuizArea
} as Meta;

const template: Story<QuizAreaProps> = (args) => {
  return (
    <SlideProgressProvider>
      <StepListProvider>
        <PlayProvider>
          <RunSeekProvider>
            <QuizArea {...args} />
          </RunSeekProvider>
        </PlayProvider>
      </StepListProvider>
    </SlideProgressProvider>
  );
};

export const three: { args: QuizAreaProps } = template.bind({});
three.args = {
  questions: [
    "アリスは川辺でおねえさんのよこにすわって",
    "なんにもすることがないのでとても退屈",
    "一、二回はおねえさんの読んでいる本をのぞいてみたけれど、そこには絵も会話もないのです。",
    "「絵や会話のない本なんて、なんの役にもたたないじゃないの」とアリスは"
  ],
  correctIndex: 0,
  touchedEnable: true
};

export const four: { args: QuizAreaProps } = template.bind({});
four.args = {
  questions: [
    "アリスは川辺でおねえさんのよこにすわって",
    "なんにもすることがないのでとても退屈",
    "一、二回はおねえさんの読んでいる本をのぞいてみたけれど、そこには絵も会話もないのです。"
  ],
  correctIndex: 0,
  touchedEnable: true
};
