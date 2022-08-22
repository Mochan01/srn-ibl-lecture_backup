import React, { FC, ReactElement, useRef } from "react";
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

  return (
    <>
      <Swiper
        pagination={ true }
        mousewheel={ true } // デバッグ用
        allowTouchMove={ false }
        speed={ 1 } // スライドエフェクトを止める
        modules={ [Navigation, Pagination, Mousewheel, Keyboard] }
        className="mySwiper"
        navigation={ {
          prevEl: `#${ idPrev }`,
          nextEl: `#${ idNext }`
        } }
      >
        { slides.map((x, i) => <SwiperSlide key={ i }>{ x }</SwiperSlide>) }
      </Swiper>
      <ArrowBtn id={ idPrev } dir="prev" />
      <ArrowBtn id={ idNext } dir="next" />
    </>
  );
};
