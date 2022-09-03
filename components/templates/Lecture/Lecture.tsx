import React, { FC, useContext, useEffect, useState, memo } from "react";
import { StepsFactory } from "../../../factories/StepsFactory";
import { ControlPanel } from "../../organisms/ControlPanel/ControlPanel";
import { SlideProgressProvider } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { StepsProgressProvider } from "../../providers/StepsProgressProvider/StepsProgressProvider";
import { PlayProvider } from "../../providers/PlayProvider/PlayProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { classNames } from "../../../data/ClassNames";
import { Slide } from "../../organisms/Slide/Slide";
import { SlideProgressContext } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { StepsProgressContext } from "../../providers/StepsProgressProvider/StepsProgressProvider";
import { StepListProvider } from "../../providers/StepListProvider/StepListProvider";

const Main: FC = ({
}) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const { setSlideProgress } = useContext(SlideProgressContext);
  const { setStepsProgress } = useContext(StepsProgressContext);

  // スライドが変わったとき諸々の進捗を初期化
  useEffect(() => {
    setSlideProgress(activeIndex);
    setStepsProgress(0);
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
    <StepsProgressProvider>
      <SlideProgressProvider>
        <StepListProvider>
          <PlayProvider>
            <Main />
          </PlayProvider>
        </StepListProvider>
      </SlideProgressProvider>
    </StepsProgressProvider>
  </>;
};
