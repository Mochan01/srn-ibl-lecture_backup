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

  public getStepPropsBySlide(slide: number): StepProps[] {
    const steps = this.getStepBySlide(slide);
    return steps.map(x => { return { $src: x.image.display_file }} );
  }

  public getSeekBarStartsBySlide(slide: number): Step["audio"]["seekbar_start"][] {
    const steps = this.getStepBySlide(slide);
    return steps.map(x => x.audio.seekbar_start);
  }

  public get slides(): number[] {
    const slides = this._steps.map(({ progress }) => progress.slide - 1);
    return _.uniq(slides);
  }

  private getStepBySlide(slide: number): Step[] {
    return this._steps.filter(({ progress }) => progress.slide - 1 === slide);
  }

}
