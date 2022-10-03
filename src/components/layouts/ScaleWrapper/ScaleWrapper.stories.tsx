import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ScaleWrapper, ScaleWrapperProps } from "./ScaleWrapper";

export default {
  title: "layouts/ScaleWrapper",
  component: ScaleWrapper
} as Meta;

const template: Story<ScaleWrapperProps> = (args) => <ScaleWrapper {...args} />;

export const width: { args: ScaleWrapperProps } = template.bind({});
width.args = {
  children: <img style={ { width: 1000, height: 700 } } src="https://placehold.jp/1000x700.png" />
};

export const height: { args: ScaleWrapperProps } = template.bind({});
height.args = {
  children: <img style={ { width: 700, height: 1000 } } src="https://placehold.jp/700x1000.png" />
};
