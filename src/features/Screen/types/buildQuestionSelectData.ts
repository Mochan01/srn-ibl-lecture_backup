import { Lecture } from "src-ibl-lecture-master-unit/types";

export interface QuestionSelectData extends Partial<Pick<Lecture, "question_select">> {
  depth: number;
}
