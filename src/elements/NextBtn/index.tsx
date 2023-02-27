import React, { FC, useEffect, useMemo } from "react";
import { useTimer } from "use-timer";
import { MiniBtn, MiniBtnProps } from "../MiniBtn";

export interface NextBtnProps
  extends Pick<MiniBtnProps, "className" | "isActive"> {
  onClick: () => void;
  condition: "isNormal" | "isBlink" | "isLeave";
}

export const NextBtn: FC<NextBtnProps> = ({
  onClick,
  condition,
  isActive,
  ...props
}) => {
  const { time, start, reset } = useTimer();
  useEffect(
    () => (condition !== "isNormal" ? start() : reset()),
    [start, reset, condition]
  );

  const variant = useMemo(
    () =>
      condition !== "isNormal"
        ? time % 2 === 0
          ? "flashing1"
          : "flashing2"
        : "nextOn",
    [condition, time]
  );

  return (
    <MiniBtn
      {...props}
      {...{ variant, isActive }}
      onClick={() => {
        onClick();
      }}
      caption={condition === "isLeave" ? "レクチャーを終了" : "次ページ"}
      hoverVariant="nextOff"
    />
  );
};
