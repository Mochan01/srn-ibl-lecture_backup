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
  path: "lottie/tesuto.json",
  autoplay: true,
  loop: true,
};

export const tesuto2 = template.bind({});
tesuto2.args = {
  path: "lottie/tesuto2.json",
  autoplay: true,
  loop: true,
};

export const tesuto3 = template.bind({});
tesuto3.args = {
  path: "lottie/tesuto3.json",
  autoplay: true,
  loop: true,
};
