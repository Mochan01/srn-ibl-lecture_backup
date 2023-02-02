import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Title, TitleProps } from ".";
import data from "../../assets/data/unit06_master.json";
import { JsonData } from '../../types';

export default {
  title: "templates/Title",
  component: Title,
} as Meta;

const template: Story<TitleProps> = (args) => <Title {...args} />;

export const sample: { args: TitleProps } = template.bind({});
sample.args = {
  unitName: "unit00",
  unitTitle: "ダミーテキストダミーテキスト",
  // @ts-ignore マスターデータちゃんと入力してもらったら型合うはず...
  data: data as JsonData,
};
