import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PartsSelectTab, PartsSelectTabProps } from ".";

export default {
  title: "elements/PartsSelectTab",
  component: PartsSelectTab,
} as Meta;

const template: Story<PartsSelectTabProps> = (args) => (
  <PartsSelectTab {...args} />
);

export const sample = template.bind({});
sample.args = {
  onChange: (i) => console.log(`${i}番目を選択した`),
};
