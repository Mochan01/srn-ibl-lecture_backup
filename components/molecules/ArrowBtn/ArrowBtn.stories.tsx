import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { ArrowBtn, ArrowBtnProps } from "./ArrowBtn";

export default {
  title: "molecules/ArrowBtn",
  component: ArrowBtn
} as Meta;

const Template: Story<ArrowBtnProps> = (args) => <ArrowBtn {...args} />;

export const Prev: { args: ArrowBtnProps } = Template.bind({});
Prev.args = {
  dir: "prev"
};

export const Next: { args: ArrowBtnProps } = Template.bind({});
Next.args = {
  dir: "next"
};
