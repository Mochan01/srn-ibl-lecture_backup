import { Lecture } from "src-ibl-lecture-master-unit/types/lecture";

type GetQuestion<T> = (questionSelect: Lecture["question_select"]) => T;

/**
 * 正解のindexを取得
 * @param param0 
 * @returns 
 */
export const getCorrectIndex: GetQuestion<number> = ({
  ans_1,
  ans_2,
  ans_3,
  ans_4,
}) => [ans_1, ans_2, ans_3, ans_4].indexOf(true);

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
  (questionSelect: Lecture["question_select"]) => <T>(callback: GetQuestion<T>) =>
    callback(questionSelect);
