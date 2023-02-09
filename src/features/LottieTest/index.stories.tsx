import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { LottieTest, LottieTestProps } from ".";

export default {
  title: "features/LottieTest",
  component: LottieTest,
} as Meta;

const template: Story<LottieTestProps> = (args) => <LottieTest {...args} />;

export const sample = template.bind({});
sample.args = {
  // path: "lottie/tesuto.json",
  // autoplay: true,
  // loop: true,
};

