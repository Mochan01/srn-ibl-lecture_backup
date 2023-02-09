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
  resultList: {
    result_id: "result_1",
    part_a: "4_2",
    part_a_name: "高分解能サーモグラフィー",
    part_b: "",
    part_b_name: "",
    result_pdf: "result-4_2.pdf",
  },
};
