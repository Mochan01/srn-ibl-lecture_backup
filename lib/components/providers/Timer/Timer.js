"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var useTimeout_1 = require("../../../hooks/useTimeout");
var Main = styled_components_1.default.div.attrs(function (props) { return ({
    style: {}
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n"], ["\n"])));
var Timer = function (_a) {
    var duration = _a.duration, onEnd = _a.onEnd;
    (0, useTimeout_1.useTimeout)({ duration: duration, onEnd: onEnd });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Main, null)));
};
exports.Timer = Timer;
var templateObject_1;
//# sourceMappingURL=Timer.js.map