import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PrevBtn, PrevBtnProps } from ".";

export default {
  title: "elements/PrevBtn",
  component: PrevBtn,
  argTypes: {
    variant: {
      control: { type: "radio" },
    },
  },
} as Meta;

const template: Story<PrevBtnProps> = (args) => <PrevBtn {...args} />;

export const sample: { args: PrevBtnProps } = template.bind({});
sample.args = {
  onClick: () => console.log("dispatch"),
  isActive: false,
};
