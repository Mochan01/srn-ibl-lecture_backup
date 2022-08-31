import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { QuizArea, QuizAreaProps } from "./QuizArea";

export default {
  title: "molecules/QuizArea",
  component: QuizArea
} as Meta;

const Template: Story<QuizAreaProps> = (args) => <QuizArea {...args} />;

export const Three: { args: QuizAreaProps } = Template.bind({});
Three.args = {
  questions: [
    "アリスは川辺でおねえさんのよこにすわって",
    "なんにもすることがないのでとても退屈",
    "一、二回はおねえさんの読んでいる本をのぞいてみたけれど、そこには絵も会話もないのです。"
  ],
  correctIndex: 0
};

export const Four: { args: QuizAreaProps } = Template.bind({});
Four.args = {
  questions: [
    "アリスは川辺でおねえさんのよこにすわって",
    "なんにもすることがないのでとても退屈",
    "一、二回はおねえさんの読んでいる本をのぞいてみたけれど、そこには絵も会話もないのです。",
    "「絵や会話のない本なんて、なんの役にもたたないじゃないの」とアリスは"
  ],
  correctIndex: 0
};
