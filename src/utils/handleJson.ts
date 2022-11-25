import { StepType } from "src-ibl-lecture-master/types/StepType";

type Callback = (arr: StepType[]) => StepType[];
type Fil = (index: number) => Callback;
export type GetStepData = (
  slideIndex?: number,
  stepIndex?: number
) => StepType | StepType[];

/**
 * JSONデータを受け取る
 * @param data
 * @returns
 */
export const handleJson: (data: object) => GetStepData =
  (data) => (slideIndex, stepIndex) => {
    const steps: StepType[] = data["steps"];

    // 引数が空ならフィルターせずにそのまま返す
    if (typeof slideIndex !== "number") return steps;

    // slideIndexを指定したらslideIndexでフィルターする
    const slide = filBySlide(slideIndex)(steps);

    // stepIndexを指定したらslideIndexとstepIndexでフィルターする
    return typeof stepIndex === "number"
      ? filByStep(stepIndex)(slide)[0]
      : slide.length
      ? slide
      : void 0;
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
