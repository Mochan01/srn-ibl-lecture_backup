import React, { FC } from "react";
import { MiniBtn, MiniBtnProps } from "../MiniBtn";

export interface PrevBtnProps
  extends Pick<MiniBtnProps, "className" | "isActive"> {
  onClick: () => void;
}

export const PrevBtn: FC<PrevBtnProps> = ({ onClick, isActive, ...props }) => {
  return (
    <MiniBtn
      {...props}
      caption="前ページ"
      variant="prevOn"
      hoverVariant="prevOff"
      onClick={() => {
        onClick();
      }}
      isActive={isActive}
    />
  );
};
