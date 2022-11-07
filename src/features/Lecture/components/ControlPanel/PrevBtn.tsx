import React, { FC } from "react";
import { MiniBtn, MiniBtnProps } from "./MiniBtn";

export interface PrevBtnProps
  extends Pick<MiniBtnProps, "onClick" | "className"> {}

export const PrevBtn: FC<PrevBtnProps> = (props) => {
  return (
    <MiniBtn
      {...props}
      caption="前ページ"
      variant="prevOn"
      hoverVariant="prevOff"
    />
  );
};
