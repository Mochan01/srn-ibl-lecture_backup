import React, { FC, useState } from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { type Swiper as SwiperRef } from "swiper";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import styled from "styled-components";


// TODO:画面実装時に変更する
export const buttonColor = "orange" as const;
export const isActiveColor = "yellow" as const;
export const spaceBetween = 32 as const;
export const duration = 250 as const;

export interface PartsSelectSliderProps {
  images: string[];
  onSelect: (index: number) => void;
  selectIndex: number;
  className?: string;
}
export const Main = styled(Swiper)`
  .swiper-wrapper {
  width: 100%;
  height: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  }

  .swiper-slide img {
  display: block;
  width: 200px;
  height: 200px;
  object-fit: cover;
}
.swiper-button-next {
  color: ${buttonColor};
}
.swiper-button-prev {
  color: ${buttonColor};
}
`;
const SImage = styled.img`
  
`;
/**
 * 特別レクチャー(衛生組み立て画面）のパーツセレクト部分のスライダー
 */
export const PartsSelectSlider: FC<PartsSelectSliderProps> = ({selectIndex, images, onSelect}) => {
  const [swiperObject, onSwiper] = useState<SwiperRef>();
  const [activeIndex, setActiveIndex] = useState(0);
  const onSlideChange = (swiper: SwiperRef) =>{
    onSelect(swiper.realIndex);
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div css={"width: 1000px"}>
    <Main 
     modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={spaceBetween}
      slidesPerView={4}
      centeredSlides={true}
      initialSlide={selectIndex}
      loop={true}
      loopedSlides={images.length}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={onSwiper}
      onSlideChange={onSlideChange}
      speed={duration}
    >
      {images.map((image, i) => 
      <SwiperSlide key={i}><SImage src={image} css={activeIndex === i ? `border: solid 5px ${isActiveColor}`: ""}/></SwiperSlide>
      )}
    </Main>
    </div>
  );
};

