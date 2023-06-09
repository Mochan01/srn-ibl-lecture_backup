import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { DisplayResult, DisplayResultProps } from "./index";
import masterData from "../../assets/data/satellite_assembly_mock.json";
export default {
  title: "features/DisplayResult",
  component: DisplayResult,
} as Meta;

const template: Story<DisplayResultProps> = (args) => (
  <DisplayResult {...args} />
);

const resultList = masterData.result_list;

export const sample = template.bind({});
sample.args = {
  resultList: resultList,
};
