import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Lecture, LectureProps } from ".";
import data from "../../assets/data/unit01_master.json";
import { JsonData } from '../../types';

export default {
  title: "templates/Lecture",
  component: Lecture,
} as Meta;

const template: Story<LectureProps> = (args) => <Lecture {...args} />;

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
  data: data as JsonData,
};
