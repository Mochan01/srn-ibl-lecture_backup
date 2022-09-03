import React, { useContext, useEffect } from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { steps } from "../../../data/mock";
import { Slide, SlideProps } from "./Slide";
import { SlideProgressContext, SlideProgressProvider } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { StepsProgressContext, StepsProgressProvider } from "../../providers/StepsProgressProvider/StepsProgressProvider";
import { PlayContext, PlayProvider } from "../../providers/PlayProvider/PlayProvider";
import { StepListProvider } from "../../providers/StepListProvider/StepListProvider";

export default {
  title: "organisms/Slide",
  component: Slide
} as Meta;

const Template: Story<SlideProps>  = (args) => {
  return (
    <SlideProgressProvider>
      <StepsProgressProvider>
        <StepListProvider>
          <PlayProvider>
            <Init />
            <Slide {...args} />
          </PlayProvider>
        </StepListProvider>
      </StepsProgressProvider>
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
