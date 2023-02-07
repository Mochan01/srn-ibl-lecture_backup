import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { TwoPartsResultCard, TwoPartsResultCardProps } from ".";

export default {
  title: "elements/ TwoPartsResultCard ",
  component: TwoPartsResultCard,
} as Meta;

const template: Story<TwoPartsResultCardProps> = (args) => (
  <TwoPartsResultCard {...args} />
);

export const sample = template.bind({});
sample.args = {
  resultList: {
    result_id: "result_1",
    part_a: "4_2",
    part_a_name: "高分解能サーモグラフィー",
    part_b: "4_3",
    part_b_name: "標準SAR\n",
    result_pdf: "result-4_2-4_3.pdf",
  },
};
