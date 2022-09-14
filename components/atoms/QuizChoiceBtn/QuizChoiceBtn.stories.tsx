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

export const oneLine: { args: QuizChoiceBtnProps } = template.bind({});
oneLine.args = {
  mutation: QUIZ_CHOICE_BTN.ORANGE,
  children: "ダミー"
};

export const twoLine: { args: QuizChoiceBtnProps } = template.bind({});
twoLine.args = {
  mutation: QUIZ_CHOICE_BTN.ORANGE,
  children: "ダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストです"
};

export const newLine: { args: QuizChoiceBtnProps } = template.bind({});
newLine.args = {
  mutation: QUIZ_CHOICE_BTN.ORANGE,
  children: "改行します<br>1行目"
};
