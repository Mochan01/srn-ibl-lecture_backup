import React, { FC, useEffect, useMemo } from "react";
import { MiniBtn, MiniBtnProps } from "./MiniBtn";
import { useTimer } from "use-timer";

export interface NextBtnProps
  extends Pick<MiniBtnProps, "onClick" | "className" | "caption"> {
  isBlink?: boolean;
}

export const NextBtn: FC<NextBtnProps> = ({ isBlink, ...props }) => {
  const { time, start, reset } = useTimer();

  useEffect(() => {
    isBlink ? start() : reset();
  }, [isBlink]);

  const variant = useMemo(
    () => (isBlink ? (time % 2 === 0 ? "flashing1" : "flashing2") : "nextOn"),
    [isBlink, time]
  );

  return (
    <MiniBtn
      {...props}
      {...{ variant }}
      hoverVariant="nextOff"
    />
  );
};
