import React, { useContext, useEffect, useState } from "react";
import { StepsFactory } from "../../../factories/StepsFactory";
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
import { useScalable } from "../../../hooks/useScalable";
import styled from "styled-components";
import { SIZE } from "../../../data/SIZE";
import { Frame } from "../../atoms/Frame/Frame";
const Wrapper = styled.div.attrs(({ scale }) => ({
    style: {
        transform: `scale(${scale})`
    }
})) `
  transform-origin: left top;
  position: relative;
  padding-top: ${SIZE.HEAD_H}px;
  & .swiper, & .swiper-wrapper {
    position: static;
  }
  & .swiper, & .swiper-wrapper, & .swiper-slide {
    width: ${SIZE.W}px;
    height: ${SIZE.H}px;
    margin: 0;
  }
`;
const FrameWrapper = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`;
const Main = ({}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { setSlideProgress } = useContext(SlideProgressContext);
    const { setStepList } = useGetStepList();
    // スライドが変わったとき諸々の進捗を初期化
    useEffect(() => {
        setSlideProgress(activeIndex);
        setStepList({ type: "INIT", slideProgress: activeIndex });
    }, [activeIndex]);
    const scale = useScalable();
    return (React.createElement(Wrapper, { scale: scale },
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
            } }, StepsFactory.slides.map(x => {
            return (React.createElement(SwiperSlide, { key: x }, x === activeIndex && React.createElement(Slide, null)));
        })),
        React.createElement(FrameWrapper, null,
            React.createElement(Frame, { unitName: "unit22", unitTitle: "\u307B\u3052\u307B\u3052" })),
        React.createElement(ControlPanel, null)));
};
export const Lecture = ({}) => {
    return React.createElement(React.Fragment, null,
        React.createElement(SlideProgressProvider, null,
            React.createElement(StepListProvider, null,
                React.createElement(PlayProvider, null,
                    React.createElement(RunSeekProvider, null,
                        React.createElement(Main, null))))));
};
//# sourceMappingURL=Lecture.js.map