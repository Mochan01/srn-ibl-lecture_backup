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
exports.ControlPanel = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var ArrowBtn_1 = require("../../molecules/ArrowBtn/ArrowBtn");
var ControlPanelL_1 = require("../../molecules/ControlPanelL/ControlPanelL");
var ClassNames_1 = require("../../../data/ClassNames");
var PlayBtn_1 = require("../../molecules/PlayBtn/PlayBtn");
var SeekBarAnimate_1 = require("../../molecules/SeekBarAnimate/SeekBarAnimate");
var SeekBarController_1 = require("../../molecules/SeekBarController/SeekBarController");
var PlayProvider_1 = require("../../providers/PlayProvider/PlayProvider");
var SlideProgressProvider_1 = require("../../providers/SlideProgressProvider/SlideProgressProvider");
var SIZE_1 = require("../../../data/SIZE");
var useGetStepList_1 = require("../../../hooks/useGetStepList");
var StepsFactory_1 = require("../../../factories/StepsFactory");
var RunSeekProvider_1 = require("../../providers/RunSeekProvider/RunSeekProvider");
var ControlPanelR_1 = require("../../molecules/ControlPanelR/ControlPanelR");
var Main = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  width: ", "px;\n"], ["\n  display: flex;\n  width: ", "px;\n"])), SIZE_1.SIZE.W);
var Panel = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  &:before {\n    content: \"\";\n    display: block;\n  }\n"], ["\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  &:before {\n    content: \"\";\n    display: block;\n  }\n"])));
var PanelB = (0, styled_components_1.default)(Panel)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-image: url(\"lecture_panel_b.png\");\n  width: ", "px;\n  height: ", "px;\n  padding: 6px 30px 0 30px;\n"], ["\n  background-image: url(\"lecture_panel_b.png\");\n  width: ", "px;\n  height: ", "px;\n  padding: 6px 30px 0 30px;\n"])), SIZE_1.SIZE.PANEL_B_W, SIZE_1.SIZE.PANEL_B_H);
var BtnWrapperL = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  & > div:not(:first-of-type) {\n    margin-left: 22px;\n  }\n"], ["\n  display: flex;\n  & > div:not(:first-of-type) {\n    margin-left: 22px;\n  }\n"])));
var BtnWrapperR = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  & > div {\n    margin-left: 64px;\n  }\n"], ["\n  & > div {\n    margin-left: 64px;\n  }\n"])));
/**
 * コントロールパネル
 * @param param0
 * @returns
 */
var ControlPanel = function (_a) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(SeekBarMemo, null),
        react_1.default.createElement(Main, null,
            react_1.default.createElement(ControlPanelL_1.ControlPanelL, { id: ClassNames_1.classNames.paginate }),
            react_1.default.createElement(PanelB, null,
                react_1.default.createElement(BtnWrapperL, null,
                    react_1.default.createElement(ArrowBtn_1.ArrowBtn, { id: ClassNames_1.classNames.arrowPrev, "$dir": "prev" }),
                    react_1.default.createElement(PlayBtnMemo, null),
                    react_1.default.createElement(ArrowBtn_1.ArrowBtn, { id: ClassNames_1.classNames.arrowNext, "$dir": "next" })),
                react_1.default.createElement(BtnWrapperR, null,
                    react_1.default.createElement(ArrowBtn_1.ArrowBtn, { id: ClassNames_1.classNames.arrowNext, "$dir": "next" }))),
            react_1.default.createElement(ControlPanelR_1.ControlPanelR, null))));
};
exports.ControlPanel = ControlPanel;
var SeekBarWrapper = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: relative;\n  height: 12px;\n"], ["\n  position: relative;\n  height: 12px;\n"])));
var SeekBarChild = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  opacity: ", ";\n"], ["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  opacity: ", ";\n"])), function (_a) {
    var alpha = _a.alpha;
    return typeof alpha === "number" ? alpha : 1;
});
/**
 *  シークバー
 *  アニメーションするバーと手で操作するバーはコンポーネントを分けてます
 */
var SeekBarMemo = (0, react_1.memo)(function () {
    var _a = (0, react_1.useContext)(PlayProvider_1.PlayContext), play = _a.play, setPlay = _a.setPlay;
    var slideProgress = (0, react_1.useContext)(SlideProgressProvider_1.SlideProgressContext).slideProgress;
    var _b = (0, useGetStepList_1.useGetStepList)(), currentProgress = _b.currentProgress, setStepList = _b.setStepList;
    var points = (0, react_1.useMemo)(function () {
        return StepsFactory_1.StepsFactory.getSeekBarStartsBySlide(slideProgress);
    }, [slideProgress]);
    var duration = (0, react_1.useMemo)(function () {
        return StepsFactory_1.StepsFactory.getTotalTime(slideProgress);
    }, [slideProgress]);
    var _c = (0, react_1.useState)(false), isTouched = _c[0], setIsTouched = _c[1];
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(SeekBarWrapper, { key: "".concat(slideProgress, "_").concat(currentProgress) },
            (!isTouched && play) &&
                react_1.default.createElement(SeekBarChild, null,
                    react_1.default.createElement(SeekBarAnimate_1.SeekBarAnimate, __assign({ percentage: points[currentProgress] }, { duration: duration }))),
            react_1.default.createElement(SeekBarChild, { alpha: (isTouched || !play) ? 1 : 0 },
                react_1.default.createElement(SeekBarController_1.SeekBarController, __assign({ index: currentProgress, onPointerDown: function () {
                        setPlay(false);
                        setIsTouched(true);
                    }, onPointerUp: function (progress) {
                        var stepList = StepsFactory_1.StepsFactory.getStepList(slideProgress, progress);
                        setStepList({ type: "UPDATE", stepList: stepList });
                        setIsTouched(false);
                    } }, { points: points })))));
});
/**
 * 再生ボタン
 */
var PlayBtnMemo = (0, react_1.memo)(function () {
    var _a = (0, react_1.useContext)(PlayProvider_1.PlayContext), play = _a.play, setPlay = _a.setPlay;
    var setIsRunSeek = (0, react_1.useContext)(RunSeekProvider_1.RunSeekContext).setIsRunSeek;
    var onClick = function () {
        setPlay(function (s) {
            var state = !s;
            setIsRunSeek(state);
            return state;
        });
    };
    return react_1.default.createElement(PlayBtn_1.PlayBtn, { isPlay: play, onClick: onClick });
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=ControlPanel.js.map