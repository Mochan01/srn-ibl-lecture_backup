import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { OpenPdfBtn, OpenPdfBtnProps } from ".";
import { pdfPath } from "../../data/pdfPath";

export default {
  title: "elements/OpenPdfBtn",
  component: OpenPdfBtn,
} as Meta;

const template: Story<OpenPdfBtnProps> = (args) => <OpenPdfBtn {...args} />;

export const sample = template.bind({});
sample.args = {
  filePath: pdfPath["Lv01U09M01_result01.pdf"],
};
