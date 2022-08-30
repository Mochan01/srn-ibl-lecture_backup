import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { SeekBarController, SeekBarControllerProps } from "./SeekBarController";

export default {
  title: "molecules/SeekBarController",
  component: SeekBarController
} as Meta;

const Template: Story<SeekBarControllerProps> = (args) => <SeekBarController {...args} />;

export const Sample: { args: SeekBarControllerProps } = Template.bind({});
Sample.args = {
  points: [10, 50, 75],
  stepsProgress: 1
};
