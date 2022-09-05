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
exports.Lecture = void 0;
var react_1 = __importStar(require("react"));
var StepsFactory_1 = require("../../../factories/StepsFactory");
var ControlPanel_1 = require("../../organisms/ControlPanel/ControlPanel");
var SlideProgressProvider_1 = require("../../providers/SlideProgressProvider/SlideProgressProvider");
var PlayProvider_1 = require("../../providers/PlayProvider/PlayProvider");
var react_2 = require("swiper/react");
require("swiper/swiper.min.css");
var swiper_1 = require("swiper");
var ClassNames_1 = require("../../../data/ClassNames");
var Slide_1 = require("../../organisms/Slide/Slide");
var SlideProgressProvider_2 = require("../../providers/SlideProgressProvider/SlideProgressProvider");
var StepListProvider_1 = require("../../providers/StepListProvider/StepListProvider");
var useGetStepList_1 = require("../../../hooks/useGetStepList");
var RunSeekProvider_1 = require("../../providers/RunSeekProvider/RunSeekProvider");
var useScalable_1 = require("../../../hooks/useScalable");
var styled_components_1 = __importDefault(require("styled-components"));
var SIZE_1 = require("../../../data/SIZE");
var Frame_1 = require("../../atoms/Frame/Frame");
var Wrapper = styled_components_1.default.div.attrs(function (_a) {
    var scale = _a.scale;
    return ({
        style: {
            transform: "scale(".concat(scale, ")")
        }
    });
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  transform-origin: left top;\n  position: relative;\n  padding-top: ", "px;\n  & .swiper, & .swiper-wrapper {\n    position: static;\n  }\n  & .swiper, & .swiper-wrapper, & .swiper-slide {\n    width: ", "px;\n    height: ", "px;\n    margin: 0;\n  }\n"], ["\n  transform-origin: left top;\n  position: relative;\n  padding-top: ", "px;\n  & .swiper, & .swiper-wrapper {\n    position: static;\n  }\n  & .swiper, & .swiper-wrapper, & .swiper-slide {\n    width: ", "px;\n    height: ", "px;\n    margin: 0;\n  }\n"])), SIZE_1.SIZE.HEAD_H, SIZE_1.SIZE.W, SIZE_1.SIZE.H);
var FrameWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n"])));
var Main = function (_a) {
    var _b = (0, react_1.useState)(0), activeIndex = _b[0], setActiveIndex = _b[1];
    var setSlideProgress = (0, react_1.useContext)(SlideProgressProvider_2.SlideProgressContext).setSlideProgress;
    var setStepList = (0, useGetStepList_1.useGetStepList)().setStepList;
    // スライドが変わったとき諸々の進捗を初期化
    (0, react_1.useEffect)(function () {
        setSlideProgress(activeIndex);
        setStepList({ type: "INIT", slideProgress: activeIndex });
    }, [activeIndex]);
    var scale = (0, useScalable_1.useScalable)();
    return (react_1.default.createElement(Wrapper, { scale: scale },
        react_1.default.createElement(react_2.Swiper, { allowTouchMove: false, speed: 1, modules: [swiper_1.Navigation, swiper_1.Pagination, swiper_1.Mousewheel, swiper_1.Keyboard], className: "mySwiper", navigation: {
                prevEl: "#".concat(ClassNames_1.classNames.arrowPrev),
                nextEl: "#".concat(ClassNames_1.classNames.arrowNext)
            }, pagination: {
                el: "#".concat(ClassNames_1.classNames.paginate),
                clickable: true
            }, initialSlide: activeIndex, onInit: function (_a) {
                var activeIndex = _a.activeIndex;
                setActiveIndex(activeIndex);
            }, onSlideChange: function (_a) {
                var activeIndex = _a.activeIndex;
                setActiveIndex(activeIndex);
            } }, StepsFactory_1.StepsFactory.slides.map(function (x) {
            return (react_1.default.createElement(react_2.SwiperSlide, { key: x }, x === activeIndex && react_1.default.createElement(Slide_1.Slide, null)));
        })),
        react_1.default.createElement(FrameWrapper, null,
            react_1.default.createElement(Frame_1.Frame, { unitName: "unit22", unitTitle: "\u307B\u3052\u307B\u3052" })),
        react_1.default.createElement(ControlPanel_1.ControlPanel, null)));
};
var Lecture = function (_a) {
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(SlideProgressProvider_1.SlideProgressProvider, null,
            react_1.default.createElement(StepListProvider_1.StepListProvider, null,
                react_1.default.createElement(PlayProvider_1.PlayProvider, null,
                    react_1.default.createElement(RunSeekProvider_1.RunSeekProvider, null,
                        react_1.default.createElement(Main, null))))));
};
exports.Lecture = Lecture;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Lecture.js.map