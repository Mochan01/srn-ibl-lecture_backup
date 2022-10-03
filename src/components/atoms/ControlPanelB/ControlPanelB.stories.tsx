import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import "swiper/css/bundle";
import { ControlPanelB, ControlPanelBProps } from "./ControlPanelB";

export default {
  title: "atoms/ControlPanelB",
  component: ControlPanelB
} as Meta;

const template: Story<ControlPanelBProps> = (args) => <ControlPanelB {...args} />;

export const sample: { args: ControlPanelBProps } = template.bind({});
sample.args = {
};
