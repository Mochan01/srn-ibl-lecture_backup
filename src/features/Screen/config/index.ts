// mock for the storybook.
export const screenData = [
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
      display_result: true,
    },
  },
  {
    progress: {
      slide: 1,
      step: 2,
    },
    images: {
      display_files: [
        "https://placehold.jp/30/77ff99/ffffff/300x300.png?text=画像1",
      ],
      delete_files: [],
    },
    popup: {
      popup_btns: [],
      popup_x: [300],
      popup_y: [500],
      display_popup: [ ],
      popup_narration: [],
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
      ans_1: false,
      ans_2: false,
      ans_3: true,
      ans_4: false,
    },
    question_input: {
      question_x: "",
      question_y: "",
      ans: "",
    },
    special_lecture: {
      mission_select: [],
      display_result: true,
    },
  },
  {
    progress: {
      slide: 1,
      step: 3,
    },
    images: {
      display_files: [],
      delete_files: [],
    },
    popup: {
      popup_btns: [
        "https://placehold.jp/30/fcba03/22ff22/300x80.png?text=ポップアップボタン2",
      ],
      popup_x: [400],
      popup_y: [500],
      display_popup: [
        "https://placehold.jp/30/ff00ff/222222/500x500.png?text=ポップアップ2",
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
      ans_1: false,
      ans_2: false,
      ans_3: true,
      ans_4: false,
    },
    question_input: {
      question_x: "",
      question_y: "",
      ans: "",
    },
    special_lecture: {
      mission_select: [],
      display_result: true,
    },
  },
] as const;
