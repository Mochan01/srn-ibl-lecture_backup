import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { steps } from "../../../data/mock";
import { Slide, SlideProps } from "./Slide";
import { Context } from "../../providers/Context/Context";
import { StepsFactory } from "../../../factories/StepsFactory";

export default {
  title: "molecules/Slide",
  component: Slide
} as Meta;

const Template: Story<SlideProps> = (args) => {
  const stepsFactory = new StepsFactory();
  return <Context stepsFactory={ stepsFactory }><Slide {...args} /></Context>
};

export const Sample: { args: SlideProps } = Template.bind({});
Sample.args = {
  steps
};
