import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { PlayBtn, PlayBtnProps } from "./PlayBtn";
import { PlayProvider } from "../../providers/PlayProvider/PlayProvider";

export default {
  title: "molecules/PlayBtn",
  component: PlayBtn
} as Meta;

const Template: Story<PlayBtnProps> = (args) => {
  return <PlayProvider><PlayBtn {...args} /></PlayProvider>;
};

export const Sample: { args: PlayBtnProps } = Template.bind({});
Sample.args = {
};
