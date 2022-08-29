import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { SeekBar, SeekBarProps } from "./SeekBar";
import { StepsFactory } from "../../../factories/StepsFactory";
import { StepsProgressProvider } from "../../providers/StepsProgressProvider/StepsProgressProvider";
import { SlideProgressProvider } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { StepsFactoryProvider } from "../../providers/StepsFactoryProvider/StepsFactoryProvider";

export default {
  title: "atoms/SeekBar",
  component: SeekBar
} as Meta;

const Template: Story<SeekBarProps> = (args) => {
  const stepsFactory = new StepsFactory();
  return <>
    <SlideProgressProvider>
      <StepsProgressProvider>
        <StepsFactoryProvider stepsFactory={ stepsFactory }>
          <SeekBar {...args} />
        </StepsFactoryProvider>
      </StepsProgressProvider>
    </SlideProgressProvider>
  </>
};

export const Sample: { args: SeekBarProps } = Template.bind({});
Sample.args = {
};
