import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PlayBtn, PlayBtnProps } from ".";

export default {
  title: "elements/PlayBtn",
  component: PlayBtn,
  argTypes: {
    variant: {
      control: { type: "radio" },
    },
  },
} as Meta;

const template: Story<PlayBtnProps> = (args) => <PlayBtn {...args} />;

export const sample: { args: PlayBtnProps } = template.bind({});
sample.args = {
  onClick: () => console.log("dispatch"),
  isPlaying: true,
  isActive: false,
};
