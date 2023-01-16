import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { QuizInput, QuizInputProps } from ".";

export default {
  title: "elements/QuizInput",
  component: QuizInput,
} as Meta;

const template: Story<QuizInputProps> = (args) => <QuizInput {...args} />;

export const sample: { args: QuizInputProps } = template.bind({});
sample.args = {
  answer: "AはAである",
  onAnswer: (isCorrect) => alert(isCorrect),
};
