import React, { FC, useContext } from "react";
import { MiniBtn, MiniBtnProps } from "./MiniBtn";
import { GlobalDispatchContext } from "../../../../stores/providers";

export interface PlayBtnProps
  extends Pick<MiniBtnProps, "className"> {}

export const ReplayBtn: FC<PlayBtnProps> = (props) => {
  const dispatch = useContext(GlobalDispatchContext);
  return (
    <MiniBtn
      {...props}
      onClick={() => {
        dispatch({ type: "progress", val: { slide: 1, step: 1 } });
        dispatch({ type: "timestamp" });
      }}
      caption="もう一度"
      variant="againOn"
      hoverVariant="againOff"
    />
  );
};
