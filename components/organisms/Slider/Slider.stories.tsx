import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Slider, SliderProps } from "./Slider";
import { StepsFactoryProvider } from "../../providers/StepsFactoryProvider/StepsFactoryProvider";
import { StepsFactory } from "../../../factories/StepsFactory";
import { SlideProgressProvider } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { StepsProgressProvider } from "../../providers/StepsProgressProvider/StepsProgressProvider";
import { PlayProvider } from "../../providers/PlayProvider/PlayProvider";

export default {
  title: "organisms/Slider",
  component: Slider
} as Meta;

const Template: Story<SliderProps> = (args) => {

  const stepsFactory = new StepsFactory();

  return <>
    <SlideProgressProvider>
      <StepsProgressProvider>
        <StepsFactoryProvider stepsFactory={ stepsFactory }>
          <PlayProvider>
            <Slider {...args} />
          </PlayProvider>
        </StepsFactoryProvider>
      </StepsProgressProvider>
    </SlideProgressProvider>
  </>;
};

export const Sample: { args: SliderProps } = Template.bind({});
Sample.args = {
};
