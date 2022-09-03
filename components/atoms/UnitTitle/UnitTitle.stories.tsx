import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { UnitTitle, UnitTitleProps } from "./UnitTitle";
import { unitTitleProps } from "../../../data/mock";

export default {
  title: "atoms/UnitTitle",
  component: UnitTitle
} as Meta;

const template: Story<UnitTitleProps> = (args) => <UnitTitle {...args} />;

export const sample: { args: UnitTitleProps } = template.bind({});
sample.args = unitTitleProps;
