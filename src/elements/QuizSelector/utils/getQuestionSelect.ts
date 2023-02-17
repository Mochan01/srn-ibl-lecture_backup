import { Lecture } from "src-ibl-lecture-master-unit/types/lecture";

type GetQuestion<T> = (questionSelect: Lecture["question_select"]) => T;

/**
 * 正解のインデックスの配列を取得
 * @param param0
 * @returns
 */
export const getCorrectIndexes: GetQuestion<number[]> = ({
  ans_1,
  ans_2,
  ans_3,
  ans_4,
}) => {
  const correctIndexes = [ans_1, ans_2, ans_3, ans_4].reduce(
    (acc: number[], val, index) => {
      // trueの場合インデックスを追加していく
      if (val) {
        acc.push(index);
      }
      return acc;
    },
    []
  );
  return correctIndexes;
};

/**
 * 出題する選択肢を取得
 * @param param0
 * @returns
 */
export const filQuestion: GetQuestion<string[]> = ({
  button_1,
  button_2,
  button_3,
  button_4,
}) => [button_1, button_2, button_3, button_4].filter(Boolean) as string[];

export const getQuestionSelect =
  (questionSelect: Lecture["question_select"]) =>
  <T>(callback: GetQuestion<T>) =>
    callback(questionSelect);
