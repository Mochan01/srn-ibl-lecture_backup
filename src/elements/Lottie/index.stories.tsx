import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Lottie, LottieProps } from ".";

export default {
  title: "elements/Lottie",
  component: Lottie,
} as Meta;

const template: Story<LottieProps> = (args) => <Lottie {...args} />;

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
