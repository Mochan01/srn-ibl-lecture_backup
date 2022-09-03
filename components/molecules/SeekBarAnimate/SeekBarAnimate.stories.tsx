import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { SeekBarAnimate, SeekBarAnimateProps } from "./SeekBarAnimate";
import { RunSeekProvider } from "../../providers/RunSeekProvider/RunSeekProvider";

export default {
  title: "molecules/SeekBarAnimate",
  component: SeekBarAnimate
} as Meta;

const Template: Story<SeekBarAnimateProps> = (args) => {
  return (
    <RunSeekProvider>
      <SeekBarAnimate {...args} />
    </RunSeekProvider>
  );
};

export const Sample: { args: SeekBarAnimateProps } = Template.bind({});
Sample.args = {
  duration: 5000,
  percentage: 0
};
