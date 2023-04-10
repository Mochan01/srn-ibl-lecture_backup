import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Parameter, ParameterProps } from ".";

const limit = 100;

export default {
  title: "elements/Parameter",
  component: Parameter,
  argTypes: {
    value: { control: { type: "range", min: 0, max: limit + 50, step: 1 } },
    limit: { control: "radio", options: [limit, 0, undefined] },
  },
} as Meta;

const template: Story<ParameterProps> = (args) => <Parameter {...args} />;

export const sample = template.bind({});
sample.args = {
  value: 0,
  limit,
  title: "製造コスト",
  unit: "億円",
};
