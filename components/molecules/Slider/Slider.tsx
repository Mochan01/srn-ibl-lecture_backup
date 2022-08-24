import React, { FC, ReactElement, useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { classNames } from "../../../data/ClassNames";
import { SlideProgressContext } from "../../providers/SlideProgressProvider/SlideProgressProvider";

export interface SliderProps {
  children: ReactElement[];
  initialSlide?: number;
}

export const Slider: FC<SliderProps> = ({
  children,
  initialSlide = 0
}) => {

  const [activeIndex, setActiveIndex] = useState(initialSlide);

  // 進捗の状態管理
  const { slideProgress, setSlideProgress } = useContext(SlideProgressContext);
  useEffect(() => {
    setSlideProgress(activeIndex);
  }, [activeIndex]);

  return (
    <>
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
        { /** activeIndexのスライドのみ描画する */ }
        { children.map((slide, i) => <SwiperSlide key={ i }>
          { i === activeIndex && slide }
        </SwiperSlide>) }
      </Swiper>
    </>
  );
};
