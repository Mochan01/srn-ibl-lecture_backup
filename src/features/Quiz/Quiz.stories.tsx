import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Quiz, QuizProps } from "./Quiz";

export default {
  title: "features/Quiz",
  component: Quiz,
} as Meta;

const template: Story<QuizProps> = (args) => <Quiz {...args} />;

export const sample: { args: QuizProps } = template.bind({});
sample.args = {
};
