import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { LottieObject, LottieObjectProps } from ".";

export default {
  title: "elements/LottieObject",
  component: LottieObject,
} as Meta;

const template: Story<LottieObjectProps> = (args) => <LottieObject {...args} />;

export const tesuto = template.bind({});
tesuto.args = {
  path: "lottie/scene1_rocket_1_1.json",
  autoplay: true,
  loop: true,
};
