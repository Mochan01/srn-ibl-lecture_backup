import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Slider, SliderProps } from "./Slider";
import { Slide } from "../../molecules/Slide/Slide";
import { steps } from "../../../data/mock";

export default {
  title: "organisms/Slider",
  component: Slider
} as Meta;

const Template: Story<SliderProps> = (args) => <Slider {...args} />;

export const Sample: { args: SliderProps } = Template.bind({});
Sample.args = {
  slides: [
    <Slide currentStep={ 3 } steps={ steps } / >
  ]
};
