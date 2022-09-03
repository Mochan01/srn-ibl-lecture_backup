import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { QuizArea, QuizAreaProps } from "./QuizArea";
import { questions } from "../../../data/mock";
import { SlideProgressProvider } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { StepListProvider } from "../../providers/StepListProvider/StepListProvider";
import { RunSeekProvider } from "../../providers/RunSeekProvider/RunSeekProvider";
import { PlayProvider } from "../../providers/PlayProvider/PlayProvider";

export default {
  title: "molecules/QuizArea",
  component: QuizArea
} as Meta;

const Template: Story<QuizAreaProps> = (args) => {
  return (
    <SlideProgressProvider>
      <StepListProvider>
        <PlayProvider>
          <RunSeekProvider>
            <QuizArea {...args} />
          </RunSeekProvider>
        </PlayProvider>
      </StepListProvider>
    </SlideProgressProvider>
  );
};

export const Three: { args: QuizAreaProps } = Template.bind({});
Three.args = {
  questions,
  correctIndex: 0
};

export const Four: { args: QuizAreaProps } = Template.bind({});
Four.args = {
  questions,
  correctIndex: 0
};
