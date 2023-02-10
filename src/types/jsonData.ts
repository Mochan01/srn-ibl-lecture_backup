import { Lecture, Intro, Mission } from "src-ibl-lecture-master-unit/types";
import { LectureSteps } from "./lectureSteps";
import {
  MissionList,
  CategoryList,
  ItemList,
  ResultList,
  Rocket,
  Bus,
  Battery,
  SensorParts,
  TransmissionParts,
  Computer,
  Debris,
  SampleReturn,
  Asteroid,
} from "src-ibl-lecture-master-special/types";

export interface JsonData {
  // ユニット別
  lecture: LectureSteps<Lecture>[];
  intro: LectureSteps<Intro>[];
  mission: LectureSteps<Mission>[];
  // 特別レクチャー
  missionList?: MissionList;
  categoryList?: CategoryList;
  itemList?: ItemList;
  resultList?: ResultList;
  rocket?: Rocket;
  bus?: Bus;
  battery?: Battery;
  sensorParts?: SensorParts;
  transmissionParts?: TransmissionParts;
  computer?: Computer;
  debris?: Debris;
  sampleReturn?: SampleReturn;
  asteroid?: Asteroid;
}