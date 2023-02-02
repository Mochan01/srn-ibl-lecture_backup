import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { RocketPreview, RocketPreviewProps } from ".";

export default {
  title: "elements/RocketPreview",
  component: RocketPreview,
} as Meta;

const template: Story<RocketPreviewProps> = (args) => (
  <RocketPreview {...args} />
);
export const sample = template.bind({});
sample.args = {
  image: "https://placekitten.com/600/600",
  selectedPart: "1_1",
  missionParts: [
    { part_id: "4_1", part_name: "ミッションパーツA", category_id: "4" },
  ],
  batteryPart: {
    part_id: "3_1",
    part_name: "電源パーツA",
    category_id: "3",
  },
  busPart: {
    part_id: "2_1",
    part_name: "積載パーツA",
    category_id: "2",
  },
  rocket: {
    part_id: "1_1",
    part_name: "ロケットパーツA",
    category_id: "1",
  },
  isShow: true,
};
