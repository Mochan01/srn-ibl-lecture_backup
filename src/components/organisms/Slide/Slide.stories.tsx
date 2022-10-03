import React, { useContext, useEffect } from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Slide, SlideProps } from "./Slide";
import { SlideProgressContext, SlideProgressProvider } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { PlayContext, PlayProvider } from "../../providers/PlayProvider/PlayProvider";
import { StepListProvider } from "../../providers/StepListProvider/StepListProvider";
import { RunSeekProvider } from "../../providers/RunSeekProvider/RunSeekProvider";
import { FactoryProvider } from "../../providers/FactoryProvider/FactoryProvider";
import { IsSlideEndProvider } from "../../providers/IsSlideEndProvider/IsSlideEndProvider";
import { IsStepEndProvider } from "../../providers/IsStepEndProvider/IsStepEndProvider";

export default {
  title: "organisms/Slide",
  component: Slide
} as Meta;

const template: Story<SlideProps>  = (args) => {
  return (
    <FactoryProvider>
      <SlideProgressProvider>
        <StepListProvider>
          <PlayProvider>
            <RunSeekProvider>
              <IsSlideEndProvider>
                <IsStepEndProvider>
                  <Init />
                  <Slide {...args} />
                </IsStepEndProvider>
              </IsSlideEndProvider>
            </RunSeekProvider>
          </PlayProvider>
        </StepListProvider>
      </SlideProgressProvider>
    </FactoryProvider>
  );
};

const Init = () => {

  const { setPlay } = useContext(PlayContext);
  const { setSlideProgress } = useContext(SlideProgressContext);

  useEffect(() => {
    setPlay(true);
    setSlideProgress(1);
  }, []);

  return null;
};

export const sample: { args: SlideProps } = template.bind({});
sample.args = {
};
