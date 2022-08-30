import React, { useState } from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { SeekBar, SeekBarProps } from "./SeekBar";

export default {
  title: "atoms/SeekBar",
  component: SeekBar
} as Meta;

const Template: Story<SeekBarProps> = () => {
  const [value, setValue] = useState(0);
  return <SeekBar value={ value } setValue={ setValue } />;
};

export const Sample: { args: SeekBarProps } = Template.bind({});