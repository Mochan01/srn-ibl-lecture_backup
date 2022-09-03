import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import "swiper/swiper.min.css";
import { ControlPanelA, ControlPanelAProps } from "./ControlPanelA";

export default {
  title: "atoms/ControlPanelA",
  component: ControlPanelA
} as Meta;

const template: Story<ControlPanelAProps> = (args) => <ControlPanelA {...args} />;

export const sample: { args: ControlPanelAProps } = template.bind({});
sample.args = {
};
