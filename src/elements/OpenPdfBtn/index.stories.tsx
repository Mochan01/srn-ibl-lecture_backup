import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { OpenPdfBtn, OpenPdfBtnProps } from ".";

export default {
  title: "elements/OpenPdfBtn",
  component: OpenPdfBtn,
} as Meta;

const template: Story<OpenPdfBtnProps> = (args) => <OpenPdfBtn {...args} />;

export const sample = template.bind({});
sample.args = {
  onClick: () => console.log("リセットの処理を実行"),
};
