import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Boy, BoyProps } from "./Boy";

export default {
  title: "atoms/Boy",
  component: Boy
} as Meta;

const Template: Story<BoyProps> = (args) => <Boy {...args} />;

export const Sample: { args: BoyProps } = Template.bind({});
Sample.args = {
  boySpeechDuration: 2000
};
