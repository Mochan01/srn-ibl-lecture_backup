import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Step, StepProps } from "./Step";

export default {
  title: "atoms/Step",
  component: Step
} as Meta;

const Template: Story<StepProps> = (args) => <Step {...args} />;

export const a: { args: StepProps } = Template.bind({});
a.args = {
  $src: "sample_a.png"
};

export const b: { args: StepProps } = Template.bind({});
b.args = {
  $src: "sample_b.png"
};

export const c: { args: StepProps } = Template.bind({});
c.args = {
  $src: "sample_c.png"
};