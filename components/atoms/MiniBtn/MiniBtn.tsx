import React, { FC } from "react";
import styled from "styled-components";
const ImageLecture = new URL("../../../assets/prod/lecture_panel_answer.png", import.meta.url).toString();

export const MINI_BUTTON_MUTATIONS = {
  /* lecture_button_again_on.png */
  AGAIN_ON: "0 -2420px",
  /* lecture_button_again_off.png */
  AGAIN_OFF: "0 -2356px",
  /* lecture_button_next_on.png */
  NEXT_ON: "0 -2804px",
  /* lecture_button_next_off.png */
  NEXT_OFF: "0 -2740px",
  /* lecture_button_previous_on.png */
  PREV_ON: "0 -3060px",
  /* lecture_button_previous_off.png */
  PREV_OFF: "0 -2996px",
  /* lecture_button_play_on.png */
  PLAY_ON: "0 -2932px",
  /* lecture_button_play_off.png */
  PLAY_OFF: "0 -2868px",
  /* lecture_button_stop_on.png */
  PAUSE_ON: "0 -3380px",
  /* lecture_button_stop_off.png */
  PAUSE_OFF: "0 -3316px",
  /* lecture_button_stop_on.png */
  LECTURE_END_ON: "0 -3380px",
  /* lecture_button_stop_off.png */
  LECTURE_END_OFF: "0 -3316px"
} as const;

export interface MiniBtnProps {
  mutation: typeof MINI_BUTTON_MUTATIONS[keyof typeof MINI_BUTTON_MUTATIONS];
  hoverMutation: typeof MINI_BUTTON_MUTATIONS[keyof typeof MINI_BUTTON_MUTATIONS];
  caption: string;
  onClick?: () => void;
}

const Button = styled.div<MiniBtnProps>`
  background-image: url(${ ImageLecture });
  background-position: ${ ({ mutation }) => mutation };
  background-repeat: no-repeat;
  width: 102px;
  height: 60px;
  cursor: pointer;
  position: relative;
  margin-bottom: 4px;
  &:hover {
    background-position: ${ ({ hoverMutation }) => hoverMutation };
  }
`;

const TEXT_H = 14;
const Label = styled.p`
  bottom: -${ TEXT_H + 2 }px;
  left: 0;
  right: 0;
  text-align: center;
  line-height: 1;
  white-space: nowrap;
  font-size: ${ TEXT_H }px;
  height:  ${ TEXT_H }px;
  color: #fff;
`;

export const MiniBtn: FC<MiniBtnProps> = props => {
  return (
    <div role="button">
      <Button { ...props } />
      <Label>{ props.caption }</Label>
    </div>
  );
};
