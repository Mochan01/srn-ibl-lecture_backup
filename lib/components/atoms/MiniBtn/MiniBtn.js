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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiniBtn = exports.MINI_BUTTON_MUTATIONS = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
exports.MINI_BUTTON_MUTATIONS = {
    PREVIOUS_ON: "lecture_button_previous_on.png",
    PREVIOUS_OFF: "lecture_button_previous_off.png",
    AGAIN_ON: "lecture_button_again_on.png",
    AGAIN_OFF: "lecture_button_again_off.png",
    NEXT_ON: "lecture_button_next_on.png",
    NEXT_OFF: "lecture_button_next_off.png",
    PREV_ON: "lecture_button_previous_on.png",
    PREV_OFF: "lecture_button_previous_off.png",
    PLAY_ON: "lecture_button_play_on.png",
    PLAY_OFF: "lecture_button_play_off.png"
};
var TEXT_H = 14;
var Main = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-image: url(", ");\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: 80px;\n  height: 47px;\n  cursor: pointer;\n  position: relative;\n  &:before {\n    content: \"", "\";\n    position: absolute;\n    bottom: -", "px;\n    left: 0;\n    right: 0;\n    text-align: center;\n    line-height: 1;\n    white-space: nowrap;\n    font-size: ", "px;\n    height:  ", "px;\n    color: #fff;\n  }\n"], ["\n  background-image: url(", ");\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: 80px;\n  height: 47px;\n  cursor: pointer;\n  position: relative;\n  &:before {\n    content: \"", "\";\n    position: absolute;\n    bottom: -", "px;\n    left: 0;\n    right: 0;\n    text-align: center;\n    line-height: 1;\n    white-space: nowrap;\n    font-size: ", "px;\n    height:  ", "px;\n    color: #fff;\n  }\n"])), function (_a) {
    var mutation = _a.mutation;
    return mutation;
}, function (_a) {
    var caption = _a.caption;
    return caption;
}, TEXT_H + 4, TEXT_H, TEXT_H);
var MiniBtn = function (_a) {
    var mutation = _a.mutation, caption = _a.caption, _b = _a.onClick, onClick = _b === void 0 ? function () { } : _b;
    return react_1.default.createElement(Main, __assign({ role: "button" }, { mutation: mutation, caption: caption, onClick: onClick }));
};
exports.MiniBtn = MiniBtn;
var templateObject_1;
//# sourceMappingURL=MiniBtn.js.map