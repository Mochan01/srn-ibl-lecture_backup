import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { CloseBtn, CloseBtnProps } from "./CloseBtn";

export default {
  title: "atoms/CloseBtn",
  component: CloseBtn
} as Meta;

const template: Story<CloseBtnProps> = (args) => <CloseBtn {...args} />;

export const sample: { args: CloseBtnProps } = template.bind({});
sample.args = {
};
