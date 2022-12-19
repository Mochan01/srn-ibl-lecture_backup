import React, { FC, useContext } from "react";
import { MiniBtn, MiniBtnProps } from "./MiniBtn";
import { GlobalStateContext, GlobalDispatchContext } from "../../../../stores/providers";

export interface PlayBtnProps extends Pick<MiniBtnProps, "className"> {}

/**
 * 再生ボタン
 * @param props 
 * @returns 
 */
export const PlayBtn: FC<PlayBtnProps> = (props) => {
  const { isPlaying } = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  return (
    <MiniBtn
      {...props}
      onClick={() => {
        dispatch({ type: "isPlaying", val: !isPlaying });
        dispatch({ type: "timestamp" });
      }}
      caption={!isPlaying ? "再生" : "一時停止"}
      variant={!isPlaying ? "playOn" : "pauseOn"}
      hoverVariant={!isPlaying ? "playOff" : "pauseOff"}
    />
  );
};
