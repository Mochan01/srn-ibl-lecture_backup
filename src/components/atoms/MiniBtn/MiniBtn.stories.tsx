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

export const again: { args: MiniBtnProps } = Template.bind({});
again.args = {
  mutation: MINI_BUTTON_MUTATIONS.AGAIN_OFF,
  hoverMutation: MINI_BUTTON_MUTATIONS.AGAIN_ON,
  caption: "こんちには"
};

export const next: { args: MiniBtnProps } = Template.bind({});
next.args = {
  mutation: MINI_BUTTON_MUTATIONS.NEXT_OFF,
  hoverMutation: MINI_BUTTON_MUTATIONS.NEXT_ON,
  caption: "こんちには"
};

export const prev: { args: MiniBtnProps } = Template.bind({});
prev.args = {
  mutation: MINI_BUTTON_MUTATIONS.PREV_OFF,
  hoverMutation: MINI_BUTTON_MUTATIONS.PREV_ON,
  caption: "こんちには"
};

export const play: { args: MiniBtnProps } = Template.bind({});
play.args = {
  mutation: MINI_BUTTON_MUTATIONS.PLAY_OFF,
  hoverMutation: MINI_BUTTON_MUTATIONS.PLAY_ON,
  caption: "こんちには"
};

export const pause: { args: MiniBtnProps } = Template.bind({});
pause.args = {
  mutation: MINI_BUTTON_MUTATIONS.PAUSE_OFF,
  hoverMutation: MINI_BUTTON_MUTATIONS.PAUSE_ON,
  caption: "こんちには"
};

export const lectureEnd: { args: MiniBtnProps } = Template.bind({});
lectureEnd.args = {
  mutation: MINI_BUTTON_MUTATIONS.LECTURE_END_OFF,
  hoverMutation: MINI_BUTTON_MUTATIONS.LECTURE_END_ON,
  caption: "こんちには"
};
