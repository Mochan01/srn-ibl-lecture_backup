import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { QuizChoiceBtn, QuizChoiceBtnProps, QUIZ_CHOICE_BTN } from ".";

export default {
  title: "elements/QuizChoiceBtn",
  component: QuizChoiceBtn,
  argTypes: {
    mutation: {
      options: [
        QUIZ_CHOICE_BTN.ORANGE,
        QUIZ_CHOICE_BTN.WHITE,
        QUIZ_CHOICE_BTN.GRAY,
      ],
      control: { type: "radio" },
    },
    sign: {
      options: ["circle", "cross"],
      control: { type: "radio" },
    },
  },
} as Meta;

const template: Story<QuizChoiceBtnProps> = (args) => (
  <QuizChoiceBtn {...args} />
);

export const sample: { args: QuizChoiceBtnProps } = template.bind({});
sample.args = {
  mutation: QUIZ_CHOICE_BTN.GRAY,
  children: "ダミーテキストダミーテキスト",
};
