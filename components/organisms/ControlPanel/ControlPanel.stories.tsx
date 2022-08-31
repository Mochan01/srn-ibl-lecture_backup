import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { StepsFactoryProvider } from "../../providers/StepsFactoryProvider/StepsFactoryProvider";
import { SlideProgressProvider } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { StepsProgressProvider } from "../../providers/StepsProgressProvider/StepsProgressProvider";
import { PlayProvider } from "../../providers/PlayProvider/PlayProvider";
import { ControlPanel, ControlPanelProps } from "./ControlPanel";
import { StepsFactory } from "../../../factories/StepsFactory";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { classNames } from "../../../data/ClassNames";

export default {
  title: "organisms/ControlPanel",
  component: ControlPanel
} as Meta;

const Template: Story<ControlPanelProps> = (args) => {

  const stepsFactory = new StepsFactory();

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
    <StepsProgressProvider>
      <SlideProgressProvider>
        <StepsFactoryProvider stepsFactory={ stepsFactory }>
          <PlayProvider>
            <ControlPanel {...args} />
          </PlayProvider>
        </StepsFactoryProvider>
      </SlideProgressProvider>
    </StepsProgressProvider>
  </>;
};

export const Sample: { args: ControlPanelProps } = Template.bind({});
Sample.args = {
  stepsFactory: new StepsFactory(),
  progress: {
    slide: 0,
    step: 0
  }
};
