import React, { FC, useContext, useEffect, useState } from "react";
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
import { RunSeekContext, RunSeekProvider } from "../../providers/RunSeekProvider/RunSeekProvider";
import { useScalable } from "../../../hooks/useScalable";
import styled from "styled-components";
import { SIZE } from "../../../data/SIZE";
import { Frame } from "../../atoms/Frame/Frame";

interface WrapperProps {
  scale: number;
}

const Wrapper = styled.div.attrs<WrapperProps>(
  ({ scale }) => ({
    style: {
      transform: `scale(${ scale })`
    }
  })
)<WrapperProps>`
  transform-origin: left top;
  position: relative;
  padding-top: ${ SIZE.HEAD_H }px;
  & .swiper, & .swiper-wrapper {
    position: static;
  }
  & .swiper, & .swiper-wrapper, & .swiper-slide {
    width: ${ SIZE.W }px;
    height: ${ SIZE.H }px;
    margin: 0;
  }
`;

const FrameWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`;

const Main: FC = ({
}) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const { setSlideProgress } = useContext(SlideProgressContext);
  const { setStepList } = useGetStepList();
  const { setIsRunSeek } = useContext(RunSeekContext);

  // スライドが変わったとき諸々の進捗を初期化
  useEffect(() => {
    setSlideProgress(activeIndex);
    setStepList({ type: "INIT", slideProgress: activeIndex });
    setIsRunSeek(true);
  }, [activeIndex]);

  const scale = useScalable();

  return (
    <Wrapper scale={ scale }>
      <Swiper
        allowTouchMove={ false }
        speed={ 1 } // スライドエフェクトを止める
        modules={ [Navigation, Pagination, Mousewheel, Keyboard] }
        className="mySwiper"
        navigation={ {
          prevEl: `#${ classNames.arrowPrev }`,
          nextEl: `#${ classNames.arrowNext }`
        } }
        pagination={ {
          el: `#${ classNames.paginate }`,
          clickable: true
        } }
        initialSlide={ activeIndex }
        onInit={ ({ activeIndex }) => {
          setActiveIndex(activeIndex);
        } }
        onSlideChange={ ({ activeIndex }) => {
          setActiveIndex(activeIndex);
        } }
      >
        { StepsFactory.slides.map(x => {
            return (
              <SwiperSlide key={ x }>
                { /** activeIndexのスライドのみ描画する */ }
                { x === activeIndex && <Slide  /> }
              </SwiperSlide>
            );
        }) }
      </Swiper>
      <FrameWrapper>
        <Frame unitName="unit22" unitTitle="ほげほげ" />
      </FrameWrapper>
      <ControlPanel />
    </Wrapper>
  );
};

export interface LectureProps {
}

export const Lecture = ({
}) => {
  return <>
    <SlideProgressProvider>
      <StepListProvider>
        <PlayProvider>
          <RunSeekProvider>
            <Main />
          </RunSeekProvider>
        </PlayProvider>
      </StepListProvider>
    </SlideProgressProvider>
</>;
};
