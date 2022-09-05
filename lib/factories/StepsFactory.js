"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepsFactory = void 0;
var mock_data_json_1 = __importDefault(require("../data/mock_data.json"));
var lodash_1 = __importDefault(require("lodash"));
var StepsFactory = /** @class */ (function () {
    function StepsFactory() {
    }
    StepsFactory.getStepList = function (slide, step) {
        var _this = this;
        var data = this.getStepBySlide(slide).map(function (x) { return _this.generateStepProps(x); });
        data = data.filter(function (x) { return x.stepProgress <= step; });
        return data;
    };
    StepsFactory.getCurrentStepData = function (slide, step) {
        var stepData = this.getStepBySlide(slide);
        return this.generateStepProps(stepData[step]);
    };
    StepsFactory.getNextStepDataOnQuiz = function (slide, step) {
        var stepData = this.getStepBySlide(slide);
        var next_steps = stepData[step].next_steps;
        // ステップが終わりだったとき
        if (next_steps.next_step === "lecture_end")
            return;
        var _a = stepData[step].next_steps, if_correct = _a.if_correct, if_wrong = _a.if_wrong;
        return [
            this.generateStepProps(stepData[this.generateNum(if_correct)]),
            this.generateStepProps(stepData[this.generateNum(if_wrong)])
        ];
    };
    StepsFactory.getNextStepData = function (slide, step) {
        var stepData = this.getStepBySlide(slide);
        var next_steps = stepData[step].next_steps;
        // ステップが終わりだったとき
        if (next_steps.next_step === "lecture_end")
            return;
        var nextStep = next_steps.go_to;
        if (!nextStep)
            return;
        return this.generateStepProps(stepData[this.generateNum(nextStep)]);
    };
    StepsFactory.getTotalTime = function (slide) {
        var list = this.getStepBySlide(slide);
        return list[list.length - 1].audio.total_time;
    };
    /**
     * シークバーの位置を取得
     * @param slide
     * @returns
     */
    StepsFactory.getSeekBarStartsBySlide = function (slide) {
        var steps = this.getStepBySlide(slide);
        steps = steps.filter(function (x) { return !x.question.is_result_step; });
        return steps.map(function (x) { return x.audio.seekbar_start; });
    };
    Object.defineProperty(StepsFactory, "slides", {
        /**
         * スライドの数を取得
         */
        get: function () {
            var slides = this.steps.map(function (_a) {
                var progress = _a.progress;
                return progress.slide - 1;
            });
            return lodash_1.default.uniq(slides);
        },
        enumerable: false,
        configurable: true
    });
    StepsFactory.generateStepProps = function (data) {
        if (!data)
            return;
        var duration = this.generateDuration(data.next_steps.next_step);
        return __assign({ stepProgress: data.progress.step - 1, image: data.image.display_file, motion1: data.motion.motion_1, motion2: data.motion.motion_2, sound: data.audio.mp3, duration: duration || data.audio.time, talking: duration ? "boy" : "teacher" }, this.buildQuizData(data));
    };
    StepsFactory.generateDuration = function (ev) {
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
    };
    /**
     * 指定したスライドのステップを取得
     * @param slide
     * @returns
     */
    StepsFactory.getStepBySlide = function (slide) {
        return this.steps.filter(function (_a) {
            var progress = _a.progress;
            return progress.slide - 1 === slide;
        });
    };
    /**
     * マスターの文字列「*_*」を数字に変換
     * @returns
     */
    StepsFactory.generateNum = function (val) {
        return Number(val.split("_")[1]) - 1;
    };
    /**
     * クイズデータを生成
     * @param step
     * @returns
     */
    StepsFactory.buildQuizData = function (data) {
        var question = data.question, image = data.image;
        if (data.image.display_object_1 !== "question_area")
            return;
        var questions = [
            question.button_1,
            question.button_2,
            question.button_3,
            question.button_4
        ];
        var answers = [
            question.ans_1,
            question.ans_2,
            question.ans_3,
            question.ans_4
        ];
        return {
            questions: lodash_1.default.compact(questions),
            correctIndex: answers.indexOf(true),
            x: image.x_axis,
            y: image.x_axis,
            width: image.width,
            height: image.height,
        };
    };
    Object.defineProperty(StepsFactory, "steps", {
        get: function () {
            // @ts-ignore
            return mock_data_json_1.default.steps;
        },
        enumerable: false,
        configurable: true
    });
    return StepsFactory;
}());
exports.StepsFactory = StepsFactory;
//# sourceMappingURL=StepsFactory.js.map