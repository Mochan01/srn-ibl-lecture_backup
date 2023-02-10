import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Title, TitleProps } from ".";
import data from "../../assets/data/unit00_master.json";
import { JsonData } from "../../types";

export default {
  title: "templates/Title",
  component: Title,
} as Meta;

const template: Story<TitleProps> = (args) => <Title {...args} />;

export const sample: { args: TitleProps } = template.bind({});
sample.args = {
  unitName: "unit00",
  unitTitle: "ダミーテキストダミーテキスト",
  onLastStep: () => console.log("本編に遷移"),
  data: data as JsonData,
};
