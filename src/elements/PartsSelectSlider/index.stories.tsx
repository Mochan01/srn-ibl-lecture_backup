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
  selectedIndexes: [1, 2],
  items: [
    { name: "ああああああああ", image: "https://placekitten.com/116/116" },
    { name: "いいいいいいい", image: "https://placekitten.com/117/116" },
    { name: "うううううう", image: "https://placekitten.com/118/116" },
    { name: "えええええ", image: "https://placekitten.com/119/116" },
    { name: "おおおお", image: "https://placekitten.com/112/116" },
  ],
  onSelect: (i) => console.log(`${i}番目を選択した`),
};
