import data from "../data/mock_data.json";
import { StepData } from "src-ibl-lecture-master/variable_types/Step";
import _ from "lodash";
import { StepDataProps, BoySpeechProps, QuizProps } from "../variable_types/StepDataProps";

export class StepsFactory {

  private _steps: StepData[];

  constructor() {
    // @ts-ignore あとでデータの型をあわせる
    this._steps = data.steps;
  }

  public getStepList(slide: number, step: number): StepDataProps[] {
    let data = this.getStepBySlide(slide).map(x => this.generateStepDataProps(x));
    data = data.filter(x => x.stepProgress <= step);

    return data;
  }

  public getCurrentStepData(slide: number, step: number): StepDataProps {
    const stepData = this.getStepBySlide(slide);
    return this.generateStepDataProps(stepData[step]);
  }

  public getNextStepDataOnQuiz(slide: number, step: number): [StepDataProps, StepDataProps] {
    const stepData = this.getStepBySlide(slide);
    let { next_steps } = stepData[step];

    // ステップが終わりだったとき
    if (next_steps.next_step === "lecture_end") return;

    let { if_correct, if_wrong } = stepData[step].next_steps;

    return [
      this.generateStepDataProps(
        stepData[this.generateNum(if_correct)]
      ),
      this.generateStepDataProps(
        stepData[this.generateNum(if_wrong)]
      )
    ]
  }

  public getNextStepData(slide: number, step: number): StepDataProps {
    const stepData = this.getStepBySlide(slide);
    let { next_steps } = stepData[step];

    // ステップが終わりだったとき
    if (next_steps.next_step === "lecture_end") return;

    const nextStep = next_steps.go_to;
    if (!nextStep) return;
  
    return this.generateStepDataProps(
      stepData[this.generateNum(nextStep)]
    );
  }

  /**
   * シークバーの位置を取得
   * @param slide 
   * @returns 
   */
  public getSeekBarStartsBySlide(slide: number): StepData["audio"]["seekbar_start"][] {
    let steps = this.getStepBySlide(slide);
    steps = steps.filter(x => !x.question.is_result_step);
    return steps.map(x => x.audio.seekbar_start);
  }

  /**
   * スライドの数を取得
   */
  public get slides(): number[] {
    const slides = this._steps.map(({ progress }) => progress.slide - 1);
    return _.uniq(slides);
  }

  private generateStepDataProps(data: StepData): StepDataProps {
    return {
      stepProgress: data.progress.step - 1,
      image: data.image.display_file,
      sound: data.audio.mp3,
      ...this.buildQuizData(data),
      ...this.generateBoySpeechDuration(data.next_steps.next_step)
    }
  }

  private generateBoySpeechDuration(ev: StepData["next_steps"]["next_step"]): BoySpeechProps {

    let boySpeechDuration: number;

    switch(ev) {
      case "1_second":
        boySpeechDuration = 1000;
        break;
      case "2_seconds":
        boySpeechDuration = 2000;
        break;
      case "3_seconds":
        boySpeechDuration = 3000;
        break;
      case "4_seconds":
        boySpeechDuration = 4000;
        break;
      case "5_seconds":
        boySpeechDuration = 5000;
        break;
    }

    if (!boySpeechDuration) return;
    return { boySpeechDuration };
  }

  /**
   * 指定したスライドのステップを取得
   * @param slide 
   * @returns 
   */
  private getStepBySlide(slide: number): StepData[] {
    return this._steps.filter(({ progress }) => progress.slide - 1 === slide);
  }

  /**
   * マスターの文字列「*_*」を数字に変換
   * @returns 
   */
  private generateNum(val: string): number {
    return Number(val.split("_")[1]) - 1;
  }

  /**
   * クイズデータを生成
   * @param step 
   * @returns 
   */
  private buildQuizData(data: StepData): QuizProps {
    const { question, image } = data;
    if (data.image.display_object_1 !== "question_area") return;

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
