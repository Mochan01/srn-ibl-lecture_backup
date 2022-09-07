import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { ControlPanelL, ControlPanelLProps } from "./ControlPanelL";
import { classNames } from "../../../data/ClassNames";

export default {
  title: "molecules/ControlPanelL",
  component: ControlPanelL
} as Meta;

const template: Story<ControlPanelLProps> = (args) => {



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
    >
      <SwiperSlide />
      <SwiperSlide />
      <SwiperSlide />
      <SwiperSlide />
      <SwiperSlide />
      <SwiperSlide />
      <SwiperSlide />
      <SwiperSlide />
    </Swiper>
    <ControlPanelL {...args} />
  </>;
};

export const sample: { args: ControlPanelLProps } = template.bind({});
sample.args = {
  id: classNames.paginate
};
