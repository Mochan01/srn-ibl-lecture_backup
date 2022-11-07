import React, { FC, useEffect } from "react";
import { MiniBtn, MiniBtnProps } from "./MiniBtn";
import { useTimer } from "use-timer";

export interface NextBtnProps
  extends Pick<MiniBtnProps, "onClick" | "className"> {
  isBlink?: boolean;
}

export const NextBtn: FC<NextBtnProps> = (props) => {
  const { time, start, reset } = useTimer();

  useEffect(() => {
    props.isBlink ? start() : reset();
  }, [props.isBlink]);

  return (
    <MiniBtn
      {...props}
      caption="次ページ"
      variant={time % 2 === 0 ? "nextOn" : "nextOff"}
      hoverVariant="nextOff"
    />
  );
};
