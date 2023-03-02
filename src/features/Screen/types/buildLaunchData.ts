import { SpecialLecture } from "src-ibl-lecture-master-unit/types/specialLecture";

export interface LaunchData extends Pick<SpecialLecture, "launch_animation"> {
  depth: number;
}
