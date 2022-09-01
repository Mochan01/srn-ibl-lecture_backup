import data from "../data/mock_data.json";
import { Step } from "src-ibl-lecture-master/variable_types/Step";
import _ from "lodash";
import { StepDataProps } from "../components/organisms/Slide/Slide";
import { QuizAreaProps } from "../components/molecules/QuizArea/QuizArea";

export class StepsFactory {

  private _steps: Step[];

  constructor() {
    // @ts-ignore あとでデータの型をあわせる
    this._steps = data.steps;
  }

  /**
   * 
   * @param slide 
   * @returns 
   */
  public getStepDataPropsBySlide(slide: number): StepDataProps[] {
    const steps = this.getStepBySlide(slide);
    return steps.map(x => {
      return {
        image: x.image.display_file,
        sound: x.audio.mp3,
        ...this.buildQuizData(x)
      }
    });
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

  private buildQuizData(step: Step): QuizAreaProps {
    const { question, image } = step;
    if (step.image.display_object_1 !== "question_area") return;

    const questions = [
      question.button_1,
      question.button_2,
      question.button_3,
      question.button_4
    ];

    const answers = [
      question.ans_1,
      question.ans_2,
      question.ans_3,
      question.ans_4
    ];

    return {
      questions: _.compact(questions),
      correctIndex: answers.indexOf(true),
      x: image.x_axis,
      y: image.x_axis,
      width: image.width,
      height: image.height,
    }
  }

}
