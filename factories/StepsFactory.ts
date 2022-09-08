import json from "../data/mock_data.json";
import { StepType } from "src-ibl-lecture-master/variable_types/StepType";
import _ from "lodash";
import { StepProps, QuizProps } from "../variable_types/StepProps";

export class StepsFactory {

  private _steps: StepType[];

  constructor(data: object = json) {
    this._steps = data["steps"] as StepType[];
  }

  public getStepList(slide: number, step: number): StepProps[] {
    let data = this.getStepBySlide(slide).map(x => this.generateStepProps(x));
    data = data.filter(x => x.stepProgress <= step);

    return data;
  }

  public getStepListAll(slide: number): StepProps[] {
    const steps = this.getStepBySlide(slide);
    return steps.map(x => this.generateStepProps(x));
  }

  public getCurrentStepData(slide: number, step: number): StepProps {
    const stepData = this.getStepBySlide(slide);
    return this.generateStepProps(stepData[step]);
  }

  public getNextStepDataOnQuiz(slide: number, step: number): [StepProps, StepProps] {
    const stepData = this.getStepBySlide(slide);
    let { next_steps } = stepData[step];

    // ステップが終わりだったとき
    if (next_steps.next_step === "lecture_end") return;

    let { if_correct, if_wrong } = stepData[step].next_steps;

    return [
      this.generateStepProps(
        stepData[this.generateNum(if_correct)]
      ),
      this.generateStepProps(
        stepData[this.generateNum(if_wrong)]
      )
    ]
  }

  public getNextStepData(slide: number, step: number): StepProps {
    const stepData = this.getStepBySlide(slide);
    let { next_steps } = stepData[step];

    // スライドが終わりだったとき
    if (next_steps.next_step === "slide_end") return;

    // レクチャーが終わりだったとき
    if (next_steps.next_step === "lecture_end") return;

    const nextStep = next_steps.go_to;
    if (!nextStep) return;
  
    return this.generateStepProps(
      stepData[this.generateNum(nextStep)]
    );
  }

  public getTotalTime(slide: number): StepType["audio"]["total_time"] {
    const list = this.getStepBySlide(slide);
    return list[list.length - 1].audio.total_time;
  }

  /**
   * スライドの数を取得
   */
  public get slides(): number[] {
    const slides = this._steps.map(({ progress }) => progress.slide - 1);
    return _.uniq(slides);
  }

  private generateStepProps(data: StepType): StepProps {
  
    if (!data) return;

    const duration = this.generateDuration(data.next_steps.next_step);

    return {
      stepProgress: data.progress.step - 1,
      image: data.image.display_file,
      motion1: data.motion.motion_1,
      motion2: data.motion.motion_2,
      sound: data.audio.mp3,
      duration: duration || data.audio.time,
      seekStart: data.audio.seekbar_start,
      isResultStep: data.question.is_result_step,
      talking: duration ? "boy" : "teacher",
      ...this.buildQuizData(data)
    }
  }

  private generateDuration(ev: StepType["next_steps"]["next_step"]): number {
    switch(ev) {
      case "1_second":
        return 1000;
      case "2_seconds":
        return 2000;
      case "3_seconds":
        return 3000;
      case "4_seconds":
        return 4000;
      case "5_seconds":
        return 5000;
    }
  }

  /**
   * 指定したスライドのステップを取得
   * @param slide 
   * @returns 
   */
  private getStepBySlide(slide: number): StepType[] {
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
  private buildQuizData(data: StepType): QuizProps {
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
      y: image.y_axis,
      width: image.width,
      height: image.height,
    }
  }

}
