import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { FontProvider, FontProviderProps } from ".";

export default {
  title: "atoms/FontProvider",
  component: FontProvider,
} as Meta;

const template: Story<FontProviderProps> = (args) => <FontProvider {...args} />;

export const sample = template.bind({});
sample.args = {
  children: (
    <>
      子要素直下
      <div>
        {"子要素直下 > div"}
        <p>{"子要素直下 > p"}</p>
      </div>
    </>
  ),
};
