import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PartDetail, PartDetailProps } from ".";

export default {
  title: "elements/PartDetail",
  component: PartDetail,
} as Meta;

const template: Story<PartDetailProps> = (args) => <PartDetail {...args} />;

export const sample = template.bind({});
sample.args = {
  partName:
    "地上の携帯電話や小型発信機との通信装置+地上の小型発信機1000個セット",
  description:
    "地上のGPS受信機で得た位置情報を衛星が受信する専用の装置と地上で使用するGPS受信機1000個のセット",
};
