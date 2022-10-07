import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Teacher, TeacherProps } from "./Teacher";

export default {
  title: "atoms/Teacher",
  component: Teacher
} as Meta;

const template: Story<TeacherProps> = (args) => <Teacher {...args} />;

export const blinking: { args: TeacherProps } = template.bind({});
blinking.args = {
  animation: "animation_1"
};

export const talking: { args: TeacherProps } = template.bind({});
talking.args = {
  animation: "animation_2"
};

export const correct: { args: TeacherProps } = template.bind({});
correct.args = {
  animation: "animation_5"
};

export const wrong: { args: TeacherProps } = template.bind({});
wrong.args = {
  animation: "animation_6"
};