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
  questions: ["AはAである", "AはBである", "AはCである", "AはDである"],
  correctIndex: 0,
  onAnswer: (isCorrect) => alert(isCorrect)
};

export const four: { args: QuizSelectorProps } = template.bind({});
four.args = {
  questions: ["AはAである", "AはBである", "AはCである"],
  correctIndex: 0,
  onAnswer: (isCorrect) => alert(isCorrect)
};
