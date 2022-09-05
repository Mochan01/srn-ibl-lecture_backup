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
exports.Title = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var SkipBtn_1 = require("../../atoms/SkipBtn/SkipBtn");
var TitleBase_1 = require("../../atoms/TitleBase/TitleBase");
var useScalable_1 = require("../../../hooks/useScalable");
var Spacer_1 = require("../../providers/Spacer/Spacer");
var StepsFactory_1 = require("../../../factories/StepsFactory");
var Narration_1 = require("../../providers/Narration/Narration");
var Timer_1 = require("../../providers/Timer/Timer");
var Main = styled_components_1.default.div.attrs(function (_a) {
    var scale = _a.scale;
    return ({
        style: {
            transform: "scale(".concat(scale, ")")
        }
    });
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  transform-origin: left top;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  width: fit-content;\n"], ["\n  transform-origin: left top;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  width: fit-content;\n"])));
var Title = function (_a) {
    var _b = _a.onOver, onOver = _b === void 0 ? function () { } : _b;
    var scale = (0, useScalable_1.useScalable)();
    var initStep = (0, react_1.useMemo)(function () { return StepsFactory_1.StepsFactory.getCurrentStepData(0, 0); }, []);
    var _c = (0, react_1.useState)(initStep), step = _c[0], setStep = _c[1];
    var onEnd = function () {
        var next = StepsFactory_1.StepsFactory.getCurrentStepData(0, step.stepProgress + 1);
        // 終わり
        if (!next) {
            onOver();
            return;
        }
        setStep(next);
    };
    return (react_1.default.createElement(Main, { scale: scale },
        react_1.default.createElement(Narration_1.Narration, { key: "narration" + step.stepProgress, sound: step.sound }),
        react_1.default.createElement(Timer_1.Timer, { key: "timer" + step.stepProgress, duration: step.duration, onEnd: onEnd }),
        react_1.default.createElement(TitleBase_1.TitleBase, { unitName: "\u30C0\u30DF\u30FC\u30C6\u30AD\u30B9\u30C8", unitTitle: "\u30C0\u30DF\u30FC\u30C6\u30AD\u30B9\u30C8\u30C0\u30DF\u30FC\u30C6\u30AD\u30B9\u30C8" }),
        react_1.default.createElement(Spacer_1.Spacer, { size: 32 }),
        react_1.default.createElement(SkipBtn_1.SkipBtn, { onClick: onOver })));
};
exports.Title = Title;
var templateObject_1;
//# sourceMappingURL=Title.js.map