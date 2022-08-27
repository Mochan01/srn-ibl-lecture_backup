import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { PauseBtn, PauseBtnProps } from "./PauseBtn";
import { PlayProvider } from "../../providers/PlayProvider/PlayProvider";

export default {
  title: "atoms/PauseBtn",
  component: PauseBtn
} as Meta;

const Template: Story<PauseBtnProps> = (args) => {
  return <PlayProvider><PauseBtn {...args} /></PlayProvider>;
};

export const Sample: { args: PauseBtnProps } = Template.bind({});
Sample.args = {
};
