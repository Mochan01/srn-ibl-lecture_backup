import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { QuizChoiceBtn, QuizChoiceBtnProps, QUIZ_CHOICE_BTN } from "./QuizChoiceBtn";

export default {
  title: "atoms/QuizChoiceBtn",
  component: QuizChoiceBtn
} as Meta;

const Template: Story<QuizChoiceBtnProps> = (args) => <QuizChoiceBtn {...args} />;

export const Sample: { args: QuizChoiceBtnProps } = Template.bind({});
Sample.args = {
  mutation: QUIZ_CHOICE_BTN.ORANGE,
  children: "ダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストです"
};
