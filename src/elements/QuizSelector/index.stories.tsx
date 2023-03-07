import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { QuizSelector, QuizSelectorProps } from ".";

export default {
  title: "elements/QuizSelector",
  component: QuizSelector,
} as Meta;

const template: Story<QuizSelectorProps> = (args) => <QuizSelector {...args} />;

export const three: { args: QuizSelectorProps } = template.bind({});
three.args = {
  questionSelect: {
    question_y: 0,
    question_x: 0,
    button_1: "100機ぐらい",
    button_2: "1000機ぐらい",
    button_3: "3000機ぐらい",
    ans_1: true,
    ans_2: false,
    ans_3: false,
    ans_4: false,
  },
  onAnswer: (isCorrect) => alert(isCorrect),
};

export const four: { args: QuizSelectorProps } = template.bind({});
four.args = {
  questionSelect: {
    question_y: 0,
    question_x: 0,
    button_1: "100機ぐらい",
    button_2: "1000機ぐらい",
    button_3: "3000機ぐらい",
    button_4: "4500機ぐらい",
    ans_1: false,
    ans_2: false,
    ans_3: false,
    ans_4: true,
  },
  onAnswer: (isCorrect) => alert(isCorrect),
};
export const multi: { args: QuizSelectorProps } = template.bind({});
multi.args = {
  questionSelect: {
    question_y: 0,
    question_x: 0,
    button_1: "100機ぐらい",
    button_2: "1000機ぐらい",
    button_3: "3000機ぐらい",
    button_4: "4500機ぐらい",
    ans_1: true,
    ans_2: true,
    ans_3: true,
    ans_4: true,
  },
  onAnswer: (isCorrect) => alert(isCorrect),
};
