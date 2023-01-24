import { Lecture } from "src-ibl-lecture-master-unit/types";
import { BuildDataReturn } from "../types";

export interface PopupBtnData {
  depth: number;
  src: string;
  x: number;
  y: number;
  popupName: string;
}

export type BuildPopupBtnDataReturn = BuildDataReturn<
  Lecture["popup"],
  PopupBtnData
>;
