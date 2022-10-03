import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { PrevBtn, PrevBtnProps } from "./PrevBtn";

export default {
  title: "molecules/PrevBtn",
  component: PrevBtn
} as Meta;

const template: Story<PrevBtnProps> = (args) => <PrevBtn {...args} />;

export const sample: { args: PrevBtnProps } = template.bind({});
sample.args = {
  $dir: "prev"
};
