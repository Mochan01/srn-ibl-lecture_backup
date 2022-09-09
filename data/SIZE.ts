
export const SIZE = {
  W: 1000,
  H: 692,
  FRAME_H: 750,
  PANEL_A_W: 260,
  PANEL_A_H: 74,
  PANEL_B_W: 480,
  PANEL_B_H: 74,
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
  get QUIZ_AREA_H() {
    return SIZE.QUIZ_Q_BTN_H * 2 + SIZE.QUIZ_ROW_G * 2 + SIZE.QUIZ_A_BTN_H
  }
} as const;
