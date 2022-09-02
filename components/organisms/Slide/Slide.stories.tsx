import React, { useContext, useEffect } from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { steps } from "../../../data/mock";
import { Slide, SlideProps } from "./Slide";
import { SlideProgressContext, SlideProgressProvider } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { StepsFactoryProvider } from "../../providers/StepsFactoryProvider/StepsFactoryProvider";
import { StepsProgressContext, StepsProgressProvider } from "../../providers/StepsProgressProvider/StepsProgressProvider";
import { StepsFactory } from "../../../factories/StepsFactory";
import { PlayContext, PlayProvider } from "../../providers/PlayProvider/PlayProvider";
import { SeekProgressProvider } from "../../providers/SeekProgressProvider/SeekProgressProvider";
import { StepListProvider } from "../../providers/StepListProvider/StepListProvider";

export default {
  title: "organisms/Slide",
  component: Slide
} as Meta;

const Template: Story<SlideProps>  = (args) => {

  const stepsFactory = new StepsFactory();

  return (
    <SlideProgressProvider>
      <StepsFactoryProvider stepsFactory={ stepsFactory }>
        <StepsProgressProvider>
          <SeekProgressProvider>
            <StepListProvider stepsFactory={ stepsFactory }>
              <PlayProvider>
                <Init />
                <Slide {...args} />
              </PlayProvider>
            </StepListProvider>
          </SeekProgressProvider>
        </StepsProgressProvider>
      </StepsFactoryProvider>
    </SlideProgressProvider>
  );
};

const Init = () => {

  const { setPlay } = useContext(PlayContext);
  const { setStepsProgress } = useContext(StepsProgressContext);
  const { setSlideProgress } = useContext(SlideProgressContext);

  useEffect(() => {
    setPlay(true);
    setStepsProgress(0);
    setSlideProgress(1);
  }, []);

  return null;
};

export const Sample: { args: SlideProps } = Template.bind({});
Sample.args = {
  steps,
  stepsProgress: 0
};
