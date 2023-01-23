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
    top:47%;
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;
    border-left: 30px solid ${buttonColor};
  }
  .swiper-button-next:after{
    content: ''
  }
  .swiper-button-prev {
    top:47%;
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;
    border-right: 30px solid ${buttonColor};
  }
  .swiper-button-prev:after{
    content: ''
  }
  `;

const SImage = styled.img`
`;

// 下に表示するページネーションの棒
const SBar = styled.div`
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 200px;
  height: 3px;
  background-color: gray;
  position: relative;
`;

const SCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%; 
  position: absolute; 
  top: -3px;
`;

// 選択した画像のindexによって、●を移動する
const SSelectCircle = styled(SCircle).attrs<{left: number }>(({left}) => ({
  style: { left: `${left}%`,},
})
)<{left: number}>`
  top: -6px;
  width: 15px;
  height: 15px;
  background-color: ${buttonColor}; 
`;

const SLeftCircle = styled(SCircle)`
  background-color: gray; 
  left:0;
`;
const SRightCircle = styled(SCircle)`
  background-color: gray; 
  left:100%;
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
    <div css={"width: 928px"}>
    <Main 
     modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={spaceBetween}
      slidesPerView={4}
      initialSlide={selectIndex}
      loop={true}
      loopedSlides={images.length}
      navigation={true}
      scrollbar={{ draggable: true }}
      onSwiper={onSwiper}
      onSlideChange={onSlideChange}
      speed={duration}
    >
      {images.map((image, i) => 
      <SwiperSlide key={i}><SImage src={image} css={activeIndex === i ? `border: solid 5px ${isActiveColor}`: ""}/></SwiperSlide>
      )}
    </Main>
    <SBar>
      <SLeftCircle/>
      <SRightCircle/>
      <SSelectCircle left={(100 / (images.length -1)) * activeIndex}/>
    </SBar>
    </div>
  );
};

