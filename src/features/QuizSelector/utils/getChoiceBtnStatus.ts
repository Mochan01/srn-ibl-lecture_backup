import { QUIZ_CHOICE_BTN } from "../../../elements/QuizChoiceBtn";

type GetButtonEvaluation<T> = (
  isAnswer: boolean,
  isChosen: boolean,
  isCorrect: boolean
) => T;

export type DetermineButtonColor = GetButtonEvaluation<
  typeof QUIZ_CHOICE_BTN[keyof typeof QUIZ_CHOICE_BTN]
>;

export type GetMarkSymbol = GetButtonEvaluation<"circle" | "cross" | undefined>;

/**
 * determineButtonColor関数は、クイズの選択肢のボタンの色を決定します。
 * @function
 * @param {boolean} isAnswer - 回答済みかどうか
 * @param {boolean} isChosen - 選択したかどうか
 * @param {boolean} isCorrect - 正解かどうか
 * @returns {string} - 選択肢のボタンの色
 */
export const determineButtonColor: DetermineButtonColor = (
  isAnswer,
  isChosen,
  isCorrect
) => {
  let mutation: typeof QUIZ_CHOICE_BTN[keyof typeof QUIZ_CHOICE_BTN];
  if (isAnswer) {
    if (isCorrect) {
      // 回答後は、正解のボタンをオレンジにする
      mutation = QUIZ_CHOICE_BTN.ORANGE;
    } else {
      // また、選択したボタンが不正解の場合は、当該ボタンを灰色にする
      mutation = isChosen ? QUIZ_CHOICE_BTN.GRAY : QUIZ_CHOICE_BTN.WHITE;
    }
  } else {
    // 回答前は、選択したボタンをオレンジにする
    mutation = isChosen ? QUIZ_CHOICE_BTN.ORANGE : QUIZ_CHOICE_BTN.WHITE;
  }
  return mutation;
};

/**
 * getMarkSymbol関数は、回答後に選択したボタンに対する評価を返します
 * @function
 * @param {boolean} isAnswer - 回答済みかどうか
 * @param {boolean} isChosen - 選択されたかどうか
 * @param {boolean} isCorrect - 正解かどうか
 * @returns {"circle" | "cross" | void} - 評価の結果
 */
export const getMarkSymbol: GetMarkSymbol = (isAnswer, isChosen, isCorrect) =>
  isAnswer && isChosen ? (isCorrect ? "circle" : "cross") : void 0;

/**
 * getButtonStatus関数は、選択したボタンの状態を取得します
 * @function
 * @param {boolean} isAnswer - 回答済みかどうか
 * @param {number} buttonIdx - ボタンのインデックス
 * @param {number} correctIndex - 正解のインデックス
 * @param {number} [chooseIndex] - 選択したインデックス
 * @param {function} callback - 回答後の状態に応じた処理を行う関数
 * @returns {unknown} - callback関数の返り値
 */
export const getChoiceBtnStatus =
  (
    isAnswer: boolean,
    buttonIdx: number,
    correctIndex: number,
    chooseIndex?: number
  ) =>
  <T extends DetermineButtonColor | GetMarkSymbol>(
    callback: DetermineButtonColor | GetMarkSymbol
  ): ReturnType<T> =>
    callback(
      isAnswer,
      buttonIdx === chooseIndex,
      buttonIdx === correctIndex
    ) as ReturnType<T>;
