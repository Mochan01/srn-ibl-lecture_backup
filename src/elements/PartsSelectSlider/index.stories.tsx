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
  images: [
    "https://placekitten.com/116/116",
    "https://placekitten.com/116/116",
    "https://placekitten.com/116/116",
    "https://placekitten.com/116/116",
    "https://placekitten.com/116/116",
  ],
  onSelect: (i) => console.log(`${i}番目を選択した`),
};