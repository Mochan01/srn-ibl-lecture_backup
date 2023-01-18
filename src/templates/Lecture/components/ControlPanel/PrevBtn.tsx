import { MiniBtn, MiniBtnProps } from "./MiniBtn";
import React, { FC, useMemo, useContext } from "react";
import {
  GetDataProviderContext,
  GlobalStateContext,
  GlobalDispatchContext,
} from "../../../../stores/providers";

export interface PrevBtnProps extends Pick<MiniBtnProps, "className"> {
  onLeave: () => void;
}

export const PrevBtn: FC<PrevBtnProps> = ({ onLeave, ...props }) => {
  const { progress } = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  const getData = useContext(GetDataProviderContext);
  const isLeave = useMemo(
    () => !getData(progress.slide - 1).length,
    [progress.slide]
  );

  return (
    <MiniBtn
      {...props}
      caption="前ページ"
      variant="prevOn"
      hoverVariant="prevOff"
      onClick={() => {
        if (isLeave) {
          onLeave();
          return;
        }
        dispatch({
          type: "progress",
          val: { slide: progress.slide - 1, step: 1 },
        });
      }}
    />
  );
};
