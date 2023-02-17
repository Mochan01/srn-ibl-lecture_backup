import React, { FC, useContext } from "react";
import { MiniBtn, MiniBtnProps } from "./MiniBtn";
import { GlobalDispatchContext } from "../../../../features/LectureRoot/providers";
import { useMoveProgress } from "../../../../features/LectureRoot/hooks";

export interface PlayBtnProps extends Pick<MiniBtnProps, "className"> {}

export const ReplayBtn: FC<PlayBtnProps> = (props) => {
  const dispatch = useContext(GlobalDispatchContext);
  const moveProgress = useMoveProgress();
  return (
    <MiniBtn
      {...props}
      onClick={() => {
        moveProgress({ slide: 1, step: 1 });
        dispatch({ type: "timestamp" });
      }}
      caption="もう一度"
      variant="againOn"
      hoverVariant="againOff"
    />
  );
};
