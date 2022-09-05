"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizArea = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var QuizAnswerBtn_1 = require("../../atoms/QuizAnswerBtn/QuizAnswerBtn");
var QuizChoiceBtn_1 = require("../../atoms/QuizChoiceBtn/QuizChoiceBtn");
var PlayProvider_1 = require("../../providers/PlayProvider/PlayProvider");
var SlideProgressProvider_1 = require("../../providers/SlideProgressProvider/SlideProgressProvider");
var useGetStepList_1 = require("../../../hooks/useGetStepList");
var StepsFactory_1 = require("../../../factories/StepsFactory");
var RunSeekProvider_1 = require("../../providers/RunSeekProvider/RunSeekProvider");
var Main = styled_components_1.default.div.attrs(function (_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    return ({
        style: {
            transform: "translate(".concat(x, "%, ").concat(y, "%) scale(").concat(width, "%, ").concat(height, "%)")
        }
    });
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  pointer-events: ", ";\n  position: absolute;\n  transform-origin: left top;\n  top: 0;\n  left: 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  column-gap: 32px;\n  row-gap: 24px;\n"], ["\n  pointer-events: ", ";\n  position: absolute;\n  transform-origin: left top;\n  top: 0;\n  left: 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  column-gap: 32px;\n  row-gap: 24px;\n"])), function (_a) {
    var touchedEnable = _a.touchedEnable;
    return touchedEnable ? "auto" : "none";
});
var AnswerBtnWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  justify-self: ", ";\n  align-self: end;\n  ", "\n"], ["\n  justify-self: ", ";\n  align-self: end;\n  ", "\n"])), function (_a) {
    var len = _a.len;
    return len === 4 ? "center" : "end";
}, function (_a) {
    var len = _a.len;
    return len === 4 && "\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n  ";
});
var QuizArea = function (_a) {
    var questions = _a.questions, correctIndex = _a.correctIndex, _b = _a.x, x = _b === void 0 ? 0 : _b, _c = _a.y, y = _c === void 0 ? 0 : _c, _d = _a.width, width = _d === void 0 ? 100 : _d, _e = _a.height, height = _e === void 0 ? 100 : _e;
    // 選択ボタン 状態管理
    var _f = (0, react_1.useState)(), chooseIndex = _f[0], setChooseIndex = _f[1];
    var choiceClickHandler = function (i) {
        setChooseIndex(i);
        setAnswered(false);
    };
    // 解答ボタン 状態管理
    var _g = (0, react_1.useState)(), isAnswered = _g[0], setAnswered = _g[1];
    var setPlay = (0, react_1.useContext)(PlayProvider_1.PlayContext).setPlay;
    var setIsRunSeek = (0, react_1.useContext)(RunSeekProvider_1.RunSeekContext).setIsRunSeek;
    var slideProgress = (0, react_1.useContext)(SlideProgressProvider_1.SlideProgressContext).slideProgress;
    var _h = (0, useGetStepList_1.useGetStepList)(), currentProgress = _h.currentProgress, stepList = _h.stepList, setStepList = _h.setStepList;
    var props = {
        len: questions.length,
        mutation: typeof isAnswered === "boolean"
            ? (isAnswered ? QuizAnswerBtn_1.QUIZ_ANSWER_BTN.RED : QuizAnswerBtn_1.QUIZ_ANSWER_BTN.WHITE)
            : QuizAnswerBtn_1.QUIZ_ANSWER_BTN.GRAY,
        onClick: (0, react_1.useCallback)(function () {
            setAnswered(true);
            setPlay(true);
            setIsRunSeek(true);
            var _a = StepsFactory_1.StepsFactory.getNextStepDataOnQuiz(slideProgress, stepList[stepList.length - 1].stepProgress), correct = _a[0], inCorrect = _a[1];
            setStepList({
                type: "ADD",
                stepList: [chooseIndex === correctIndex ? correct : inCorrect]
            });
        }, [slideProgress, currentProgress, chooseIndex])
    };
    return (react_1.default.createElement(Main, __assign({ touchedEnable: !isAnswered }, { x: x, y: y, width: width, height: height }),
        questions.map(function (x, i) { return (react_1.default.createElement(QuizChoiceBtn_1.QuizChoiceBtn, { key: i, mutation: chooseIndex === i
                ? QuizChoiceBtn_1.QUIZ_CHOICE_BTN.ORANGE
                : QuizChoiceBtn_1.QUIZ_CHOICE_BTN.WHITE, onClick: function () { return choiceClickHandler(i); }, isCorrect: isAnswered ? i === correctIndex : null }, x)); }),
        react_1.default.createElement(AnswerBtnWrapper, { len: questions.length },
            react_1.default.createElement(QuizAnswerBtn_1.QuizAnswerBtn, __assign({}, props)))));
};
exports.QuizArea = QuizArea;
var templateObject_1, templateObject_2;
//# sourceMappingURL=QuizArea.js.map