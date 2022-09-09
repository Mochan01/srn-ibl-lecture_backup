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
    getStepListAll(slide) {
        const steps = this.getStepBySlide(slide);
        return steps.map(x => this.generateStepProps(x));
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
    /**
     * 次のステップのデータを取得する
     * @param slide
     * @param step
     * @returns [次のデータ、次のステップへ進むトリガーが何か]
     */
    getNextStepData(slide, step) {
        const stepData = this.getStepBySlide(slide);
        let { next_steps } = stepData[step];
        const arr = [next_steps.next_step];
        let stepProps;
        if (next_steps.next_step !== "slide_end" &&
            next_steps.next_step !== "lecture_end" &&
            next_steps.next_step !== "on_answer") {
            stepProps = this.generateStepProps(stepData[this.generateNum(next_steps.go_to)]);
        }
        arr.unshift(stepProps);
        return arr;
    }
    getTotalTime(slide) {
        const list = this.getStepBySlide(slide);
        return list[list.length - 1].audio.total_time;
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
            questions: _.compact([
                data.question.button_1,
                data.question.button_2,
                data.question.button_3,
                data.question.button_4
            ]),
            correctIndex: [
                data.question.ans_1,
                data.question.ans_2,
                data.question.ans_3,
                data.question.ans_4
            ].indexOf(true),
            $x: data.image.x_axis,
            $y: data.image.y_axis,
            $width: data.image.width,
            $height: data.image.height
        };
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
}
//# sourceMappingURL=StepsFactory.js.map