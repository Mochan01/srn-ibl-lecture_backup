import React, { FC } from "react";
import styled from "styled-components";

export const MINI_BUTTON_MUTATIONS = {
  AGAIN_ON: new URL("../../../assets/lecture_button_again_on.png", import.meta.url).toString(),
  AGAIN_OFF: new URL("../../../assets/lecture_button_again_off.png", import.meta.url).toString(),
  NEXT_ON: new URL("../../../assets/lecture_button_next_on.png", import.meta.url).toString(),
  NEXT_OFF: new URL("../../../assets/lecture_button_next_off.png", import.meta.url).toString(),
  PREV_ON: new URL("../../../assets/lecture_button_previous_on.png", import.meta.url).toString(),
  PREV_OFF: new URL("../../../assets/lecture_button_previous_off.png", import.meta.url).toString(),
  PLAY_ON: new URL("../../../assets/lecture_button_play_on.png", import.meta.url).toString(),
  PLAY_OFF: new URL("../../../assets/lecture_button_play_off.png", import.meta.url).toString()
} as const;

export interface MiniBtnProps {
  mutation: typeof MINI_BUTTON_MUTATIONS[keyof typeof MINI_BUTTON_MUTATIONS];
  caption: string;
  onClick?: () => void;
}

const TEXT_H = 14;
const Main = styled.div<MiniBtnProps>`
  background-image: url(${ ({ mutation }) => mutation });
  background-size: contain;
  background-repeat: no-repeat;
  width: 80px;
  height: 47px;
  cursor: pointer;
  position: relative;
  &:before {
    content: "${ ({ caption }) => caption }";
    position: absolute;
    bottom: -${ TEXT_H + 4 }px;
    left: 0;
    right: 0;
    text-align: center;
    line-height: 1;
    white-space: nowrap;
    font-size: ${ TEXT_H }px;
    height:  ${ TEXT_H }px;
    color: #fff;
  }
`;

export const MiniBtn: FC<MiniBtnProps> = ({
 mutation,
 caption,
 onClick = () => {}
}) => {
  return <Main role="button" { ...{ mutation, caption, onClick } } />;
};
