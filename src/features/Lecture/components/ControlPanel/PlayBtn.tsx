import React, { FC } from "react";
import { MiniBtn, MiniBtnProps } from "./MiniBtn";

export interface PlayBtnProps
  extends Pick<MiniBtnProps, "onClick" | "className"> {
  isPlay?: boolean;
}

export const PlayBtn: FC<PlayBtnProps> = ({ isPlay = false, ...props }) => {
  return (
    <MiniBtn
      {...props}
      caption={!isPlay ? "再生" : "一時停止"}
      variant={!isPlay ? "playOn" : "pauseOn"}
      hoverVariant={!isPlay ? "playOff" : "pauseOff"}
    />
  );
};
