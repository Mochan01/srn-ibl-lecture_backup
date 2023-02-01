import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { LectureRoot, LectureRootProps } from ".";
import { Lecture } from "src-ibl-lecture-master-unit/types";
import data from "../../assets/data/unit06_master.json";
import { JsonDataProviderProps } from "./providers";

export default {
  title: "templates/LectureRoot",
  component: LectureRoot,
} as Meta;

const template: Story<LectureRootProps> = (args) => <LectureRoot {...args} />;

const lectureData: Lecture[] = data.lecture[0].steps as Lecture[];

export const sample: { args: LectureRootProps } = template.bind({});
sample.args = {
  // unitName: "unit00",
  // unitTitle: "ダミーテキストダミーテキスト",
  // onLectureRootLeave: (key) => {
  //   console.log(`onLectureRootLeave: ${key}`);
  // },
  // onClickClose: () => {
  //   console.log("onClickClose");
  // },
  jsonData: lectureData as JsonDataProviderProps["jsonData"],
  children: <div>あ</div>
};
