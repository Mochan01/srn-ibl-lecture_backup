import data from "../data/mock_data.json";
import { Step } from "src-ibl-lecture-master/variable_types/Step";
import { StepProps } from "../components/atoms/Step/Step";
import _ from "lodash";

export class StepsFactory {

  private _steps: Step[];

  constructor() {
    // @ts-ignore あとでデータの型をあわせる
    this._steps = data.steps;
  }

  public getStepsBySlide(slide: number): StepProps[] {
    const steps = this._steps.filter(({ progress }) => progress.slide === slide);
    return steps.map(x => { return { $src: x.image.display_file }} );
  }

  public get slides(): number[] {
    const slides = this._steps.map(({ progress }) => progress.slide);
    return _.uniq(slides);
  }

}
