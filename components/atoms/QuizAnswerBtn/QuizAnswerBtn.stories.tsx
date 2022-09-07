import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { QuizAnswerBtn, QuizAnswerBtnProps, QUIZ_ANSWER_BTN } from "./QuizAnswerBtn";

export default {
  title: "atoms/QuizAnswerBtn",
  component: QuizAnswerBtn
} as Meta;

const Template: Story<QuizAnswerBtnProps> = (args) => <QuizAnswerBtn {...args} />;

export const Sample: { args: QuizAnswerBtnProps } = Template.bind({});
Sample.args = {
  mutation: QUIZ_ANSWER_BTN.RED
};
