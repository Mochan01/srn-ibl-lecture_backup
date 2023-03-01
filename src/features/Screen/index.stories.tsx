import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Screen, ScreenProps } from ".";

export default {
  title: "features/Screen",
  component: Screen,
} as Meta;

const template: Story<ScreenProps> = (args) => <Screen {...args} />;

export const sample = template.bind({});
sample.args = {
  slide: 1,
  step: 1,
  actionGoTo: (actionGoto, missionID) =>
    console.log(`${actionGoto}に飛ぶ、ミッションID: ${missionID}`),
  onAnswer: (isAnswer) => console.log(isAnswer ? "正解" : "不正解"),
  screenData: [
    {
      progress: {
        slide: 1,
        step: 1,
      },
      images: {
        display_files: [
          "https://placehold.jp/30/657da6/ffffff/1286x890.png?text=画像1",
          "https://placehold.jp/30/657da6/ffffff/1286x890.png?text=画像2",
        ],
        delete_files: [],
      },
      popup: {
        popup_btns: [
          "https://placehold.jp/30/fcba03/222222/300x80.png?text=ポップアップボタン1",
        ],
        popup_x: [100],
        popup_y: [100],
        display_popup: [
          "https://placehold.jp/30/ff00ff/222222/500x500.png?text=ポップアップ1",
        ],
        popup_narration: ["quiz_correct.mp3"],
      },
      actions: {
        action_btns: [],
        action_x: [],
        action_y: [],
        action_goto: [],
      },
      question_select: {
        question_x: 450,
        question_y: 200,
        button_1: "不正解",
        ans_1: false,
        button_2: "不正解",
        ans_2: false,
        button_3: "正解",
        ans_3: true,
        button_4: "不正解",
        ans_4: false,
      },
      question_input: {
        question_x: "",
        question_y: "",
        ans: "",
      },
      special_lecture: {
        mission_select: ["ミッションID1", "ミッションID2"],
        launch_key: "countdown",
        display_result: true,
      },
    },
    {
      progress: {
        slide: 1,
        step: 2,
      },
      images: {
        display_files: [],
        delete_files: [
          "https://placehold.jp/30/657da6/ffffff/1286x890.png?text=画像2",
        ],
      },
      popup: {
        popup_btns: [
          "https://placehold.jp/30/fcba03/222222/300x80.png?text=ポップアップボタン2",
        ],
        popup_x: [500],
        popup_y: [600],
        display_popup: [
          "https://placehold.jp/30/ff00ff/222222/500x500.png?text=ポップアップ2",
        ],
        popup_narration: ["quiz_correct.mp3"],
      },
      actions: {
        action_btns: [
          "https://placehold.jp/30/997799/222222/300x80.png?text=アクションボタン1",
          "https://placehold.jp/30/997799/222222/300x80.png?text=アクションボタン2",
        ],
        action_x: [300, 600],
        action_y: [300, 600],
        action_goto: ["1_1", "2_1"],
      },
      special_lecture: {
        mission_select: ["ミッションID1", "ミッションID2"],
        launch_key: "launch",
      },
      question_select: {
        question_x: "",
        question_y: "",
        button_1: "",
        ans_1: false,
        button_2: "",
        ans_2: false,
        button_3: "",
        ans_3: true,
        button_4: "",
        ans_4: false,
      },
      question_input: {
        question_x: 450,
        question_y: 200,
        ans: "入力問題です",
      },
    },
  ],
  resultList: [
    {
      result_id: "result_1",
      part_a: "4_2",
      part_a_name: "高分解能サーモグラフィー",
      part_b: "",
      part_b_name: "",
      result_pdf: "Lv01U09M01_result01.pdf",
    },
    {
      result_id: "result_2",
      part_a: "",
      part_a_name: "",
      part_b: "4_3",
      part_b_name: "標準SAR\n",
      result_pdf: "Lv01U09M01_result01.pdf",
    },
    {
      result_id: "result_3",
      part_a: "",
      part_a_name: "",
      part_b: "4_6",
      part_b_name: "高分解能カメラ",
      result_pdf: "result-4_5-4_6.pdf",
    },
    {
      result_id: "result_4",
      part_a: "4_2",
      part_a_name: "高分解能サーモグラフィー",
      part_b: "4_7",
      part_b_name: "高分解能カメラ",
      result_pdf: "result-4_5-4_6.pdf",
    },
    {
      result_id: "result_5",
      part_a: "4_2",
      part_a_name: "高分解能サーモグラフィー",
      part_b: "4_3",
      part_b_name: "標準SAR\n",
      result_pdf: "result-4_2-4_3.pdf",
    },
    {
      result_id: "result_6",
      part_a: "4_5",
      part_a_name: "広域カメラ",
      part_b: "",
      part_b_name: "",
      result_pdf: "result-4_5.pdf",
    },
    {
      result_id: "result_7",
      part_a: "5_2",
      part_a_name: "地上の基地局との電波通信装置（高速）",
      part_b: "",
      part_b_name: "",
      result_pdf: "result-5_2.pdf",
    },
    {
      result_id: "result_8",
      part_a: "",
      part_a_name: "",
      part_b: "7_1",
      part_b_name: "限定処理特化型コンピュータ",
      result_pdf: "Lv01U09M01_result01.pdf",
    },
    {
      result_id: "result_9",
      part_a: "5_2",
      part_a_name: "地上の基地局との電波通信装置（高速）",
      part_b: "7_1",
      part_b_name: "限定処理特化型コンピュータ",
      result_pdf: "result-5_2-7_1.pdf",
    },
    {
      result_id: "result_10",
      part_a: "4_5",
      part_a_name: "広域カメラ",
      part_b: "7_1",
      part_b_name: "限定処理特化型コンピュータ",
      result_pdf: "result-5_2-7_1.pdf",
    },
  ],
};
