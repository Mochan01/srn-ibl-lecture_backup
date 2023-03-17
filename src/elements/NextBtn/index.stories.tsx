import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { NextBtn, NextBtnProps } from ".";

export default {
  title: "elements/NextBtn",
  component: NextBtn,
  argTypes: {
    variant: {
      control: { type: "radio" },
    },
  },
} as Meta;

const template: Story<NextBtnProps> = (args) => <NextBtn {...args} />;

export const sample: { args: NextBtnProps } = template.bind({});
sample.args = {
  onClick: () => console.log("launch"),
  isBlink: false,
  isActive: false,
};
