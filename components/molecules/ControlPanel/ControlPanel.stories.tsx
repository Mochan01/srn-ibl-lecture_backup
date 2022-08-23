import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { ControlPanel, ControlPanelProps } from "./ControlPanel";

export default {
  title: "molecules/ControlPanel",
  component: ControlPanel
} as Meta;

const Template: Story<ControlPanelProps> = (args) => <ControlPanel {...args} />;

export const Sample: { args: ControlPanelProps } = Template.bind({});
Sample.args = {
  points: [25, 30, 60]
};
