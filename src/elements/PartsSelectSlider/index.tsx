import React, { FC, useState } from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import type { Swiper as SwiperRef } from "swiper";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import styled from "styled-components";

const buttonColor = "#F98A3B" as const;
const isActiveColor = "#FFFF00" as const;
const slidesPerView = 4 as const;
const spaceBetween = 22.666 as const;
const border = 3 as const;
const imageSize = 126 as const;
const duration = 250 as const;

const Main = styled.div`
  width: 680px;
  height: 150px;
  text-align: center;
  padding: 0 11px;
`;

const SSwiperContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SSwiper = styled(Swiper)`
  .swiper-wrapper {
    width: ${(imageSize + spaceBetween + border * 2) * slidesPerView -
    spaceBetween}px;
  }
  .swiper-slide img {
    width: ${imageSize}px;
    height: ${imageSize}px;
  }
`;

const SImage = styled.img<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? "#9bb9c8 " : "#5a7e8f ")};
`;

const SNameArea = styled.div`
  width: 132px;
  height: 24px;
  background-color: #ffffff;
  bottom: 0;
  opacity: 0.6;
  text-align: center;
  letter-spacing: 0px;
  color: #5a5a5a;
  position: absolute;
  font-size: 16px;
  font-family: "UD デジタル 教科書体 N-B";
  line-height: 24px;
`;
// 下に表示するページネーションの棒
const SBar = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 144px;
  height: 3px;
  background-color: gray;
  position: relative;
`;

const SCircle = styled.div`
  background-color: gray;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  top: -3px;
`;

// 選択した画像のindexによって、●を移動する
const SSelectCircle = styled(SCircle).attrs<{ left: number }>(({ left }) => ({
  style: { left: `${left}%` },
}))<{ left: number }>`
  top: -4px;
  width: 12px;
  height: 12px;
  background-color: ${buttonColor};
`;

const SLeftCircle = styled(SCircle)`
  left: 0;
`;
const SRightCircle = styled(SCircle)`
  left: 100%;
`;
const SSwiperPrevButton = styled.div`
  width: 18px;
  height: 40px;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-right: 18px solid ${buttonColor};
`;
const SSwiperNextButton = styled.div`
  width: 18px;
  height: 40px;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 18px solid ${buttonColor};
`;

export interface SliderItem {
  name: string;
  image: string;
}

export interface PartsSelectSliderProps {
  items: SliderItem[];
  onSelect: (index: number) => void;
  selectIndex?: number;
  selectedIndexes: number[];
  className?: string;
}

/**
 * 特別レクチャー(衛生組み立て画面）のパーツセレクト部分のスライダー
 */
export const PartsSelectSlider: FC<PartsSelectSliderProps> = ({
  selectIndex = 0,
  selectedIndexes,
  items,
  onSelect,
}) => {
  const [swiperObject, onSwiper] = useState<SwiperRef>();
  const [activeIndex, setActiveIndex] = useState(selectIndex);

  const onClick = (index: number) => {
    // 画像をクリックした時に枠線を移動
    setActiveIndex(index);
    onSelect(index);
  };

  return (
    <Main>
      <SSwiperContainer>
        <SSwiperPrevButton id="button_prev" />
        <SSwiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          initialSlide={selectIndex}
          loop={true}
          loopedSlides={items.length}
          navigation={{
            // パラメータを設定
            prevEl: "#button_prev",
            nextEl: "#button_next",
          }}
          onSwiper={onSwiper}
          speed={duration}
        >
          {items.map((item, i) => (
            <SwiperSlide key={item.name} onClick={() => onClick(i)}>
              <SImage
                selected={selectedIndexes.includes(i)}
                src={item.image}
                css={
                  activeIndex === i
                    ? `border: solid ${border}px ${isActiveColor}`
                    : `padding: ${border}px`
                }
              />
              <SNameArea>{item.name}</SNameArea>
            </SwiperSlide>
          ))}
        </SSwiper>
        <SSwiperNextButton id="button_next" />
      </SSwiperContainer>
      <div css={"margin-top: 8px"} />
      <SBar>
        <SLeftCircle />
        <SRightCircle />
        <SSelectCircle left={(100 / (items.length - 1)) * activeIndex} />
      </SBar>
    </Main>
  );
};
