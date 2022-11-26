import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Lecture, LectureProps } from "./Lecture";
import jsonData from "../../assets/data/lecture2.json";
import { JsonData } from '../../types';

export default {
  title: "features/Lecture",
  component: Lecture,
} as Meta;

const template: Story<LectureProps> = (args) => <Lecture {...args} />;

export const sample: { args: LectureProps } = template.bind({});
sample.args = {
  unitName: "unit00",
  unitTitle: "ダミーテキストダミーテキスト",
  onClickPrev: (progress) => {
    console.log(`onClickPrev: ${progress}`);
  },
  onClickClose: () => {
    console.log("onClickClose");
  },
  json: jsonData as JsonData,
  isPlaying: true
};
