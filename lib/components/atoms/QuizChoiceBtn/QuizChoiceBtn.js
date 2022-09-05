"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
exports.QuizChoiceBtn = exports.QUIZ_CHOICE_BTN = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
exports.QUIZ_CHOICE_BTN = {
    ORANGE: "Question_button_select.png",
    WHITE: "Question_button.png"
};
var BORDER_W = 5;
var SIGN_SIZE = 42;
var Main = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-style: solid;\n  border-width: ", "px;\n  border-image-source: url(", ");\n  border-image-slice: 5 5 5 5 fill;\n  border-image-repeat: stretch;\n  cursor: pointer;\n  position: relative;\n  box-sizing: border-box;\n  width: 190px;\n  height: 58px;\n  &:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: ", "px;\n    padding-top: ", "px;\n    top: -", "px;\n    left: -", "px;\n    background-image: ", ";\n    background-size: contain;\n    background-repeat: no-repeat;\n  }\n"], ["\n  border-style: solid;\n  border-width: ", "px;\n  border-image-source: url(", ");\n  border-image-slice: 5 5 5 5 fill;\n  border-image-repeat: stretch;\n  cursor: pointer;\n  position: relative;\n  box-sizing: border-box;\n  width: 190px;\n  height: 58px;\n  &:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: ", "px;\n    padding-top: ", "px;\n    top: -", "px;\n    left: -", "px;\n    background-image: ", ";\n    background-size: contain;\n    background-repeat: no-repeat;\n  }\n"])), BORDER_W, function (_a) {
    var mutation = _a.mutation;
    return mutation;
}, SIGN_SIZE, SIGN_SIZE, SIGN_SIZE / 2, SIGN_SIZE / 2, function (_a) {
    var isCorrect = _a.isCorrect;
    return typeof isCorrect === "boolean"
        ? (isCorrect ? "url(Correct.png)" : "url(Wrong.png)")
        : "none";
});
var Comment = styled_components_1.default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n  color: ", ";\n  width: 100%;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  line-height: 1.2;\n  user-select: none;\n  font-size: 18px;\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n  color: ", ";\n  width: 100%;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  line-height: 1.2;\n  user-select: none;\n  font-size: 18px;\n"])), function (_a) {
    var color = _a.color;
    return color;
});
var QuizChoiceBtn = function (_a) {
    var mutation = _a.mutation, children = _a.children, isCorrect = _a.isCorrect, _b = _a.onClick, onClick = _b === void 0 ? function () { } : _b;
    // 文字色
    var color = (0, react_1.useMemo)(function () {
        var color;
        switch (mutation) {
            case exports.QUIZ_CHOICE_BTN.ORANGE:
                color = "#fff";
                break;
            case exports.QUIZ_CHOICE_BTN.WHITE:
                color = "#5A5A5A";
                break;
        }
        return color;
    }, [mutation]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Main, { role: "button", mutation: mutation, isCorrect: isCorrect, onClick: onClick },
            react_1.default.createElement(Comment, { color: color }, children))));
};
exports.QuizChoiceBtn = QuizChoiceBtn;
var templateObject_1, templateObject_2;
//# sourceMappingURL=QuizChoiceBtn.js.map