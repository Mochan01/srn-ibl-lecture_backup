import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { stepA, stepB, stepC } from "../../../data/mock";
import { Step, StepProps } from "./Step";

export default {
  title: "atoms/Step",
  component: Step
} as Meta;

const Template: Story<StepProps> = (args) => <Step {...args} />;

export const a: { args: StepProps } = Template.bind({});
a.args = stepA;

export const b: { args: StepProps } = Template.bind({});
b.args = stepB;

export const c: { args: StepProps } = Template.bind({});
c.args = stepC;