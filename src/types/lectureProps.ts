import { Intro, Lecture, Mission } from "src-ibl-lecture-master-unit/types";
import { UnitInfo } from "./UnitInfo";

export type LectureType = Mission | Intro | Lecture;

export interface CommonProps<T extends Array<LectureType>> extends UnitInfo {
  data: T;
  onClose?: () => void;
}
