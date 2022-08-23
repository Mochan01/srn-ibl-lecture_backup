import React, { FC, ReactElement, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { classNames } from "../../../data/ClassNames";

export interface SliderProps {
  slides: ReactElement[];
}

export const Slider: FC<SliderProps> = ({
  slides
}) => {

  const [activeIndex, setActiveIndex] = useState(0);

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
        onInit={ ({ activeIndex }) => {
          setActiveIndex(activeIndex);
        } }
        onSlideChange={ ({ activeIndex }) => {
          setActiveIndex(activeIndex);
        } }
      >
        { /** activeIndexのスライドのみ描画する */ }
        { slides.map((slide, i) => <SwiperSlide key={ i }>
          { i === activeIndex && slide }
        </SwiperSlide>) }
      </Swiper>
    </>
  );
};
