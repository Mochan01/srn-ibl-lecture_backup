import { Lecture } from "src-ibl-lecture-master-unit/types";

export type ScreenData = Array<
  Pick<
    Lecture,
    | "progress"
    | "images"
    | "popup"
    | "actions"
    | "question_select"
    | "question_input"
    | "special_lecture"
  >
>;
