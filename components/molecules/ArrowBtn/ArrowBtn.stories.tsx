import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { ArrowBtn, ArrowBtnProps } from "./ArrowBtn";

export default {
  title: "molecules/ArrowBtn",
  component: ArrowBtn
} as Meta;

const template: Story<ArrowBtnProps> = (args) => <ArrowBtn {...args} />;

export const sample: { args: ArrowBtnProps } = template.bind({});
sample.args = {
  $dir: "prev"
};
