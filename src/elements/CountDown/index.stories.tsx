import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { CountDown, CountDownProps } from ".";

export default {
  title: "elements/CountDown",
  component: CountDown,
} as Meta;

const template: Story<CountDownProps> = (args) => <CountDown {...args} />;

export const sample = template.bind({});
sample.args = {
  initialTimeSeconds: 5,
  onEnd: () => console.log("終了時の処理"),
};
