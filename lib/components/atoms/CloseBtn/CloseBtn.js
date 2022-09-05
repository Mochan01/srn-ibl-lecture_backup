"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseBtn = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Main = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 98px;\n  height: 83px;\n  background-image: url(\"lecture_button_close.png\");\n  cursor: pointer;\n"], ["\n  width: 98px;\n  height: 83px;\n  background-image: url(\"lecture_button_close.png\");\n  cursor: pointer;\n"])));
var CloseBtn = function (_a) {
    var _b = _a.onClick, onClick = _b === void 0 ? function () { } : _b;
    return react_1.default.createElement(Main, { role: "button", onClick: onClick });
};
exports.CloseBtn = CloseBtn;
var templateObject_1;
//# sourceMappingURL=CloseBtn.js.map