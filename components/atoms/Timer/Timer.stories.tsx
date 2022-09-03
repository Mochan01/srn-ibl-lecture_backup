import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Timer, TimerProps } from "./Timer";

export default {
  title: "atoms/Timer",
  component: Timer
} as Meta;

const Template: Story<TimerProps> = (args) => <Timer {...args} />;

export const Sample: { args: TimerProps } = Template.bind({});
Sample.args = {
  duration: 2000,
  onEnd: () => {}
};
