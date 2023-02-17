import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { LaunchAnimation, LaunchAnimationProps } from ".";
import { keys as options } from "./config";

export default {
  title: "features/LaunchAnimation",
  component: LaunchAnimation,
  argTypes: {
    scene: {
      options,
      control: { type: "radio" },
    },
  },
} as Meta;

const template: Story<LaunchAnimationProps> = (args) => <LaunchAnimation {...args} />;

export const sample = template.bind({});
sample.args = {
  rocketID: "1_1",
  busID: "2_1",
  batteryID: "3_1"
};
