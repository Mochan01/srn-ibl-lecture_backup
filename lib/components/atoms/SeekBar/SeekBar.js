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
exports.SeekBar = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var SliderPrimitive = __importStar(require("@radix-ui/react-slider"));
var SIZE_1 = require("../../../data/SIZE");
var SLIDER_H = 12;
var StyledSlider = (0, styled_components_1.default)(SliderPrimitive.Root)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  user-select: none;\n  touch-action: none;\n  width: ", "px;\n  background-color: #042f78;\n  padding: 0 2px;\n  position: relative;\n  &[data-orientation=\"horizontal\"] {\n    height: ", "px;\n  }\n  &[data-orientation=\"vertical\"] {\n    flex-direction: column;\n    width: ", "px;\n    height: 100px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  user-select: none;\n  touch-action: none;\n  width: ", "px;\n  background-color: #042f78;\n  padding: 0 2px;\n  position: relative;\n  &[data-orientation=\"horizontal\"] {\n    height: ", "px;\n  }\n  &[data-orientation=\"vertical\"] {\n    flex-direction: column;\n    width: ", "px;\n    height: 100px;\n  }\n"])), SIZE_1.SIZE.W, SLIDER_H, SLIDER_H);
var BAR_H = 6;
var StyledTrack = (0, styled_components_1.default)(SliderPrimitive.Track)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: linear-gradient(to top, #b2b7c1, #fbfcfd);\n  position: relative;\n  flex-grow: 1;\n  &[data-orientation=\"horizontal\"] { height: ", "px; }\n  &[data-orientation=\"vertical\"] { width: 3px; }\n"], ["\n  background: linear-gradient(to top, #b2b7c1, #fbfcfd);\n  position: relative;\n  flex-grow: 1;\n  &[data-orientation=\"horizontal\"] { height: ", "px; }\n  &[data-orientation=\"vertical\"] { width: 3px; }\n"])), BAR_H);
var StyledRange = (0, styled_components_1.default)(SliderPrimitive.Range)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  background: linear-gradient(to top, #05cff3, #a5ebfd);\n  height: 100%;\n"], ["\n  position: absolute;\n  background: linear-gradient(to top, #05cff3, #a5ebfd);\n  height: 100%;\n"])));
var THUMB_SIZE = 14;
var StyledThumb = (0, styled_components_1.default)(SliderPrimitive.Thumb)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  all: unset;\n  display: block;\n  width: ", "px;\n  height: ", "px;\n  background-image: url(\"lecture_play_circle.png\");\n  background-size: contain;\n  background-repeat: no-repeat;\n"], ["\n  all: unset;\n  display: block;\n  width: ", "px;\n  height: ", "px;\n  background-image: url(\"lecture_play_circle.png\");\n  background-size: contain;\n  background-repeat: no-repeat;\n"])), THUMB_SIZE, THUMB_SIZE);
/**
 * https://www.radix-ui.com/docs/primitives/components/slider
 * @param param0
 * @returns
 */
var SeekBar = function (_a) {
    var value = _a.value, setValue = _a.setValue, _b = _a.onPointerDown, onPointerDown = _b === void 0 ? function () { } : _b, _c = _a.onPointerUp, onPointerUp = _c === void 0 ? function () { } : _c;
    return (react_1.default.createElement(StyledSlider, { max: 100, value: [value], onValueChange: function (nextValue) { return setValue(nextValue[0]); }, onPointerDown: function () { return onPointerDown(value); }, onPointerUp: function () { return onPointerUp(value); } },
        react_1.default.createElement(StyledTrack, null,
            react_1.default.createElement(StyledRange, null)),
        react_1.default.createElement(StyledThumb, null)));
};
exports.SeekBar = SeekBar;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=SeekBar.js.map