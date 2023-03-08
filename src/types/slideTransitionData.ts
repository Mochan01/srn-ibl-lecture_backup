import { SlideTransition } from "src-ibl-lecture-master-unit/types";

export type SlideTransitionData = Pick<
  SlideTransition,
  "back" | "slide" | "next"
>;

export type SlideTransitionsData = SlideTransitionData[];
