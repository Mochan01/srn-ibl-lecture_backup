import React, { FC, useContext, useEffect, useState } from "react";
import { StepsFactory } from "../../../factories/StepsFactory";
import { ControlPanel } from "../../organisms/ControlPanel/ControlPanel";
import { SlideProgressProvider } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { PlayProvider } from "../../providers/PlayProvider/PlayProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { classNames } from "../../../data/ClassNames";
import { Slide } from "../../organisms/Slide/Slide";
import { SlideProgressContext } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { StepListProvider } from "../../providers/StepListProvider/StepListProvider";
import { useGetStepList } from "../../../hooks/useGetStepList";
import { RunSeekProvider } from "../../providers/RunSeekProvider/RunSeekProvider";

const Main: FC = ({
}) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const { setSlideProgress } = useContext(SlideProgressContext);
  const { setStepList } = useGetStepList();

  // スライドが変わったとき諸々の進捗を初期化
  useEffect(() => {
    setSlideProgress(activeIndex);
    setStepList({ type: "INIT", slideProgress: activeIndex });
  }, [activeIndex]);

  return <>
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
    <ControlPanel />
  </>;
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
