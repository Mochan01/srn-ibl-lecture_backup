import { Intro, Lecture, Mission } from "src-ibl-lecture-master-unit/types";

export type LectureType = Mission | Intro | Lecture;

export interface CommonProps<T extends Array<LectureType>> {
  unitName: string;
  unitTitle: string;
  data: T;
  onClose?: () => void;
}
