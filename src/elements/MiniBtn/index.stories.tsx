import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { MiniBtn, MiniBtnProps } from ".";

export default {
  title: "elements/MiniBtn",
  component: MiniBtn,
  argTypes: {
    variant: {
      control: { type: "radio" },
    },
  },
} as Meta;

const template: Story<MiniBtnProps> = (args) => <MiniBtn {...args} />;

export const sample: { args: MiniBtnProps } = template.bind({});
sample.args = {
  variant: "nextOn",
  hoverVariant: "nextOff",
  onClick: () => console.log("launch"),
};
