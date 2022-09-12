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
  children: <>ダミーテキスト</>
};

export const textMax: { args: BubbleProps } = template.bind({});
textMax.args = {
  children: <>ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</>
};
