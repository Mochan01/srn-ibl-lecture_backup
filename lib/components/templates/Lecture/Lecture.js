import React, { useContext, useEffect, useState, memo } from "react";
import { ControlPanel } from "../../organisms/ControlPanel/ControlPanel";
import { SlideProgressProvider } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { PlayProvider } from "../../providers/PlayProvider/PlayProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { classNames } from "../../../data/ClassNames";
import { Slide } from "../../organisms/Slide/Slide";
import { SlideProgressContext } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { StepListProvider } from "../../providers/StepListProvider/StepListProvider";
import { useGetStepList } from "../../../hooks/useGetStepList";
import { RunSeekProvider } from "../../providers/RunSeekProvider/RunSeekProvider";
import styled from "styled-components";
import { SIZE } from "../../../data/SIZE";
import { Frame } from "../../atoms/Frame/Frame";
import { CloseBtn } from "../../atoms/CloseBtn/CloseBtn";
import { LectureBase } from "../../atoms/LectureBase/LectureBase";
import { FactoryContext, FactoryProvider } from "../../providers/FactoryProvider/FactoryProvider";
import { IsSlideEndProvider } from "../../providers/IsSlideEndProvider/IsSlideEndProvider";
import { IsStepEndProvider } from "../../providers/IsStepEndProvider/IsStepEndProvider";
import { Cast } from "../../molecules/Cast/Cast";
import { RunSeekContext } from "../../providers/RunSeekProvider/RunSeekProvider";
import { ScaleWrapper } from "../../layouts/ScaleWrapper/ScaleWrapper";
const ImgBg = new URL("../../../assets/prod/lecture_bg.png", import.meta.url).toString();
const Container = styled.div `
  width: 1920px;
  height: 1080px;
  position: relative;
  background-image: url(${ImgBg});
  background-size: contain;
  background-repeat: no-repeat;
  & .swiper, & .swiper-wrapper {
    position: static;
  }
  & .swiper, & .swiper-wrapper, & .swiper-slide {
    width: ${SIZE.W}px;
    height: ${SIZE.H}px;
    margin: 0;
  }
`;
const LectureContents = styled.div `
  padding-top: ${SIZE.HEAD_H}px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: fit-content;
  height: fit-content;
  transform: scale(1.295);
`;
const Wrapper = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`;
const _CloseBtn = styled(CloseBtn) `
  position: absolute;
  top: 20px;
  right: 62px;
`;
const Main = ({ unitName, unitTitle, onClickClose = () => { } }) => {
    // todo: マスターデータの方で最初のプログレス消す
    const [activeIndex, setActiveIndex] = useState(1);
    const { setStepList } = useGetStepList();
    const { setSlideProgress } = useContext(SlideProgressContext);
    const factory = useContext(FactoryContext);
    // スライドが変わったとき諸々の進捗を初期化
    useEffect(() => {
        setSlideProgress(activeIndex);
        const stepList = [factory.getCurrentStepData(activeIndex, 0)];
        setStepList({ type: "UPDATE", stepList });
    }, [activeIndex]);
    return (React.createElement(ScaleWrapper, null,
        React.createElement(Container, null,
            React.createElement(_CloseBtn, { onClick: onClickClose }),
            React.createElement(CastMemo, null),
            React.createElement(LectureContents, null,
                React.createElement(Wrapper, null,
                    React.createElement(LectureBase, null)),
                React.createElement(Swiper, { allowTouchMove: false, speed: 1, modules: [Navigation, Pagination, Mousewheel, Keyboard], className: "mySwiper", onTransitionStart: swiper => {
                        // todo: マスターデータの方で最初のプログレス消す
                        swiper.allowSlidePrev = swiper.activeIndex !== 1;
                    }, navigation: {
                        prevEl: `#${classNames.arrowPrev}`,
                        nextEl: `#${classNames.arrowNext}`
                    }, pagination: {
                        el: `#${classNames.paginate}`,
                        clickable: true
                    }, initialSlide: activeIndex, onInit: ({ activeIndex }) => {
                        setActiveIndex(activeIndex);
                    }, onSlideChange: ({ activeIndex }) => {
                        setActiveIndex(activeIndex);
                    } }, factory.slides.map(x => (React.createElement(SwiperSlide, { key: x }, x === activeIndex && React.createElement(Slide, null))))),
                React.createElement(Wrapper, null,
                    React.createElement(Frame, Object.assign({}, { unitName, unitTitle }))),
                React.createElement(ControlPanel, null)))));
};
/**
 *　先生と生徒
 */
const _Cast = styled(Cast) `
  position: absolute;
  top: 50%;
  right: 74px;
  transform: translateY(-50%);
`;
const CastMemo = memo(({}) => {
    const { currentStep } = useGetStepList();
    const { isRunSeek } = useContext(RunSeekContext);
    return (React.createElement(_Cast, { teacher: isRunSeek ? currentStep.teacher : "animation_1", student: currentStep.student }, currentStep.speech));
});
export const Lecture = (props) => {
    return (React.createElement(FactoryProvider, Object.assign({}, props),
        React.createElement(SlideProgressProvider, null,
            React.createElement(StepListProvider, null,
                React.createElement(PlayProvider, null,
                    React.createElement(RunSeekProvider, null,
                        React.createElement(IsSlideEndProvider, null,
                            React.createElement(IsStepEndProvider, null,
                                React.createElement(Main, Object.assign({}, props))))))))));
};
//# sourceMappingURL=Lecture.js.map