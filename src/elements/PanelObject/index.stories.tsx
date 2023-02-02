import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PanelObject, PanelObjectProps } from ".";

const options = {
  options: [
    "fadein",
    "slideup",
    "slidedown",
    "slideleft",
    "slideright",
    "enlarge",
  ],
  control: { type: "select" },
};

export default {
  title: "elements/PanelObject",
  component: PanelObject,
  argTypes: {
    motion1: options,
    motion2: options,
  },
} as Meta;

const template: Story<PanelObjectProps> = (args) => <PanelObject {...args} />;

export const sample = template.bind({});
sample.args = {
  step: 0,
  depth: 0,
  children: <img src="https://placekitten.com/200/300" />,
  x: 100,
  y: 100,
};
