import React, { FC } from "react";
import { MiniBtn, MINI_BUTTON_MUTATIONS } from "../../atoms/MiniBtn/MiniBtn";

export interface PlayBtnProps {
  isPlay: boolean;
  onClick?: () => void;
}

export const PlayBtn: FC<PlayBtnProps> = ({
 isPlay,
 onClick = () => {}
}) => {
  return (
    <>
      <link rel="preload" href={ MINI_BUTTON_MUTATIONS.PLAY_OFF } as="image" />
      <link rel="preload" href={ MINI_BUTTON_MUTATIONS.PLAY_ON } as="image" />
      <MiniBtn
        onClick={ onClick }
        mutation={
          isPlay
            ? MINI_BUTTON_MUTATIONS.PLAY_OFF
            : MINI_BUTTON_MUTATIONS.PLAY_ON
        }
      />
    </>
  );
};
