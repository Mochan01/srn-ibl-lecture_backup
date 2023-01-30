import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ResetBtn, ResetBtnProps } from ".";

export default {
  title: "elements/ResetBtn",
  component: ResetBtn,
} as Meta;

const template: Story<ResetBtnProps> = (args) => <ResetBtn {...args} />;

export const sample = template.bind({});
sample.args = {
  onClick: () => console.log("リセットの処理を実行"),
};
