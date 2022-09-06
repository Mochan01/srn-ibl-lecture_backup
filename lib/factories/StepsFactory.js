import json from "../data/mock_data.json";
import _ from "lodash";
export class StepsFactory {
    constructor(data = json) {
        this._steps = data["steps"];
    }
    getStepList(slide, step) {
        let data = this.getStepBySlide(slide).map(x => this.generateStepProps(x));
        data = data.filter(x => x.stepProgress <= step);
        return data;
    }
    getCurrentStepData(slide, step) {
        const stepData = this.getStepBySlide(slide);
        return this.generateStepProps(stepData[step]);
    }
    getNextStepDataOnQuiz(slide, step) {
        const stepData = this.getStepBySlide(slide);
        let { next_steps } = stepData[step];
        // ステップが終わりだったとき
        if (next_steps.next_step === "lecture_end")
            return;
        let { if_correct, if_wrong } = stepData[step].next_steps;
        return [
            this.generateStepProps(stepData[this.generateNum(if_correct)]),
            this.generateStepProps(stepData[this.generateNum(if_wrong)])
        ];
    }
    getNextStepData(slide, step) {
        const stepData = this.getStepBySlide(slide);
        let { next_steps } = stepData[step];
        // スライドが終わりだったとき
        if (next_steps.next_step === "slide_end")
            return;
        // レクチャーが終わりだったとき
        if (next_steps.next_step === "lecture_end")
            return;
        const nextStep = next_steps.go_to;
        if (!nextStep)
            return;
        return this.generateStepProps(stepData[this.generateNum(nextStep)]);
    }
    getTotalTime(slide) {
        const list = this.getStepBySlide(slide);
        return list[list.length - 1].audio.total_time;
    }
    /**
     * シークバーの位置を取得
     * @param slide
     * @returns
     */
    getSeekBarStartsBySlide(slide) {
        let steps = this.getStepBySlide(slide);
        steps = steps.filter(x => !x.question.is_result_step);
        return steps.map(x => x.audio.seekbar_start);
    }
    /**
     * スライドの数を取得
     */
    get slides() {
        const slides = this._steps.map(({ progress }) => progress.slide - 1);
        return _.uniq(slides);
    }
    generateStepProps(data) {
        if (!data)
            return;
        const duration = this.generateDuration(data.next_steps.next_step);
        return Object.assign({ stepProgress: data.progress.step - 1, image: data.image.display_file, motion1: data.motion.motion_1, motion2: data.motion.motion_2, sound: data.audio.mp3, duration: duration || data.audio.time, talking: duration ? "boy" : "teacher" }, this.buildQuizData(data));
    }
    generateDuration(ev) {
        switch (ev) {
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
    getStepBySlide(slide) {
        return this._steps.filter(({ progress }) => progress.slide - 1 === slide);
    }
    /**
     * マスターの文字列「*_*」を数字に変換
     * @returns
     */
    generateNum(val) {
        return Number(val.split("_")[1]) - 1;
    }
    /**
     * クイズデータを生成
     * @param step
     * @returns
     */
    buildQuizData(data) {
        const { question, image } = data;
        if (data.image.display_object_1 !== "question_area")
            return;
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
        };
    }
}
//# sourceMappingURL=StepsFactory.js.map