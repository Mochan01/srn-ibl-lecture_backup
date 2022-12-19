import { StepType } from "src-ibl-lecture-master/types/stepType";
import { JsonData } from "../types";

type Callback = (arr: StepType[]) => StepType[];
type Fil = (index: number) => Callback;

export interface GetStepData {
  (): StepType[];
  (slideIndex: number): StepType[];
  (slideIndex: number, stepIndex: number): StepType;
}

/**
 * JSONデータを受け取る
 * @param data
 * @returns
 */
export const handleJson: (data: JsonData) => GetStepData =
  (data) => (slideIndex?: number, stepIndex?: number) => {
    // 第一引数が空ならフィルターせずにそのまま返す
    if (typeof slideIndex !== "number")
      return data["steps"] as StepType & StepType[];

    // 第一引数指定したらslideIndexでフィルターする
    const slide = filBySlide(slideIndex)(data["steps"]);

    // 第二引数指定したらさらにstepIndexでフィルターする
    return (
      typeof stepIndex === "number" ? filByStep(stepIndex)(slide)[0] : slide
    ) as StepType & StepType[];
  };

/**
 * スライドを絞りこみ
 * @param index
 * @returns
 */
const filBySlide: Fil = (index) => (arr) =>
  arr.filter((x) => x.progress.slide === index);

/**
 * ステップを絞り込み
 * @param index
 * @returns
 */
const filByStep: Fil = (index) => (arr) =>
  arr.filter((x) => x.progress.step === index);
