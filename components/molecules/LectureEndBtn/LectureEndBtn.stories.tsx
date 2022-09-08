import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { LectureEndBtn, LectureEndBtnProps } from "./LectureEndBtn";

export default {
  title: "molecules/LectureEndBtn",
  component: LectureEndBtn
} as Meta;

const template: Story<LectureEndBtnProps> = (args) => <LectureEndBtn {...args} />;

export const sample: { args: LectureEndBtnProps } = template.bind({});
sample.args = {
};
