import React, { FC } from "react";
import styled from "styled-components";
const ImageLecture = new URL("../../../assets/prod/lecture_panel_answer.png", import.meta.url).toString();

export const SPEED_BUTTON_MUTATIONS = {
  /* lecture_button_speed_1.5.png */
  LEVEL1: "0 -3124px",
  /* lecture_button_speed_1.png */
  LEVEL2: "0 -3188px",
  /* lecture_button_speed_2.png */
  LEVEL3: "0 -3252px"
} as const;

export interface SpeedBtnProps {
  mutation: typeof SPEED_BUTTON_MUTATIONS[keyof typeof SPEED_BUTTON_MUTATIONS];
  onClick?: () => void;
}

interface MainProps {
  mutation: SpeedBtnProps["mutation"];
  caption: string;
}

const TEXT_H = 14;
const Main = styled.div<MainProps>`
  background-image: url(${ ImageLecture });
  background-position: ${ ({ mutation }) => mutation };
  background-repeat: no-repeat;
	width:180px;
	height:60px;
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

export const SpeedBtn: FC<SpeedBtnProps> = ({
 mutation,
 onClick = () => {}
}) => {
  return <Main caption="速度 × 1" role="button" { ...{ mutation, onClick } } />;
};
