import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { ReplayBtn, ReplayBtnProps } from "./ReplayBtn";
import { PlayProvider } from "../../providers/PlayProvider/PlayProvider";

export default {
  title: "molecules/ReplayBtn",
  component: ReplayBtn
} as Meta;

const Template: Story<ReplayBtnProps> = (args) => {
  return <PlayProvider><ReplayBtn {...args} /></PlayProvider>;
};

export const Sample: { args: ReplayBtnProps } = Template.bind({});
Sample.args = {
};
