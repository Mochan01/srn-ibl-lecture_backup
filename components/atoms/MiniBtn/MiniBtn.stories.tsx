import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { MiniBtn, MiniBtnProps, MINI_BUTTON_MUTATIONS } from "./MiniBtn";
import { PlayProvider } from "../../providers/PlayProvider/PlayProvider";

export default {
  title: "atoms/MiniBtn",
  component: MiniBtn
} as Meta;

const Template: Story<MiniBtnProps> = (args) => {
  return <PlayProvider><MiniBtn {...args} /></PlayProvider>;
};

export const Sample: { args: MiniBtnProps } = Template.bind({});
Sample.args = {
  mutation: MINI_BUTTON_MUTATIONS.AGAIN_OFF
};
