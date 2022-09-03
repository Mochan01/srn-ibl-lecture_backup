import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { stepA, stepB, stepC } from "../../../data/mock";
import { Panel, PanelProps } from "./Panel";

export default {
  title: "atoms/Panel",
  component: Panel
} as Meta;

const Template: Story<PanelProps> = (args) => <Panel {...args} />;

export const a: { args: PanelProps } = Template.bind({});
a.args = stepA;

export const b: { args: PanelProps } = Template.bind({});
b.args = stepB;

export const c: { args: PanelProps } = Template.bind({});
c.args = stepC;