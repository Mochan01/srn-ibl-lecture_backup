import React, { FC } from "react";
import { SeekBar } from "../SeekBar";
import { ControlButtons } from "../ControlButtons";
import { useGenerateDisableKey } from "../../hooks";

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
  // const disableKey = useGenerateDisableKey();
  const disableKey = "none";

  return (
    <div {...{ className }}>
      <SeekBar isActive={disableKey === "none"} />
      <ControlButtons disableKey={disableKey} {...{ onLectureLeave }} />
    </div>
  );
};
