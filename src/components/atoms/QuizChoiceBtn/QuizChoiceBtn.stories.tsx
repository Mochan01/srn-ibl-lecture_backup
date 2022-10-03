import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { QuizChoiceBtn, QuizChoiceBtnProps, QUIZ_CHOICE_BTN } from "./QuizChoiceBtn";

export default {
  title: "atoms/QuizChoiceBtn",
  component: QuizChoiceBtn
} as Meta;

const template: Story<QuizChoiceBtnProps> = (args) => {
  return (
    <div style={ { padding: 100 } }>
      <QuizChoiceBtn {...args} />
    </div>
  );
};

const children = "ダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストです";

export const orange: { args: QuizChoiceBtnProps } = template.bind({});
orange.args = {
  mutation: QUIZ_CHOICE_BTN.ORANGE,
  sign: "circle",
  children
};

export const white: { args: QuizChoiceBtnProps } = template.bind({});
white.args = {
  mutation: QUIZ_CHOICE_BTN.WHITE,
  sign: "circle",
  children
};

export const gray: { args: QuizChoiceBtnProps } = template.bind({});
gray.args = {
  mutation: QUIZ_CHOICE_BTN.GRAY,
  sign: "circle",
  children
};