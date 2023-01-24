import { Lecture } from "src-ibl-lecture-master-unit/types";

export interface buildQuestionInputData extends Partial<Pick<Lecture, "question_input">> {
  depth: number;
}
