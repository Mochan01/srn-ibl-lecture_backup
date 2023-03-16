import React, { FC } from "react";
import { MiniBtn, MiniBtnProps } from "../MiniBtn";

export interface ReplayBtnProps
  extends Pick<MiniBtnProps, "className" | "isActive"> {
  onClick: () => void;
}

export const ReplayBtn: FC<ReplayBtnProps> = ({
  onClick,
  isActive,
  ...props
}) => {
  return (
    <MiniBtn
      {...props}
      onClick={() => {
        onClick();
      }}
      variant="againOn"
      hoverVariant="againOff"
      isActive={isActive}
    />
  );
};
