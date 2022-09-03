import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { FrameUnit, FrameUnitProps } from "./FrameUnit";
import { unitTitleProps } from "../../../data/mock";

export default {
  title: "molecules/FrameUnit",
  component: FrameUnit
} as Meta;

const template: Story<FrameUnitProps> = (args) => <FrameUnit {...args} />;

export const sample: { args: FrameUnitProps } = template.bind({});
sample.args = unitTitleProps;
