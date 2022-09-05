"use strict";
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
exports.SeekBarController = void 0;
var react_1 = __importDefault(require("react"));
var SeekBar_1 = require("../../atoms/SeekBar/SeekBar");
var useSeekControl_1 = require("../../../hooks/useSeekControl");
var SeekBarController = function (_a) {
    var points = _a.points, index = _a.index, _b = _a.onPointerDown, onPointerDown = _b === void 0 ? function () { } : _b, _c = _a.onPointerUp, onPointerUp = _c === void 0 ? function () { } : _c;
    var _d = (0, useSeekControl_1.useSeekControl)(points, index, "EDGE"), value = _d.value, setValue = _d.setValue, getClosest = _d.getClosest;
    return (react_1.default.createElement(SeekBar_1.SeekBar, __assign({ onPointerUp: function () {
            var closest = getClosest();
            onPointerUp(points.indexOf(closest));
        } }, { value: value, setValue: setValue, onPointerDown: onPointerDown })));
};
exports.SeekBarController = SeekBarController;
//# sourceMappingURL=SeekBarController.js.map