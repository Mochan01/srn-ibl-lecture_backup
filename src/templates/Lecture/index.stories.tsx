import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Lecture, LectureProps } from ".";
import data from "../../assets/data/unit00_master.json";
import { JsonData } from "../../types";
import { Lecture as LectureDataType } from "src-ibl-lecture-master-unit/types";

export default {
  title: "templates/Lecture",
  component: Lecture,
} as Meta;

const template: Story<LectureProps> = (args) => <Lecture {...args} />;

const lecture = data.lecture[0].steps as LectureDataType[];

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
  data: lecture as LectureDataType[],
};
