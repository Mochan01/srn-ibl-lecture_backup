import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { QuizArea, QuizAreaProps } from "./QuizArea";
import { SIZE } from "../../../data/SIZE";

export default {
  title: "molecules/QuizArea",
  component: QuizArea
} as Meta;

const template: Story<QuizAreaProps> = (args) => <QuizArea {...args} />

export const three: { args: QuizAreaProps } = template.bind({});
three.args = {
  questions: [
    "アリスは川辺でおねえさんのよこにすわって",
    "なんにもすることがないのでとても退屈",
    "一、二回はおねえさんの読んでいる本をのぞいてみたけれど、そこには絵も会話もないのです。"
  ],
  $x: 0,
  $y: 0,
  $width: 524,
  $height: 176,
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
  $width: 524,
  $height: 260,
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
  $x: 100,
  $y: 100,
  $width: 524 / 2,
  $height: 176 / 2
};
