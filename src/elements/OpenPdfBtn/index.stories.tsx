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
  filePath:
    "https://www.kansaigaidai.ac.jp/asp/img/pdf/82/7a79c35f7ce0704dec63be82440c8182.pdf",
};
