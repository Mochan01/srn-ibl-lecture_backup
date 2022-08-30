import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { StepsFactoryProvider } from "../../providers/StepsFactoryProvider/StepsFactoryProvider";
import { SlideProgressProvider } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { StepsProgressProvider } from "../../providers/StepsProgressProvider/StepsProgressProvider";
import { PlayProvider } from "../../providers/PlayProvider/PlayProvider";
import { ControlPanel, ControlPanelProps } from "./ControlPanel";
import { StepsFactory } from "../../../factories/StepsFactory";

export default {
  title: "organisms/ControlPanel",
  component: ControlPanel
} as Meta;

const Template: Story<ControlPanelProps> = (args) => {

  const stepsFactory = new StepsFactory();

  return (
    <StepsProgressProvider>
      <SlideProgressProvider>
        <StepsFactoryProvider stepsFactory={ stepsFactory }>
          <PlayProvider>
            <ControlPanel {...args} />
          </PlayProvider>
        </StepsFactoryProvider>
      </SlideProgressProvider>
    </StepsProgressProvider>
  );
};

export const Sample: { args: ControlPanelProps } = Template.bind({});
Sample.args = {
  stepsFactory: new StepsFactory(),
  progress: {
    slide: 0,
    step: 0
  }
};
