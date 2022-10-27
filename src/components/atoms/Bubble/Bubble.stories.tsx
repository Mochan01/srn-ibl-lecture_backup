import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Bubble, BubbleProps } from "./Bubble";

export default {
  title: "atoms/Bubble",
  component: Bubble
} as Meta;

const template: Story<BubbleProps> = (args) => <Bubble {...args} />;

export const textMin: { args: BubbleProps } = template.bind({});
textMin.args = {
  children: "最強の電話じゃん！"
};

export const newLine: { args: BubbleProps } = template.bind({});
newLine.args = {
  children: "1行目<br>2行目<br>3行目<br>4行目"
};
