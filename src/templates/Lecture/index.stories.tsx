import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Lecture, LectureProps } from ".";
import jsonData from "../../assets/data/unit00_master.json";
import { Lectures } from "src-ibl-lecture-master-unit/types";

export default {
  title: "templates/Lecture",
  component: Lecture,
} as Meta;

const template: Story<LectureProps> = (args) => <Lecture {...args} />;

const data = jsonData.lecture[0].steps as Lectures;

export const sample: { args: LectureProps } = template.bind({});
sample.args = {
  unitName: "unit00",
  unitTitle: "ダミーテキストダミーテキスト",
  onLectureLeave: (key) => {
    console.log(`onLectureLeave: ${key}`);
  },
  onClose: () => {
    console.log("onClickClose");
  },
  data
};
