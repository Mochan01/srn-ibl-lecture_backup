import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { steps } from "../../../data/mock";
import { Slide, SlideProps } from "./Slide";
import { StepsProgressProvider } from "../../providers/StepsProgressProvider/StepsProgressProvider";

export default {
  title: "molecules/Slide",
  component: Slide
} as Meta;

const Template: Story<SlideProps> = (args) => {
  return <StepsProgressProvider><Slide {...args} /></StepsProgressProvider>
};

export const Sample: { args: SlideProps } = Template.bind({});
Sample.args = {
  steps
};
