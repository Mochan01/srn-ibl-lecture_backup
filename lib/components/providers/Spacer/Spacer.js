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
exports.Spacer = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var customMedia_1 = __importDefault(require("../../../data/customMedia"));
var styleSpacer = (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: inline-block;\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  display: inline-block;\n  ", ";\n  ", ";\n  ", ";\n"])), customMedia_1.default.greaterThan("pc")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: ", "px;\n    height: ", "px;\n  "], ["\n    width: ", "px;\n    height: ", "px;\n  "])), function (_a) {
    var $width = _a.$width;
    return $width.pc;
}, function (_a) {
    var $height = _a.$height;
    return $height.pc;
}), customMedia_1.default.between("sp", "tb")(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: ", "px;\n    height: ", "px;\n  "], ["\n    width: ", "px;\n    height: ", "px;\n  "])), function (_a) {
    var $width = _a.$width;
    return $width.tb;
}, function (_a) {
    var $height = _a.$height;
    return $height.tb;
}), customMedia_1.default.lessThan("sp")(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: ", "px;\n    height: ", "px;\n  "], ["\n    width: ", "px;\n    height: ", "px;\n  "])), function (_a) {
    var $width = _a.$width;
    return $width.sp;
}, function (_a) {
    var $height = _a.$height;
    return $height.sp;
}));
var styleStacker = (0, styled_components_1.css)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  & > * {\n    ", ";\n    ", ";\n    ", ";\n    &:first-child { margin-left: 0; }\n    &:last-child { margin-bottom: 0; }\n  }\n"], ["\n  & > * {\n    ", ";\n    ", ";\n    ", ";\n    &:first-child { margin-left: 0; }\n    &:last-child { margin-bottom: 0; }\n  }\n"])), customMedia_1.default.greaterThan("pc")(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      margin-left: ", "px;\n      margin-bottom: ", "px;\n    "], ["\n      margin-left: ", "px;\n      margin-bottom: ", "px;\n    "])), function (_a) {
    var $width = _a.$width;
    return $width.pc;
}, function (_a) {
    var $height = _a.$height;
    return $height.pc;
}), customMedia_1.default.between("sp", "tb")(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      margin-left: ", "px;\n      margin-bottom: ", "px;\n    "], ["\n      margin-left: ", "px;\n      margin-bottom: ", "px;\n    "])), function (_a) {
    var $width = _a.$width;
    return $width.tb;
}, function (_a) {
    var $height = _a.$height;
    return $height.tb;
}), customMedia_1.default.lessThan("sp")(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      margin-left: ", "px;\n      margin-bottom: ", "px;\n    "], ["\n      margin-left: ", "px;\n      margin-bottom: ", "px;\n    "])), function (_a) {
    var $width = _a.$width;
    return $width.sp;
}, function (_a) {
    var $height = _a.$height;
    return $height.sp;
}));
var Main = styled_components_1.default.span(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var children = _a.children;
    return children ? styleStacker : styleSpacer;
});
/**
 * For opening a space.
 * @param param0
 * @returns
 */
var Spacer = function (_a) {
    var size = _a.size, children = _a.children, axis = _a.axis, when = _a.when;
    var createVerticalSize = function (whenSize) { return axis === "vertical" ? 0 : whenSize || size; };
    var createHorizontalSize = function (whenSize) { return axis === "horizontal" ? 0 : whenSize || size; };
    return (react_1.default.createElement(Main, { "$width": {
            pc: createVerticalSize(when === null || when === void 0 ? void 0 : when.pc),
            tb: createVerticalSize(when === null || when === void 0 ? void 0 : when.tb),
            sp: createVerticalSize(when === null || when === void 0 ? void 0 : when.sp)
        }, "$height": {
            pc: createHorizontalSize(when === null || when === void 0 ? void 0 : when.pc),
            tb: createHorizontalSize(when === null || when === void 0 ? void 0 : when.tb),
            sp: createHorizontalSize(when === null || when === void 0 ? void 0 : when.sp)
        } }, children));
};
exports.Spacer = Spacer;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=Spacer.js.map