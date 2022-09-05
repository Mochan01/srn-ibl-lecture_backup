import { StepType } from "src-ibl-lecture-master/variable_types/StepType";
import { StepProps } from "../variable_types/StepProps";
export declare class StepsFactory {
    static getStepList(slide: number, step: number): StepProps[];
    static getCurrentStepData(slide: number, step: number): StepProps;
    static getNextStepDataOnQuiz(slide: number, step: number): [StepProps, StepProps];
    static getNextStepData(slide: number, step: number): StepProps;
    static getTotalTime(slide: number): StepType["audio"]["total_time"];
    /**
     * シークバーの位置を取得
     * @param slide
     * @returns
     */
    static getSeekBarStartsBySlide(slide: number): StepType["audio"]["seekbar_start"][];
    /**
     * スライドの数を取得
     */
    static get slides(): number[];
    private static generateStepProps;
    private static generateDuration;
    /**
     * 指定したスライドのステップを取得
     * @param slide
     * @returns
     */
    private static getStepBySlide;
    /**
     * マスターの文字列「*_*」を数字に変換
     * @returns
     */
    private static generateNum;
    /**
     * クイズデータを生成
     * @param step
     * @returns
     */
    private static buildQuizData;
    private static get steps();
}
