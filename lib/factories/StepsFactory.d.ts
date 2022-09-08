import { StepType } from "src-ibl-lecture-master/variable_types/StepType";
import { StepProps } from "../variable_types/StepProps";
export declare class StepsFactory {
    private _steps;
    constructor(data?: object);
    getStepList(slide: number, step: number): StepProps[];
    getStepListAll(slide: number): StepProps[];
    getCurrentStepData(slide: number, step: number): StepProps;
    getNextStepDataOnQuiz(slide: number, step: number): [StepProps, StepProps];
    getNextStepData(slide: number, step: number): StepProps;
    getTotalTime(slide: number): StepType["audio"]["total_time"];
    /**
     * スライドの数を取得
     */
    get slides(): number[];
    private generateStepProps;
    private generateDuration;
    /**
     * 指定したスライドのステップを取得
     * @param slide
     * @returns
     */
    private getStepBySlide;
    /**
     * マスターの文字列「*_*」を数字に変換
     * @returns
     */
    private generateNum;
}
