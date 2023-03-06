import React, { FC } from "react";
import { SeekBar } from "../SeekBar";
import { ControlButtons } from "../ControlButtons";
// import { useGenerateDisableKey } from "../../hooks";

export interface ControlBarProps {
  onLectureLeave: (key: "begin" | "end") => void;
  className?: string;
}

/**
 * コントロールパネル
 */
export const ControlPanel: FC<ControlBarProps> = ({
  onLectureLeave,
  className,
}) => {
  // 220306 仕様の考慮ミス。非活性化する機能を一旦停止。
  // const disableKey = useGenerateDisableKey();
  const disableKey = "none";
  return (
    <div {...{ className }}>
      <SeekBar isActive={disableKey === "none"} />
      <ControlButtons disableKey={disableKey} {...{ onLectureLeave }} />
    </div>
  );
};
