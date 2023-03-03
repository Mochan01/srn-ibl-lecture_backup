import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { QuizSingleSelector, QuizSingleSelectorProps } from ".";

export default {
  title: "elements/QuizSingleSelector",
  component: QuizSingleSelector,
} as Meta;

const template: Story<QuizSingleSelectorProps> = (args) => (
  <QuizSingleSelector {...args} />
);

export const three: { args: QuizSingleSelectorProps } = template.bind({});
three.args = {
  questions: ["test1", "test2", "test3"],
  correctIndex: 1,
  onAnswer: (isCorrect) => alert(isCorrect),
};

export const four: { args: QuizSingleSelectorProps } = template.bind({});
four.args = {
  questions: ["test1", "test2", "test3", "test4"],
  correctIndex: 1,
  onAnswer: (isCorrect) => alert(isCorrect),
};
