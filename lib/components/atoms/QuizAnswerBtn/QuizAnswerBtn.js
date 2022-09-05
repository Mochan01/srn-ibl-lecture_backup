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
exports.QuizAnswerBtn = exports.QUIZ_ANSWER_BTN = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
exports.QUIZ_ANSWER_BTN = {
    GRAY: "Answer_button_greyout.png",
    RED: "Answer_button_select.png",
    WHITE: "Answer_button.png"
};
var Main = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 116px;\n  height: 46px;\n  border-style: solid;\n  border-width: 15px;\n  border-image-source: url(", ");\n  border-image-slice: 15 15 15 15 fill;\n  border-image-repeat: stretch;\n  cursor: ", ";\n  position: relative;\n"], ["\n  width: 116px;\n  height: 46px;\n  border-style: solid;\n  border-width: 15px;\n  border-image-source: url(", ");\n  border-image-slice: 15 15 15 15 fill;\n  border-image-repeat: stretch;\n  cursor: ", ";\n  position: relative;\n"])), function (_a) {
    var mutation = _a.mutation;
    return mutation;
}, function (_a) {
    var mutation = _a.mutation;
    return mutation === exports.QUIZ_ANSWER_BTN.GRAY ? "auto" : "pointer";
});
var Comment = styled_components_1.default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 28px;\n  text-align: center;\n  user-select: none;\n  line-height: 1;\n  white-space: nowrap;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  left: 0;\n  transform: translateY(-50%);\n"], ["\n  color: ", ";\n  font-size: 28px;\n  text-align: center;\n  user-select: none;\n  line-height: 1;\n  white-space: nowrap;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  left: 0;\n  transform: translateY(-50%);\n"])), function (_a) {
    var color = _a.color;
    return color;
});
var QuizAnswerBtn = function (_a) {
    var mutation = _a.mutation, _b = _a.onClick, onClick = _b === void 0 ? function () { } : _b;
    // 文字色
    var color = (0, react_1.useMemo)(function () {
        var color;
        switch (mutation) {
            case exports.QUIZ_ANSWER_BTN.GRAY:
                color = "#5A5A5A";
                break;
            case exports.QUIZ_ANSWER_BTN.RED:
                color = "#fff";
                break;
            case exports.QUIZ_ANSWER_BTN.WHITE:
                color = "#2365f";
                break;
        }
        return color;
    }, [mutation]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Main, { role: "button", mutation: mutation, onClick: function () {
                if (mutation === exports.QUIZ_ANSWER_BTN.GRAY)
                    return;
                onClick();
            } },
            react_1.default.createElement(Comment, { color: color }, "\u89E3\u7B54"))));
};
exports.QuizAnswerBtn = QuizAnswerBtn;
var templateObject_1, templateObject_2;
//# sourceMappingURL=QuizAnswerBtn.js.map