import React from "react";
import styled from "styled-components";
export const MINI_BUTTON_MUTATIONS = {
    AGAIN_ON: new URL("../../../assets/prod/lecture_button_again_on.png", import.meta.url).toString(),
    AGAIN_OFF: new URL("../../../assets/prod/lecture_button_again_off.png", import.meta.url).toString(),
    NEXT_ON: new URL("../../../assets/prod/lecture_button_next_on.png", import.meta.url).toString(),
    NEXT_OFF: new URL("../../../assets/prod/lecture_button_next_off.png", import.meta.url).toString(),
    PREV_ON: new URL("../../../assets/prod/lecture_button_previous_on.png", import.meta.url).toString(),
    PREV_OFF: new URL("../../../assets/prod/lecture_button_previous_off.png", import.meta.url).toString(),
    PLAY_ON: new URL("../../../assets/prod/lecture_button_play_on.png", import.meta.url).toString(),
    PLAY_OFF: new URL("../../../assets/prod/lecture_button_play_off.png", import.meta.url).toString(),
    PAUSE_ON: new URL("../../../assets/prod/lecture_button_stop_on.png", import.meta.url).toString(),
    PAUSE_OFF: new URL("../../../assets/prod/lecture_button_stop_off.png", import.meta.url).toString(),
    LECTURE_END_ON: new URL("../../../assets/prod/lecture_button_end_on.png", import.meta.url).toString(),
    LECTURE_END_OFF: new URL("../../../assets/prod/lecture_button_end_off.png", import.meta.url).toString()
};
const TEXT_H = 14;
const Main = styled.div `
  background-image: url(${({ mutation }) => mutation});
  background-size: contain;
  background-repeat: no-repeat;
  width: 80px;
  height: 47px;
  cursor: pointer;
  position: relative;
  &:before {
    content: "${({ caption }) => caption}";
    position: absolute;
    bottom: -${TEXT_H + 2}px;
    left: 0;
    right: 0;
    text-align: center;
    line-height: 1;
    white-space: nowrap;
    font-size: ${TEXT_H}px;
    height:  ${TEXT_H}px;
    color: #fff;
    pointer-events: none;
  }
  &:hover {
    background-image: url(${({ hoverMutation }) => hoverMutation});
  }
`;
export const MiniBtn = (props) => {
    return React.createElement(Main, Object.assign({ role: "button" }, props));
};
//# sourceMappingURL=MiniBtn.js.map