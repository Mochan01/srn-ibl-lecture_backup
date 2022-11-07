import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Title, TitleProps } from "./Title";

export default {
  title: "features/Title",
  component: Title
} as Meta;

const template: Story<TitleProps> = (args) => <Title {...args} />;

export const sample: { args: TitleProps } = template.bind({});
sample.args = {
  unitName: "unit00",
  unitTitle: "ダミーテキストダミーテキスト"
};
