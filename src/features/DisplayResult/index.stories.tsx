import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { DisplayResult, DisplayResultProps } from "./index";
import { ResultList } from "src-ibl-lecture-master-special/types";
export default {
  title: "features/DisplayResult",
  component: DisplayResult,
} as Meta;

const template: Story<DisplayResultProps> = (args) => (
  <DisplayResult {...args} />
);

const mockResultList: ResultList[] = [
  {
    result_id: "result_1",
    part_a: "4_2",
    part_a_name: "高分解能サーモグラフィー",
    part_b: "",
    part_b_name: "",
    result_pdf: "Lv01U09M01_result01.pdf",
  },
  {
    result_id: "result_2",
    part_a: "",
    part_a_name: "",
    part_b: "4_3",
    part_b_name: "標準SAR\n",
    result_pdf: "Lv01U09M01_result01.pdf",
  },
  {
    result_id: "result_3",
    part_a: "",
    part_a_name: "",
    part_b: "4_6",
    part_b_name: "高分解能カメラ",
    result_pdf: "result-4_5-4_6.pdf",
  },
  {
    result_id: "result_4",
    part_a: "4_2",
    part_a_name: "高分解能サーモグラフィー",
    part_b: "4_7",
    part_b_name: "高分解能カメラ",
    result_pdf: "result-4_5-4_6.pdf",
  },
  {
    result_id: "result_5",
    part_a: "4_2",
    part_a_name: "高分解能サーモグラフィー",
    part_b: "4_3",
    part_b_name: "標準SAR\n",
    result_pdf: "result-4_2-4_3.pdf",
  },
  {
    result_id: "result_6",
    part_a: "4_5",
    part_a_name: "広域カメラ",
    part_b: "",
    part_b_name: "",
    result_pdf: "result-4_5.pdf",
  },
  {
    result_id: "result_7",
    part_a: "5_2",
    part_a_name: "地上の基地局との電波通信装置（高速）",
    part_b: "",
    part_b_name: "",
    result_pdf: "result-5_2.pdf",
  },
  {
    result_id: "result_8",
    part_a: "",
    part_a_name: "",
    part_b: "7_1",
    part_b_name: "限定処理特化型コンピュータ",
    result_pdf: "Lv01U09M01_result01.pdf",
  },
  {
    result_id: "result_9",
    part_a: "5_2",
    part_a_name: "地上の基地局との電波通信装置（高速）",
    part_b: "7_1",
    part_b_name: "限定処理特化型コンピュータ",
    result_pdf: "result-5_2-7_1.pdf",
  },
  {
    result_id: "result_10",
    part_a: "4_5",
    part_a_name: "広域カメラ",
    part_b: "7_1",
    part_b_name: "限定処理特化型コンピュータ",
    result_pdf: "result-5_2-7_1.pdf",
  },
];

export const sample = template.bind({});
sample.args = {
  resultList: mockResultList,
};
