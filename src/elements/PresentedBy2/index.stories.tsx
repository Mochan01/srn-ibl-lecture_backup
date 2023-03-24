import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PresentedBy2, PresentedBy2Props } from ".";

export default {
  title: "elements/PresentedBy2",
  component: PresentedBy2,
  argTypes: {
    variant: {
      control: { type: "radio" },
    },
  },
} as Meta;

const template: Story<PresentedBy2Props> = (args) => <PresentedBy2 {...args} />;

export const sample: { args: PresentedBy2Props } = template.bind({});
sample.args = {
};
