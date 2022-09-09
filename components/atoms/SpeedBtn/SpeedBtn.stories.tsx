import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { SpeedBtn, SpeedBtnProps, SPEED_BUTTON_MUTATIONS } from "./SpeedBtn";
import { PlayProvider } from "../../providers/PlayProvider/PlayProvider";

export default {
  title: "atoms/SpeedBtn",
  component: SpeedBtn
} as Meta;

const Template: Story<SpeedBtnProps> = (args) => {
  return <PlayProvider><SpeedBtn {...args} /></PlayProvider>;
};

export const Sample: { args: SpeedBtnProps } = Template.bind({});
Sample.args = {
  mutation: SPEED_BUTTON_MUTATIONS.LEVEL1
};
