import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PartCost, PartCostProps } from ".";

export default {
  title: "elements/PartCost",
  component: PartCost,
} as Meta;

const template: Story<PartCostProps> = (args) => <PartCost {...args} />;

export const sample = template.bind({});
sample.args = {
  cost_name: "打ち上げ可能質量(kg)",
  cost: 20000,
  isCostOver: false,
};
