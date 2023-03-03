import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { QuizMultiSelector, QuizMultiSelectorProps } from ".";

export default {
  title: "elements/QuizMultiSelector",
  component: QuizMultiSelector,
} as Meta;

const template: Story<QuizMultiSelectorProps> = (args) => (
  <QuizMultiSelector {...args} />
);

export const three: { args: QuizMultiSelectorProps } = template.bind({});
three.args = {
  questions: ["test1", "test2", "test3"],
  correctIndexes: [1, 2],
  onAnswer: (isCorrect) => alert(isCorrect),
};

export const four: { args: QuizMultiSelectorProps } = template.bind({});
four.args = {
  questions: ["test1", "test2", "test3", "test3"],
  correctIndexes: [1, 2],
  onAnswer: (isCorrect) => alert(isCorrect),
};
