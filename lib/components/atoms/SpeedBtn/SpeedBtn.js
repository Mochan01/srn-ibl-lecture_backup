import React from "react";
import styled from "styled-components";
export const SPEED_BUTTON_MUTATIONS = {
    LEVEL1: new URL("../../../assets/prod/lecture_button_speed_1.png", import.meta.url).toString(),
    LEVEL2: new URL("../../../assets/prod/lecture_button_speed_1.5.png", import.meta.url).toString(),
    LEVEL3: new URL("../../../assets/prod/lecture_button_speed_2.png", import.meta.url).toString(),
};
const TEXT_H = 14;
const Main = styled.div `
  background-image: url(${({ mutation }) => mutation});
  background-size: contain;
  background-repeat: no-repeat;
  width: 140px;
  height: 47px;
  cursor: pointer;
  position: relative;
  &:before {
    content: "${({ caption }) => caption}";
    position: absolute;
    bottom: -${TEXT_H + 4}px;
    left: 0;
    right: 0;
    text-align: center;
    line-height: 1;
    white-space: nowrap;
    font-size: ${TEXT_H}px;
    height:  ${TEXT_H}px;
    color: #fff;
  }
`;
export const SpeedBtn = ({ mutation, onClick = () => { } }) => {
    return (React.createElement(Main, Object.assign({ caption: "\u901F\u5EA6 \u00D7 1", role: "button" }, { mutation, onClick })));
};
//# sourceMappingURL=SpeedBtn.js.map