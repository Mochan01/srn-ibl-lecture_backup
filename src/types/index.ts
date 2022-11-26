import { StepType } from "src-ibl-lecture-master/types/StepType";

export type JsonData = { [key in "steps"]: StepType[] };

export interface MainComponentProps {
  unitName: string;
  unitTitle: string;
  onClickClose?: () => void;
  json?: JsonData;
}
