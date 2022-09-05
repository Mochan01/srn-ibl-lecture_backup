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
exports.Box = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var customMedia_1 = __importDefault(require("../../../data/customMedia"));
var Main = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n"])), customMedia_1.default.greaterThan("pc")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n  "], ["\n    ", ";\n  "])), function (_a) {
    var pc = _a.pc;
    return pc;
}), customMedia_1.default.between("sp", "tb")(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", ";\n  "], ["\n    ", ";\n  "])), function (_a) {
    var tb = _a.tb;
    return tb;
}), customMedia_1.default.lessThan("sp")(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    ", ";\n  "], ["\n    ", ";\n  "])), function (_a) {
    var sp = _a.sp;
    return sp;
}));
/**
 * A generic component that can pass Style as props.
 * @param param0
 * @returns
 */
var Box = function (props) {
    var _a, _b, _c;
    var makeStyle = function (style) { return style ? Object.assign({}, props === null || props === void 0 ? void 0 : props.sx, style) : props === null || props === void 0 ? void 0 : props.sx; };
    return (react_1.default.createElement(Main, __assign({}, props, { as: props === null || props === void 0 ? void 0 : props.as, pc: makeStyle((_a = props === null || props === void 0 ? void 0 : props.when) === null || _a === void 0 ? void 0 : _a.pc), tb: makeStyle((_b = props === null || props === void 0 ? void 0 : props.when) === null || _b === void 0 ? void 0 : _b.tb), sp: makeStyle((_c = props === null || props === void 0 ? void 0 : props.when) === null || _c === void 0 ? void 0 : _c.sp) }), props === null || props === void 0 ? void 0 : props.children));
};
exports.Box = Box;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Box.js.map