import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { QuizAnswerBtn, QuizAnswerBtnProps, QUIZ_ANSWER_BTN } from ".";

export default {
  title: "elements/QuizAnswerBtn",
  component: QuizAnswerBtn,
  argTypes: {
    mutation: {
      options: [QUIZ_ANSWER_BTN.GRAY, QUIZ_ANSWER_BTN.RED, QUIZ_ANSWER_BTN.WHITE],
      control: { type: "radio" },
    },
  },
} as Meta;

const template: Story<QuizAnswerBtnProps> = (args) => (
  <QuizAnswerBtn {...args} />
);

export const sample: { args: QuizAnswerBtnProps } = template.bind({});
sample.args = {
  mutation: QUIZ_ANSWER_BTN.GRAY,
};
