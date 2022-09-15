import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ScaleWrapper, ScaleWrapperProps } from "./ScaleWrapper";

export default {
  title: "layouts/ScaleWrapper",
  component: ScaleWrapper
} as Meta;

const template: Story<ScaleWrapperProps> = (args) => <ScaleWrapper {...args} />;

export const sample: { args: ScaleWrapperProps } = template.bind({});
sample.args = {
  children: <img src="https://placehold.jp/1000x700.png" />
};
