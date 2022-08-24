import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Slider, SliderProps } from "./Slider";
import { Slide } from "../../molecules/Slide/Slide";
import { steps } from "../../../data/mock";
import { SlideProgressProvider } from "../../providers/SlideProgressProvider/SlideProgressProvider";

export default {
  title: "molecules/Slider",
  component: Slider
} as Meta;

const Template: Story<SliderProps> = (args) => {
  return <SlideProgressProvider><Slider {...args} /></SlideProgressProvider>;
};

export const Sample: { args: SliderProps } = Template.bind({});
Sample.args = {
  children: [
    <Slide steps={ steps } / >,
    <Slide steps={ steps } / >,
    <Slide steps={ steps } / >
  ]
};
