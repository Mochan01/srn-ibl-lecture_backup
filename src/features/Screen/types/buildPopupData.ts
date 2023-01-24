import { Lecture } from "src-ibl-lecture-master-unit/types";
import { BuildDataReturn } from "./buildDataReturn";

export interface PopupData {
  depth: number;
  src: string;
  narration: string;
}

export type BuildPopupDataReturn = BuildDataReturn<
  Lecture["popup"],
  PopupData
>;
