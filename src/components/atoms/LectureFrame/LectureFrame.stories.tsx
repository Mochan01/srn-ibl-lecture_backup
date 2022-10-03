import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { LectureFrame, LectureFrameProps } from "./LectureFrame";

export default {
  title: "atoms/LectureFrame",
  component: LectureFrame
} as Meta;

const template: Story<LectureFrameProps> = (args) => <LectureFrame {...args} />;

export const sample: { args: LectureFrameProps } = template.bind({});
sample.args = {
  unitName: "Unit 21",
  unitTitle: "ダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストですダミーテキストです",
  children: (
    <div
      style={ {
        width: 140,
        height: 140,
        background: "red",
        border: "solid 5px",
        marginTop: 100,
        marginLeft: 100,
        cursor: "pointer"
      } }
      onClick={ () => alert("クリックできた") }
    >
      クリックできるか確認
    </div>
  )
};
