import { Units } from "src-ibl-lecture-master/types";
import {
  Lecture,
  Intro,
  Mission,
  SlideTransitions,
} from "src-ibl-lecture-master-unit/types";
import { LectureSteps } from "./lectureSteps";
import { MasterData } from "../features/SatelliteAssembly/types";

export interface JsonData extends Partial<MasterData> {
  // lecture_masterから
  units: Units;
  // ユニット別
  lecture: LectureSteps<Lecture>[];
  intro: LectureSteps<Intro>[];
  mission: LectureSteps<Mission>[];
  slideTransition: SlideTransitions;
}
