import React, { FC } from "react";
import { MiniBtn, MiniBtnProps } from "../MiniBtn";

export interface PlayBtnProps
  extends Pick<MiniBtnProps, "className" | "isActive"> {
  isPlaying: boolean;
  onClick: () => void;
}

/**
 * 再生ボタン
 * @param props
 * @returns
 */
export const PlayBtn: FC<PlayBtnProps> = ({
  isPlaying,
  isActive,
  onClick,
  ...props
}) => {
  return (
    <MiniBtn
      {...props}
      onClick={() => {
        onClick();
      }}
      caption={!isPlaying ? "再生" : "一時停止"}
      variant={!isPlaying ? "playOn" : "pauseOn"}
      hoverVariant={!isPlaying ? "playOff" : "pauseOff"}
      isActive={isActive}
    />
  );
};
