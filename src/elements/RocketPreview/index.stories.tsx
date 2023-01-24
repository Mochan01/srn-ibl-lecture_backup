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
  // images: ["https://placekitten.com/600/600"],
  images: [
    "https://placekitten.com/601/600",
    "https://placekitten.com/601/600",
  ],
  selectedPart: "ミッションパーツA",
  missionParts: ["ミッションパーツA", "ミッションパーツB", "ミッションパーツC"],
  powerSupplyPart: "電源パーツA",
  loadedPart: "積載パーツA",
  rocket: "打ち上げロケットA",
  isShow: true,
};
