import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { MissionSelect, MissionSelectProps } from ".";
import data from "../../assets/data/unit01_master.json";
import { JsonData } from "../../types";

export default {
  MissionSelect: "templates/MissionSelect",
  component: MissionSelect,
} as Meta;

const template: Story<MissionSelectProps> = (args) => (
  <MissionSelect {...args} />
);

export const sample: { args: MissionSelectProps } = template.bind({});
sample.args = {
  unitName: "unit00",
  unitTitle: "ダミーテキストダミーテキスト",
  missionSelect: {
    m_btn_1: "L1U5_button_01_amazon_first.png",
    m_btn_1_goto: "L1U5_button_01_amazon_first",
    m_btn_2: "L1U5_button_02_smartcity_first.png",
    m_btn_2_goto: "L1U5_button_02_smartcity_first",
    m_btn_3: "L1U5_button_03_fish_first.png",
    m_btn_3_goto: "L1U5_button_03_fish_first",
    m_btn_4: "L1U5_button_04_disaster_first.png",
    m_btn_4_goto: "L1U5_button_04_disaster_first",
    m_btn_5: "L1U5_button_05_bird_first.png",
    m_btn_5_goto: "L1U5_button_05_bird_first",
  },
  onClick: (goto) => {
    console.log("page遷移処理を実装", goto);
  },
  onLastStep: () => console.log("本編に遷移"),
  data: data as JsonData,
};
