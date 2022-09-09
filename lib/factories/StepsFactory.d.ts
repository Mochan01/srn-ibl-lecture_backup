import { StepType } from "src-ibl-lecture-master/variable_types/StepType";
import { StepProps } from "../variable_types/StepProps";
export declare class StepsFactory {
    private _steps;
    constructor(data?: object);
    getStepList(slide: number, step: number): StepProps[];
    getStepListAll(slide: number): StepProps[];
    getCurrentStepData(slide: number, step: number): StepProps;
    getNextStepDataOnQuiz(slide: number, step: number): [StepProps, StepProps];
    /**
     * 次のステップのデータを取得する
     * @param slide
     * @param step
     * @returns [次のデータ、次のステップへ進むトリガーが何か]
     */
    getNextStepData(slide: number, step: number): [StepProps, StepType["next_steps"]["next_step"]];
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
