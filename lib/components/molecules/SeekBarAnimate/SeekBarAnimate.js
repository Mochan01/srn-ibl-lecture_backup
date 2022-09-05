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
exports.SeekBarAnimate = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var useAnimationFrame_1 = require("../../../hooks/useAnimationFrame");
var SeekBar_1 = require("../../atoms/SeekBar/SeekBar");
var RunSeekProvider_1 = require("../../providers/RunSeekProvider/RunSeekProvider");
var Main = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  pointer-events: none;\n"], ["\n  pointer-events: none;\n"])));
/**
 * 等速直線運動するだけのシークバー
 * @param param0
 * @returns
 */
var SeekBarAnimate = function (_a) {
    var duration = _a.duration, _b = _a.onRunning, onRunning = _b === void 0 ? function () { } : _b, _c = _a.percentage, percentage = _c === void 0 ? 0 : _c;
    // 100%で停止
    var _percentage = (0, react_1.useMemo)(function () { return percentage; }, []);
    var _d = (0, react_1.useState)(_percentage), value = _d[0], setValue = _d[1];
    (0, react_1.useEffect)(function () {
        onRunning(value);
        if (value <= 100)
            return;
        setIsRunSeek(false);
    }, [value]);
    // 停止 / 再開
    var _e = (0, react_1.useContext)(RunSeekProvider_1.RunSeekContext), isRunSeek = _e.isRunSeek, setIsRunSeek = _e.setIsRunSeek;
    // アニメーション開始
    var time = (0, react_1.useMemo)(function () { return new Date().getTime(); }, [isRunSeek]);
    (0, useAnimationFrame_1.useAnimationFrame)(isRunSeek, function () {
        // % 計算
        var _duration = duration - (duration * (_percentage / 100));
        var percentage = ((new Date().getTime() - time) / _duration) * (100 - _percentage);
        percentage += _percentage;
        var zero = 10;
        percentage *= zero;
        percentage = Math.floor(percentage);
        percentage /= zero;
        setValue(percentage);
    });
    return (react_1.default.createElement(Main, null,
        react_1.default.createElement(SeekBar_1.SeekBar, { value: value, setValue: setValue })));
};
exports.SeekBarAnimate = SeekBarAnimate;
var templateObject_1;
//# sourceMappingURL=SeekBarAnimate.js.map