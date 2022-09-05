import React from "react";
import styled from "styled-components";
export const MINI_BUTTON_MUTATIONS = {
    PREVIOUS_ON: "lecture_button_previous_on.png",
    PREVIOUS_OFF: "lecture_button_previous_off.png",
    AGAIN_ON: "lecture_button_again_on.png",
    AGAIN_OFF: "lecture_button_again_off.png",
    NEXT_ON: "lecture_button_next_on.png",
    NEXT_OFF: "lecture_button_next_off.png",
    PREV_ON: "lecture_button_previous_on.png",
    PREV_OFF: "lecture_button_previous_off.png",
    PLAY_ON: "lecture_button_play_on.png",
    PLAY_OFF: "lecture_button_play_off.png"
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
export const MiniBtn = ({ mutation, caption, onClick = () => { } }) => {
    return React.createElement(Main, Object.assign({ role: "button" }, { mutation, caption, onClick }));
};
//# sourceMappingURL=MiniBtn.js.map