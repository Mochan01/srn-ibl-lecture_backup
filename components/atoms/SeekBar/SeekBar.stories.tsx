import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { SeekBar, SeekBarProps } from "./SeekBar";
import { Context } from "../../providers/Context/Context";
import { StepsFactory } from "../../../factories/StepsFactory";

export default {
  title: "atoms/SeekBar",
  component: SeekBar
} as Meta;

const Template: Story<SeekBarProps> = (args) => {
  const stepsFactory = new StepsFactory();
  return <Context stepsFactory={ stepsFactory }><SeekBar {...args} /></Context>;
};

export const Sample: { args: SeekBarProps } = Template.bind({});
Sample.args = {
};
