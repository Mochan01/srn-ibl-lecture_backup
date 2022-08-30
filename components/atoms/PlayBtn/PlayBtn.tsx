import React, { FC } from "react";
import styled from "styled-components";

export interface PlayBtnProps {
  isPlay: boolean;
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

export const PlayBtn: FC<PlayBtnProps> = ({
 isPlay,
 onClick = () => {}
}) => {
  return (
    <>
      <Main
        role="button"
        onClick={ onClick }
        image={ isPlay ? "lecture_button_play_off.png" : "lecture_button_play_on.png" }
      />
    </>
  );
};
