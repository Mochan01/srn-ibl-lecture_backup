import React, { FC } from "react";
import styled from "styled-components";

export const MINI_BUTTON_MUTATIONS = {
  PREVIOUS_ON: "lecture_button_previous_on.png",
  PREVIOUS_OFF: "lecture_button_previous_off.png",
  AGAIN_ON: "lecture_button_again_on.png",
  AGAIN_OFF: "lecture_button_again_off.png",
  NEXT_ON: "lecture_button_next_on.png",
  NEXT_OFF: "lecture_button_next_off.png",
  PLAY_ON: "lecture_button_play_on.png",
  PLAY_OFF: "lecture_button_play_off.png"
} as const;

export interface MiniBtnProps {
  mutation: typeof MINI_BUTTON_MUTATIONS[keyof typeof MINI_BUTTON_MUTATIONS];
  onClick?: () => void;
}

interface MainProps {
  image: string;
}

const Main = styled.div<MainProps>`
  background-image: url(${ ({ image }) => image });
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  padding-top: 58.75%;
  cursor: pointer;
`;

export const MiniBtn: FC<MiniBtnProps> = ({
 mutation,
 onClick = () => {}
}) => {
  return (
    <>
      <Main role="button" onClick={ onClick } image={ mutation } />
    </>
  );
};
