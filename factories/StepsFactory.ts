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
   * 次に進むべきステップを取得
   * @param slide 
   * @param step 
   * @returns [正解した場合, 不正解した場合]
   */
  public getNextStep(slide: number, step: number): number {
    const steps = this.getStepBySlide(slide);
    let { go_to } = steps[step].next_steps;

    go_to = go_to.split("_")[1];

    return this.generateNum(go_to);
  }

  /**
   * 次に進むべきステップを取得
   * 解答ステップの後の分岐に使う
   * @param slide 
   * @param step 
   * @returns [正解した場合, 不正解した場合]
   */
  public getNextStepOnQuiz(slide: number, step: number): [number, number] {
    const steps = this.getStepBySlide(slide);
    let { if_correct, if_wrong } = steps[step].next_steps;

    if_correct = if_correct.split("_")[1];
    if_wrong = if_wrong.split("_")[1];

    return [this.generateNum(if_correct), this.generateNum(if_wrong)];
  }

  /**
   * ステップを生成するためのデータを取得
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

  /**
   * シークバーの位置を取得
   * @param slide 
   * @returns 
   */
  public getSeekBarStartsBySlide(slide: number): Step["audio"]["seekbar_start"][] {
    const steps = this.getStepBySlide(slide);
    return steps.map(x => x.audio.seekbar_start);
  }

  /**
   * スライドの数を取得
   */
  public get slides(): number[] {
    const slides = this._steps.map(({ progress }) => progress.slide - 1);
    return _.uniq(slides);
  }

  /**
   * 指定したスライドのステップを取得
   * @param slide 
   * @returns 
   */
  private getStepBySlide(slide: number): Step[] {
    return this._steps.filter(({ progress }) => progress.slide - 1 === slide);
  }

  /**
   * マスターの文字列「*_*」を数字に変換
   * @returns 
   */
  private generateNum(val: string): number {
    return Number(val) - 1;
  }

  /**
   * クイズデータを生成
   * @param step 
   * @returns 
   */
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
