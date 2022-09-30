import React, { FC } from "react";
import { MiniBtn, MINI_BUTTON_MUTATIONS } from "../../atoms/MiniBtn/MiniBtn";

export interface PlayBtnProps {
  isPlay?: boolean;
  onClick?: () => void;
}

export const PlayBtn: FC<PlayBtnProps> = ({
  isPlay = false,
  onClick = () => {}
}) => {
  return (
    <>
      <MiniBtn
        onClick={ onClick }
        caption={ !isPlay ? "再生" : "一時停止" }
        mutation={
          !isPlay
            ? MINI_BUTTON_MUTATIONS.PLAY_ON
            : MINI_BUTTON_MUTATIONS.PAUSE_ON
        }
        hoverMutation={
          !isPlay
            ? MINI_BUTTON_MUTATIONS.PLAY_OFF
            : MINI_BUTTON_MUTATIONS.PAUSE_OFF
        }
      />
    </>
  );
};
