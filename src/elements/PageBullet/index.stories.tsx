import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PageBullet, PageBulletProps } from ".";

export default {
  title: "elements/PageBullet",
  component: PageBullet,
  argTypes: {
    variant: {
      control: { type: "radio" },
    },
  },
} as Meta;

const template: Story<PageBulletProps> = (args) => <PageBullet {...args} />;

export const sample: { args: PageBulletProps } = template.bind({});
sample.args = {
  onClick: (i) => console.log(i),
  slideLen: 6,
  slideIndex: 3,
  isActive: false,
};
