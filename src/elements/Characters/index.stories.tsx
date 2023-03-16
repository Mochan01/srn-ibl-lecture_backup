import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Characters, CharactersProps } from ".";

export default {
  title: "elements/Characters",
  component: Characters,
} as Meta;

const template: Story<CharactersProps> = (args) => <Characters {...args} />;

export const sample = template.bind({});
sample.args = {
  // max50文字
  studentDialog:
    "あいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこ",
};
