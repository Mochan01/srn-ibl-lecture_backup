import React, { FC, ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export interface SliderProps {
  slides: ReactElement[];
}

export const Slider: FC<SliderProps> = ({
  slides
}) => {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        { slides.map((x, i) => <SwiperSlide key={ i }>{ x }</SwiperSlide>) }
      </Swiper>
    </>
  );
};
