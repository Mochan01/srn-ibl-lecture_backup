import { SpecialLecture } from "src-ibl-lecture-master-unit/types/specialLecture";
import { SavedParts } from "../../DisplayResult";

export interface LaunchData
  extends Pick<SpecialLecture, "launch_key">,
    Omit<SavedParts, "missionPartsIDs"> {
  depth: number;
}
