import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { LaunchBtn, LaunchBtnProps } from ".";
import { keys as options } from "./config";

export default {
  title: "elements/LaunchBtn",
  component: LaunchBtn,
  argTypes: {
    variant: {
      options,
      control: { type: "radio" },
    },
  },
} as Meta;

const template: Story<LaunchBtnProps> = (args) => <LaunchBtn {...args} />;

export const sample: { args: LaunchBtnProps } = template.bind({});
sample.args = {
  variant: "OFF",
  onClick: () => console.log("launch"),
};
