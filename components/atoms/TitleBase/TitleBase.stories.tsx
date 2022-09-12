import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { TitleBase, TitleBaseProps } from "./TitleBase";

export default {
  title: "atoms/TitleBase",
  component: TitleBase
} as Meta;

const template: Story<TitleBaseProps> = (args) => <TitleBase {...args} />;

export const sample: { args: TitleBaseProps } = template.bind({});
sample.args = {
  unitName: "Unit 21",
  unitTitle: "ダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストです",
  onClick: () => console.log("hoge")
};
