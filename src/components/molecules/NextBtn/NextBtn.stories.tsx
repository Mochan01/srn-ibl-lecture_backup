import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { NextBtn, NextBtnProps } from "./NextBtn";

export default {
  title: "molecules/NextBtn",
  component: NextBtn
} as Meta;

const template: Story<NextBtnProps> = (args) => <NextBtn {...args} />;

export const sample: { args: NextBtnProps } = template.bind({});
sample.args = {
  $dir: "prev"
};
