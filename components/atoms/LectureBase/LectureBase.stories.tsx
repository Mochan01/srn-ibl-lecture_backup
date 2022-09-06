import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { LectureBase, LectureBaseProps } from "./LectureBase";

export default {
  title: "atoms/LectureBase",
  component: LectureBase
} as Meta;

const template: Story<LectureBaseProps> = (args) => <LectureBase {...args} />;

export const sample: { args: LectureBaseProps } = template.bind({});
sample.args = {
};
