import React, { FC, useState, useContext } from "react";
import { css } from "styled-components";
import { SeekBarTouchable } from "./SeekBarTouchable";
import { SeekBarUntouchable } from "./SeekBarUntouchable";
import { GlobalDispatchContext } from "../../../../stores/providers/GlobalStateProvider";

export interface SeekBarProps {
  className?: string;
}

/**
 * シークバー
 */
export const SeekBar: FC<SeekBarProps> = (props) => {
  const [isPointerDown, setIsPointerDown] = useState(false);
  const dispatch = useContext(GlobalDispatchContext);

  const onPointerDown = () => {
    setIsPointerDown(true);
    dispatch({ type: "isPlaying", val: false });
  };

  const onPointerUp = () => {
    setIsPointerDown(false);
    dispatch({ type: "isPlaying", val: true });
  };

  return (
    <div {...props} css="position: relative;">
      <SeekBarUntouchable
        css={css`
          opacity: ${isPointerDown ? 0 : 1};
        `}
      />
      <div {...{ onPointerDown, onPointerUp }}>
        <SeekBarTouchable
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            opacity: ${isPointerDown ? 1 : 0};
          `}
        />
      </div>
    </div>
  );
};
