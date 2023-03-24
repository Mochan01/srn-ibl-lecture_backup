import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PresentedBy, PresentedByProps } from ".";

export default {
  title: "elements/PresentedBy",
  component: PresentedBy,
  argTypes: {
    variant: {
      control: { type: "radio" },
    },
  },
} as Meta;

const template: Story<PresentedByProps> = (args) => <PresentedBy {...args} />;

export const sample: { args: PresentedByProps } = template.bind({});
sample.args = {
};
