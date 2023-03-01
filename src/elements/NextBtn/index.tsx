import React, { FC, useEffect, useMemo } from "react";
import { useTimer } from "use-timer";
import { MiniBtn, MiniBtnProps } from "../MiniBtn";

export interface NextBtnProps
  extends Pick<MiniBtnProps, "className" | "isActive"> {
  onClick: () => void;
  isBlink: boolean;
  isLeave: boolean;
}

export const NextBtn: FC<NextBtnProps> = ({
  onClick,
  isBlink,
  isLeave,
  isActive,
  ...props
}) => {
  const { time, start, reset } = useTimer();
  useEffect(() => (isBlink ? start() : reset()), [start, reset, isBlink]);

  const variant = useMemo(
    () => (isBlink ? (time % 2 === 0 ? "flashing1" : "flashing2") : "nextOn"),
    [isBlink, time]
  );

  return (
    <MiniBtn
      {...props}
      {...{ variant, isActive }}
      onClick={() => {
        onClick();
      }}
      caption={isLeave ? "レクチャーを終了" : "次ページ"}
      hoverVariant="nextOff"
    />
  );
};
