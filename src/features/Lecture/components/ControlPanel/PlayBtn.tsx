import React, { FC } from "react";
import { MiniBtn } from "./MiniBtn";

export interface PlayBtnProps {
  isPlay?: boolean;
  onClick?: () => void;
}

export const PlayBtn: FC<PlayBtnProps> = ({ isPlay = false, onClick }) => {
  return (
    <MiniBtn
      {...{ onClick }}
      caption={!isPlay ? "再生" : "一時停止"}
      variant={!isPlay ? "playOn" : "pauseOn"}
      hoverVariant={!isPlay ? "playOff" : "pauseOff"}
    />
  );
};
