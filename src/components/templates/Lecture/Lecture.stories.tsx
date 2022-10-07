import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Lecture, LectureProps } from "./Lecture";

export default {
  title: "templates/Lecture",
  component: Lecture
} as Meta;

const Template: Story<LectureProps> = (args) => <Lecture {...args} />;

export const Sample: { args: LectureProps } = Template.bind({});
Sample.args = {
  unitName: "unit00",
  unitTitle: "ダミーテキストダミーテキスト",
  onClickPrev: () => {
    console.log("タイトル画面に戻る");
  }
};
