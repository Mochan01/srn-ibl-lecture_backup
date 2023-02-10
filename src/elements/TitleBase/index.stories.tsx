import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { TitleBase, TitleBaseProps } from ".";

export default {
  title: "elements/TitleBase",
  component: TitleBase,
} as Meta;

const template: Story<TitleBaseProps> = (args) => <TitleBase {...args} />;

export const sample = template.bind({});
sample.args = {
  children: "ああああああああああああああああああああ",
};
