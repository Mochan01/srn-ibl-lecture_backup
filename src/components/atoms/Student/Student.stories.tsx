import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Student, StudentProps } from "./Student";

export default {
  title: "atoms/Student",
  component: Student
} as Meta;

const template: Story<StudentProps> = (args) => <Student {...args} />;

export const blinking: { args: StudentProps } = template.bind({});
blinking.args = {
  animation: "animation_1"
};

export const talking: { args: StudentProps } = template.bind({});
talking.args = {
  animation: "animation_2"
};

export const thinking: { args: StudentProps } = template.bind({});
thinking.args = {
  animation: "animation_3"
};


export const think_talking: { args: StudentProps } = template.bind({});
think_talking.args = {
  animation: "animation_4"
};


export const correct: { args: StudentProps } = template.bind({});
correct.args = {
  animation: "animation_5"
};


export const wrong: { args: StudentProps } = template.bind({});
wrong.args = {
  animation: "animation_6"
};
