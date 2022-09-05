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
exports.Panel = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var SIZE_1 = require("../../../data/SIZE");
var SLIDE_DISTANCE = 200;
var Main = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-image: url(", ");\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  animation-name:\n    ", ",\n    ", ";\n  animation-duration: .3s;\n  width: ", "px;\n  height: ", "px;\n  @keyframes fadein {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n  @keyframes slideup {\n    from {\n      transform: translateY(-", "px);\n    }\n    to {\n      transform: translateY(0);\n    }\n  }\n  @keyframes slidedown {\n    from {\n      transform: translateY(", "px);\n    }\n    to {\n      transform: translateY(0);\n    }\n  }\n  @keyframes slideleft {\n    from {\n      transform: translateX(", "px);\n    }\n    to {\n      transform: translateX(0);\n    }\n  }\n  @keyframes slideright {\n    from {\n      transform: translateX(-", "px);\n    }\n    to {\n      transform: translateX(0);\n    }\n  }\n  @keyframes enlarge {\n    from {\n      transform: scale(.5);\n    }\n    to {\n      transform: scale(1);\n    }\n  }\n"], ["\n  background-image: url(", ");\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  animation-name:\n    ", ",\n    ", ";\n  animation-duration: .3s;\n  width: ", "px;\n  height: ", "px;\n  @keyframes fadein {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n  @keyframes slideup {\n    from {\n      transform: translateY(-", "px);\n    }\n    to {\n      transform: translateY(0);\n    }\n  }\n  @keyframes slidedown {\n    from {\n      transform: translateY(", "px);\n    }\n    to {\n      transform: translateY(0);\n    }\n  }\n  @keyframes slideleft {\n    from {\n      transform: translateX(", "px);\n    }\n    to {\n      transform: translateX(0);\n    }\n  }\n  @keyframes slideright {\n    from {\n      transform: translateX(-", "px);\n    }\n    to {\n      transform: translateX(0);\n    }\n  }\n  @keyframes enlarge {\n    from {\n      transform: scale(.5);\n    }\n    to {\n      transform: scale(1);\n    }\n  }\n"])), function (_a) {
    var image = _a.image;
    return image;
}, function (_a) {
    var image = _a.image;
    return image ? "url(".concat(image, ")") : "none";
}, function (_a) {
    var motion1 = _a.motion1;
    return motion1 ? motion1 : "none";
}, function (_a) {
    var motion2 = _a.motion2;
    return motion2 ? motion2 : "none";
}, SIZE_1.SIZE.W, SIZE_1.SIZE.H, SLIDE_DISTANCE, SLIDE_DISTANCE, SLIDE_DISTANCE, SLIDE_DISTANCE);
var Panel = function (props) {
    return react_1.default.createElement(Main, __assign({}, props), props.children);
};
exports.Panel = Panel;
var templateObject_1;
//# sourceMappingURL=Panel.js.map