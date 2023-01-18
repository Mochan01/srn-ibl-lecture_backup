import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Parameter, ParameterProps } from ".";

export default {
  title: "elements/Parameter",
  component: Parameter,
} as Meta;

const template: Story<ParameterProps> = (args) => <Parameter {...args} />;

export const sample = template.bind({});
sample.args = {
  value: 50,
  limit: 100,
  unit: "%",
};
