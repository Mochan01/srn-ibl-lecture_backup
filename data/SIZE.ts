export const SIZE = {
  W: 1286,
  H: 890,
  HEAD_H: 58,
  BTN_PAD_T: 6,
  QUIZ_ROW_G: 24,
  QUIZ_COLUMN_G: 32,
  QUIZ_Q_BTN_W: 190,
  QUIZ_Q_BTN_H: 58,
  QUIZ_A_BTN_H: 46,
  get QUIZ_AREA_W() {
    return SIZE.QUIZ_Q_BTN_W * 2 + SIZE.QUIZ_COLUMN_G
  },
  get QUIZ_AREA_FOUR_H() {
    return SIZE.QUIZ_Q_BTN_H * 2 + SIZE.QUIZ_ROW_G * 2 + SIZE.QUIZ_A_BTN_H
  },
  get QUIZ_AREA_TREE_H() {
    return SIZE.QUIZ_Q_BTN_H * 2 + SIZE.QUIZ_ROW_G
  }
} as const;
