import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PartResultCard, PartResultCardProps } from ".";

export default {
  title: "elements/PartResultCard ",
  component: PartResultCard,
} as Meta;

const template: Story<PartResultCardProps> = (args) => (
  <PartResultCard {...args} />
);

export const sample = template.bind({});
sample.args = {
  partID: "4_2",
  partName: "高分解能サーモグラフィー",
};
