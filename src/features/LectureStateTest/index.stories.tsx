import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { LectureStateTest, LectureStateTestProps } from ".";

export default {
  title: "features/LectureStateTest",
  component: LectureStateTest
} as Meta;

const template: Story<LectureStateTestProps> = (args) => <LectureStateTest {...args} />;

export const sample = template.bind({});
sample.args = {
};
