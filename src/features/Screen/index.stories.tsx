import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Screen, ScreenProps } from ".";
import { screenData } from "./config";

export default {
  title: "features/Screen",
  component: Screen,
  argTypes: {
    step: {
      control: { type: "number", min: 1, max: screenData.length, step: 1 },
    },
  },
} as Meta;

const template: Story<ScreenProps> = (args) => <Screen {...args} />;

export const sample = template.bind({});
sample.args = {
  slide: 1,
  step: 1,
  actionGoTo: (actionGoto, missionID) =>
    console.log(`${actionGoto}に飛ぶ、ミッションID: ${missionID}`),
  onAnswer: (isAnswer) => console.log(isAnswer ? "正解" : "不正解"),
  screenData,
};
