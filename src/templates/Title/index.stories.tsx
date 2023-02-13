import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Title, TitleProps } from ".";
import data from "../../assets/data/unit00_master.json";
import { JsonData } from "../../types";
import { Intro } from "src-ibl-lecture-master-unit/types";

export default {
  title: "templates/Title",
  component: Title,
} as Meta;

const template: Story<TitleProps> = (args) => <Title {...args} />;

const intro = data.intro[0].steps as Intro[];

export const sample: { args: TitleProps } = template.bind({});
sample.args = {
  unitName: "unit00",
  unitTitle: "ダミーテキストダミーテキスト",
  onLastStep: () => console.log("本編に遷移"),
  data: intro,
};
