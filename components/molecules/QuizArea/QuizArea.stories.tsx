import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { QuizArea, QuizAreaProps } from "./QuizArea";
import { SlideProgressProvider } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { StepListProvider } from "../../providers/StepListProvider/StepListProvider";
import { RunSeekProvider } from "../../providers/RunSeekProvider/RunSeekProvider";
import { PlayProvider } from "../../providers/PlayProvider/PlayProvider";
import { FactoryProvider } from "../../providers/FactoryProvider/FactoryProvider";
import { SIZE } from "../../../data/SIZE";

export default {
  title: "molecules/QuizArea",
  component: QuizArea
} as Meta;

const template: Story<QuizAreaProps> = (args) => {
  return (
    <FactoryProvider>
      <SlideProgressProvider>
        <StepListProvider>
          <PlayProvider>
            <RunSeekProvider>
              <QuizArea {...args} />
            </RunSeekProvider>
          </PlayProvider>
        </StepListProvider>
      </SlideProgressProvider>
    </FactoryProvider>
  );
};


export const three: { args: QuizAreaProps } = template.bind({});
three.args = {
  questions: [
    "アリスは川辺でおねえさんのよこにすわって",
    "なんにもすることがないのでとても退屈",
    "一、二回はおねえさんの読んでいる本をのぞいてみたけれど、そこには絵も会話もないのです。"
  ],
  $x: 0,
  $y: 0,
  $width: SIZE.QUIZ_AREA_W,
  $height: SIZE.QUIZ_AREA_TREE_H,
  correctIndex: 0
};

export const four: { args: QuizAreaProps } = template.bind({});
four.args = {
  questions: [
    "アリスは川辺でおねえさんのよこにすわって",
    "なんにもすることがないのでとても退屈",
    "一、二回はおねえさんの読んでいる本をのぞいてみたけれど、そこには絵も会話もないのです。",
    "「絵や会話のない本なんて、なんの役にもたたないじゃないの」とアリスは"
  ],
  $x: 0,
  $y: 0,
  $width: SIZE.QUIZ_AREA_W,
  $height: SIZE.QUIZ_AREA_FOUR_H,
  correctIndex: 0
};

export const transform: { args: QuizAreaProps } = template.bind({});
transform.args = {
  questions: [
    "アリスは川辺でおねえさんのよこにすわって",
    "なんにもすることがないのでとても退屈",
    "一、二回はおねえさんの読んでいる本をのぞいてみたけれど、そこには絵も会話もないのです。"
  ],
  correctIndex: 0,
  $x: 63,
  $y: 455,
  $width: 413,
  $height: 211
};
