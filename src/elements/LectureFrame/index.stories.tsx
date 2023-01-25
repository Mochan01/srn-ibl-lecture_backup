import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { LectureFrame, LectureFrameProps } from ".";

export default {
  title: "elements/LectureFrame",
  component: LectureFrame,
} as Meta;

const template: Story<LectureFrameProps> = (args) => <LectureFrame {...args} />;

export const sample = template.bind({});
sample.args = {
  unitName: "unit00",
  unitTitle: "ユニットタイトル",
  children: (
    <>
      <div>ああああああああああ</div>
      <button>特に意味のないボタン</button>
      <div>ああああああああああ</div>
    </>
  ),
};
