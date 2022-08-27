import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { PauseBtn, PauseBtnProps } from "./PauseBtn";
import { PauseProvider } from "../../providers/PauseProvider/PauseProvider";

export default {
  title: "atoms/PauseBtn",
  component: PauseBtn
} as Meta;

const Template: Story<PauseBtnProps> = (args) => {
  return <PauseProvider><PauseBtn {...args} /></PauseProvider>;
};

export const Sample: { args: PauseBtnProps } = Template.bind({});
Sample.args = {
};
