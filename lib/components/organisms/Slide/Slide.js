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
exports.Slide = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Panel_1 = require("../../atoms/Panel/Panel");
var Narration_1 = require("../../providers/Narration/Narration");
var QuizArea_1 = require("../../molecules/QuizArea/QuizArea");
var PlayProvider_1 = require("../../providers/PlayProvider/PlayProvider");
var Timer_1 = require("../../providers/Timer/Timer");
var SlideProgressProvider_1 = require("../../providers/SlideProgressProvider/SlideProgressProvider");
var useGetStepList_1 = require("../../../hooks/useGetStepList");
var StepsFactory_1 = require("../../../factories/StepsFactory");
var RunSeekProvider_1 = require("../../providers/RunSeekProvider/RunSeekProvider");
var Main = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & > div {\n    &:first-child {\n      position: static;\n    }\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n"], ["\n  & > div {\n    &:first-child {\n      position: static;\n    }\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n"])));
var Slide = function (_a) {
    var play = (0, react_1.useContext)(PlayProvider_1.PlayContext).play;
    var _b = (0, useGetStepList_1.useGetStepList)(), stepList = _b.stepList, setStepList = _b.setStepList, currentProgress = _b.currentProgress;
    var setIsRunSeek = (0, react_1.useContext)(RunSeekProvider_1.RunSeekContext).setIsRunSeek;
    var slideProgress = (0, react_1.useContext)(SlideProgressProvider_1.SlideProgressContext).slideProgress;
    var onEnd = function () {
        var stepData = StepsFactory_1.StepsFactory.getNextStepData(slideProgress, currentProgress);
        if (!stepData) {
            setIsRunSeek(false);
            return;
        }
        setStepList({ type: "ADD", stepList: [stepData] });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Main, null, stepList && stepList.map(function (_a, i) {
            var image = _a.image, motion1 = _a.motion1, motion2 = _a.motion2, sound = _a.sound, duration = _a.duration, talking = _a.talking, questions = _a.questions, correctIndex = _a.correctIndex, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
            var isOver = i <= currentProgress;
            var isEqual = i === currentProgress;
            return (react_1.default.createElement(react_1.Fragment, { key: "".concat(slideProgress, "_").concat(i) },
                isOver && react_1.default.createElement(Panel_1.Panel, __assign({}, { image: image, motion1: motion1, motion2: motion2 })),
                play && isEqual && sound && react_1.default.createElement(Narration_1.Narration, __assign({}, { sound: sound })),
                play && isEqual && react_1.default.createElement(Timer_1.Timer, __assign({}, { onEnd: onEnd, duration: duration })),
                questions && isOver &&
                    react_1.default.createElement(Panel_1.Panel, __assign({}, { motion1: motion1, motion2: motion2 }),
                        react_1.default.createElement(QuizArea_1.QuizArea, { touchedEnable: true, questions: questions, correctIndex: correctIndex, x: x, y: y, width: width, height: height }))));
        }))));
};
exports.Slide = Slide;
var templateObject_1;
//# sourceMappingURL=Slide.js.map