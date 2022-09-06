import React, { useContext, useEffect, useState } from "react";
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
import { RunSeekContext, RunSeekProvider } from "../../providers/RunSeekProvider/RunSeekProvider";
import { useScalable } from "../../../hooks/useScalable";
import styled from "styled-components";
import { SIZE } from "../../../data/SIZE";
import { Frame } from "../../atoms/Frame/Frame";
import { CloseBtn } from "../../atoms/CloseBtn/CloseBtn";
import { LectureBase } from "../../atoms/LectureBase/LectureBase";
import { FactoryContext, FactoryProvider } from "../../providers/FactoryProvider/FactoryProvider";
const Container = styled.div.attrs(({ scale }) => ({
    style: {
        transform: `scale(${scale})`
    }
})) `
  transform-origin: left top;
  position: relative;
  display: grid;
  grid-template-columns: ${SIZE.W}px 184px;
  grid-template-rows: auto 1fr 1fr;
  & .swiper, & .swiper-wrapper {
    position: static;
  }
  & .swiper, & .swiper-wrapper, & .swiper-slide {
    width: ${SIZE.W}px;
    height: ${SIZE.H}px;
    margin: 0;
  }
`;
const Wrapper = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`;
const Main = ({ onClickClose = () => { } }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { setStepList } = useGetStepList();
    const { setSlideProgress } = useContext(SlideProgressContext);
    const { setIsRunSeek } = useContext(RunSeekContext);
    const factory = useContext(FactoryContext);
    // スライドが変わったとき諸々の進捗を初期化
    useEffect(() => {
        setSlideProgress(activeIndex);
        const stepList = [factory.getCurrentStepData(activeIndex, 0)];
        setStepList({ type: "UPDATE", stepList });
        setIsRunSeek(true);
    }, [activeIndex]);
    const scale = useScalable();
    return (React.createElement(Container, { scale: scale },
        React.createElement("div", { style: {
                gridColumn: "1 / 2",
                gridRow: "1 / 4",
                paddingTop: SIZE.HEAD_H
            } },
            React.createElement(Wrapper, null,
                React.createElement(LectureBase, null)),
            React.createElement(Swiper, { allowTouchMove: false, speed: 1, modules: [Navigation, Pagination, Mousewheel, Keyboard], className: "mySwiper", navigation: {
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
                React.createElement(Frame, { unitName: "unit22", unitTitle: "\u307B\u3052\u307B\u3052" })),
            React.createElement(ControlPanel, null)),
        React.createElement("div", { style: {
                gridColumn: 2 / 3,
                gridRow: 1 / 2,
                justifySelf: "end",
                alignSelf: "end",
                marginTop: 16
            } },
            React.createElement(CloseBtn, { onClick: onClickClose }))));
};
export const Lecture = (props) => {
    return React.createElement(React.Fragment, null,
        React.createElement(FactoryProvider, Object.assign({}, props),
            React.createElement(SlideProgressProvider, null,
                React.createElement(StepListProvider, null,
                    React.createElement(PlayProvider, null,
                        React.createElement(RunSeekProvider, null,
                            React.createElement(Main, Object.assign({}, props))))))));
};
//# sourceMappingURL=Lecture.js.map