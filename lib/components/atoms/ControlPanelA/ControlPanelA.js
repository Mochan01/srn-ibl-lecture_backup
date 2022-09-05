"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlPanelA = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var SIZE_1 = require("../../../data/SIZE");
var Main = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  background-image: url(\"lecture_panel_a.png\");\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 6px;\n"], ["\n  width: ", "px;\n  height: ", "px;\n  background-image: url(\"lecture_panel_a.png\");\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 6px;\n"])), SIZE_1.SIZE.PANEL_A_W, SIZE_1.SIZE.PANEL_A_H);
var ControlPanelA = function (_a) {
    var children = _a.children;
    return react_1.default.createElement(Main, null, children);
};
exports.ControlPanelA = ControlPanelA;
var templateObject_1;
//# sourceMappingURL=ControlPanelA.js.map