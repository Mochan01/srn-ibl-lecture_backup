import React, { FC, useContext, useEffect, useState } from "react";
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

interface ContainerProps {
  scale: number;
}

const Container = styled.div.attrs<ContainerProps>(
  ({ scale }) => ({
    style: {
      transform: `scale(${ scale })`
    }
  })
)<ContainerProps>`
  transform-origin: left top;
  position: relative;
  display: grid;
  grid-template-columns: ${ SIZE.W }px 184px;
  grid-template-rows: auto 1fr 1fr;
  & .swiper, & .swiper-wrapper {
    position: static;
  }
  & .swiper, & .swiper-wrapper, & .swiper-slide {
    width: ${ SIZE.W }px;
    height: ${ SIZE.H }px;
    margin: 0;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`;

const Main: FC<LectureProps> = ({
  onClickClose = () => {}
}) => {

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

  return (
    <Container scale={ scale }>
      <div style={ {
        gridColumn: "1 / 2",
        gridRow: "1 / 4",
        paddingTop:  SIZE.HEAD_H
      } }>
        <Wrapper>
          <LectureBase />
        </Wrapper>
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
          { factory.slides.map(x => (
            <SwiperSlide key={ x }>
              { /** activeIndexのスライドのみ描画する */ }
              { x === activeIndex && <Slide  /> }
            </SwiperSlide> )) }
        </Swiper>
        <Wrapper>
          <Frame unitName="unit22" unitTitle="ほげほげ" />
        </Wrapper>
        <ControlPanel />
      </div>
      <div style={ {
        gridColumn: 2 / 3,
        gridRow: 1 / 2,
        justifySelf: "end",
        alignSelf: "end",
        marginTop: 16
      } }>
        <CloseBtn onClick={ onClickClose } />
      </div>
    </Container>
  );
};

export interface LectureProps {
  onClickClose?: () => void;
  data?: object;
}

export const Lecture = (props) => {
  return <>
    <FactoryProvider { ...props }>
      <SlideProgressProvider>
          <StepListProvider>
            <PlayProvider>
              <RunSeekProvider>
                <Main { ...props } />
              </RunSeekProvider>
            </PlayProvider>
          </StepListProvider>
        </SlideProgressProvider>
    </FactoryProvider>
</>;
};
