import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Frame, FrameProps } from "./Frame";

export default {
  title: "atoms/Frame",
  component: Frame
} as Meta;

const template: Story<FrameProps> = (args) => <Frame {...args} />;

export const sample: { args: FrameProps } = template.bind({});
sample.args = {
  unitName: "Unit 21",
  unitTitle: "ダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストです"
};
