import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { SkipBtn, SkipBtnProps } from "./SkipBtn";

export default {
  title: "atoms/SkipBtn",
  component: SkipBtn
} as Meta;

const template: Story<SkipBtnProps> = (args) => <SkipBtn {...args} />;

export const sample: { args: SkipBtnProps } = template.bind({});
sample.args = {
};
