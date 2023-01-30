import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { QuizAnswerBtn, QuizAnswerBtnProps } from ".";
import { keys as options } from "./config";

export default {
  title: "elements/QuizAnswerBtn",
  component: QuizAnswerBtn,
  argTypes: {
    variant: {
      options,
      control: { type: "radio" },
    },
  },
} as Meta;

const template: Story<QuizAnswerBtnProps> = (args) => (
  <QuizAnswerBtn {...args} />
);

export const sample: { args: QuizAnswerBtnProps } = template.bind({});
sample.args = {
  variant: "GRAY",
};