import { Lecture } from "src-ibl-lecture-master-unit/types";

export type LectureData = Array<
  Pick<
    Lecture,
    | "progress"
    | "images"
    | "popup"
    | "actions"
    | "question_select"
    | "question_input"
  >
>;
