import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PresentedBy, PresentedByProps } from "./PresentedBy";

export default {
  title: "atoms/PresentedBy",
  component: PresentedBy
} as Meta;

const template: Story<PresentedByProps> = (args) => <PresentedBy {...args} />;

export const sample: { args: PresentedByProps } = template.bind({});
sample.args = {
};
