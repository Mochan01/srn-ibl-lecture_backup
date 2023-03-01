import { SpecialLecture } from "src-ibl-lecture-master-unit/types/specialLecture";

export interface ResultData extends Pick<SpecialLecture, "display_result"> {
  depth: number;
}
