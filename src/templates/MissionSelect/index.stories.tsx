import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { MissionSelect, MissionSelectProps } from ".";
import data from "../../assets/data/unit01_master.json";
import { JsonData } from "../../types";
import { Mission } from "src-ibl-lecture-master-unit/types";

export default {
  MissionSelect: "templates/MissionSelect",
  component: MissionSelect,
} as Meta;

const template: Story<MissionSelectProps> = (args) => (
  <MissionSelect {...args} />
);

const missions = [
  {
    progress: {
      slide: 1,
      step: 1,
    },
    narrative: {
      narration:
        "前回のグループワークで、どのミッションを選ぶか、決めたわよね。",
    },
    audio: {
      mp3: "ST_L1U1_01.mp3",
      time: 4000,
    },
    animation: {
      teacher: "animation_2",
      student: "animation_1",
    },
    mission_select: {},
    next_steps: {
      next_step: "audio_end",
      goto_step: "1_2",
    },
  },
  {
    progress: {
      slide: 1,
      step: 2,
    },
    narrative: {
      narration: "今回は、選んだミッションについて詳しく学んでみるわよ。",
    },
    audio: {
      mp3: "ST_L1U1_01.mp3",
      time: 4000,
    },
    animation: {
      teacher: "animation_2",
      student: "animation_1",
    },
    mission_select: {},
    next_steps: {
      next_step: "audio_end",
      goto_step: "1_3",
    },
  },
  {
    progress: {
      slide: 1,
      step: 3,
    },
    narrative: {
      narration: "前回のワークシートを手元に出して、",
    },
    audio: {
      mp3: "ST_L1U1_01.mp3",
      time: 4000,
    },
    animation: {
      teacher: "animation_2",
      student: "animation_1",
    },
    mission_select: {},
    next_steps: {
      next_step: "audio_end",
      goto_step: "1_4",
    },
  },
  {
    progress: {
      slide: 1,
      step: 4,
    },
    narrative: {
      narration: "グループで決めたミッションを選択してね。",
    },
    audio: {
      mp3: "ST_L1U1_01.mp3",
      time: 4000,
    },
    animation: {
      teacher: "animation_2",
      student: "animation_1",
    },
    mission_select: {},
    next_steps: {
      next_step: "audio_end",
      goto_step: "1_5",
    },
  },
  {
    progress: {
      slide: 1,
      step: 5,
    },
    narrative: {
      narration: "さあ、始めるわよ！",
    },
    audio: {
      mp3: "ST_L1U1_01.mp3",
      time: 4000,
    },
    animation: {
      teacher: "animation_2",
      student: "animation_1",
    },
    mission_select: {
      m_btn_1: "L1U5_button_01_amazon_first.png",
      m_btn_2: "L1U5_button_02_smartcity_first.png",
      m_btn_3: "L1U5_button_03_fish_first.png",
      m_btn_4: "L1U5_button_04_disaster_first.png",
      m_btn_5: "L1U5_button_05_bird_first.png",
      m_btn_1_goto: "intro_c01lv01u06m01",
      m_btn_2_goto: "intro_c01lv01u06m02",
      m_btn_3_goto: "intro_c01lv01u06m03",
      m_btn_4_goto: "intro_c01lv01u06m04",
      m_btn_5_goto: "intro_c01lv01u06m05",
    },
    next_steps: {
      next_step: "stop",
    },
  },
] as Mission[];

export const sample: { args: MissionSelectProps } = template.bind({});
sample.args = {
  unitName: "unit00",
  unitTitle: "ダミーテキストダミーテキスト",
  missions: missions,
  onClick: (goto: string) => {
    console.log("page遷移処理を実装", goto);
  },
  onLastStep: () => console.log("本編に遷移"),
};
