import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ReplayBtn, ReplayBtnProps } from ".";

export default {
  title: "elements/ReplayBtn",
  component: ReplayBtn,
  argTypes: {
    variant: {
      control: { type: "radio" },
    },
  },
} as Meta;

const template: Story<ReplayBtnProps> = (args) => <ReplayBtn {...args} />;

export const sample: { args: ReplayBtnProps } = template.bind({});
sample.args = {
  onClick: () => console.log("dispatch"),
  isActive: false,
};
