import React, { FC, ReactElement, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { ArrowBtn } from "../ArrowBtn/ArrowBtn";

export interface SliderProps {
  slides: ReactElement[];
}

export const Slider: FC<SliderProps> = ({
  slides
}) => {

  const idPrev = "button_prev";
  const idNext = "button_next";

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Swiper
        pagination={ true }
        allowTouchMove={ false }
        speed={ 1 } // スライドエフェクトを止める
        modules={ [Navigation, Pagination, Mousewheel, Keyboard] }
        className="mySwiper"
        navigation={ {
          prevEl: `#${ idPrev }`,
          nextEl: `#${ idNext }`
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
      <ArrowBtn id={ idPrev } dir="prev" />
      <ArrowBtn id={ idNext } dir="next" />
    </>
  );
};
