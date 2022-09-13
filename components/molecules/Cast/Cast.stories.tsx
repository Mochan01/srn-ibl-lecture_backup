import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Cast, CastProps } from "./Cast";

export default {
  title: "molecules/Cast",
  component: Cast
} as Meta;

const template: Story<CastProps> = (args) => <Cast {...args} />;

export const withText: { args: CastProps } = template.bind({});
withText.args = {
  teacher: "animation_1",
  student: "animation_1",
  children: "ダミーテキストダミーテキスト"
};

export const withoutText: { args: CastProps } = template.bind({});
withoutText.args = {
  teacher: "animation_1",
  student: "animation_1",
};
