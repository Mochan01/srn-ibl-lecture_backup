import { Lecture } from "src-ibl-lecture-master-unit/types";
import { BuildDataReturn } from "../types";

export interface ActionBtnData {
  depth: number;
  src: string;
  x: number;
  y: number;
  actionGoto: string;
}

export type BuildActionDataReturn = BuildDataReturn<
  Lecture["actions"],
  ActionBtnData
>;
