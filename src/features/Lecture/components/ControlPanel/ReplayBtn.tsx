import React, { FC } from "react";
import { MiniBtn, MiniBtnProps } from "./MiniBtn";

export interface PlayBtnProps
  extends Pick<MiniBtnProps, "onClick" | "className"> {}

export const ReplayBtn: FC<PlayBtnProps> = (props) => {
  return (
    <MiniBtn
      {...props}
      caption="もう一度"
      variant="againOn"
      hoverVariant="againOff"
    />
  );
};
