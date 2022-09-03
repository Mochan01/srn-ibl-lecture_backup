import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { sound } from "../../../data/mock";
import { Narration, NarrationProps } from "./Narration";

export default {
  title: "atoms/Narration",
  component: Narration
} as Meta;

const Template: Story<NarrationProps> = (args) => <Narration {...args} />;

export const Sample: { args: NarrationProps } = Template.bind({});
Sample.args = {
  duration: 2000,
  onEnd: () => {},
  sound
};
