import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PartsSelectSlider, PartsSelectSliderProps } from ".";

export default {
  title: "elements/PartsSelectSlider",
  component: PartsSelectSlider,
} as Meta;

const template: Story<PartsSelectSliderProps> = (args) => (
  <PartsSelectSlider {...args} />
);

export const sample = template.bind({});
sample.args = {
  selectIndex: 0,
  selectedIDs: ["1_1", "1_3"],
  items: [
    { name: "ああああああああ", partID: "1_1" },
    { name: "いいいいいいい", partID: "1_2" },
    { name: "うううううう", partID: "1_3" },
    { name: "えええええ", partID: "1_4" },
    { name: "おおおお", partID: "1_5" },
  ],
  onSelect: (i) => console.log(`${i}番目を選択した`),
};
