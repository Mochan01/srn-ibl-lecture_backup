import React, { FC } from "react";
import { SeekBar } from "../SeekBar";
import { ControlButtons } from "../ControlButtons";
import { SlideTransitionsData } from "../../../../types";
// import { useGenerateDisableKey } from "../../hooks";

export interface ControlPanelProps {
  onLectureLeave: (key: "begin" | "end") => void;
  slideTransitionsData: SlideTransitionsData;
  className?: string;
}

/**
 * コントロールパネル
 */
export const ControlPanel: FC<ControlPanelProps> = ({
  onLectureLeave,
  slideTransitionsData,
  className,
}) => {
  // 220306 仕様の考慮ミス。非活性化する機能を一旦停止。
  // const disableKey = useGenerateDisableKey();
  const disableKey = "none";
  return (
    <div {...{ className }}>
      <SeekBar isActive={disableKey === "none"} />
      <ControlButtons
        disableKey={disableKey}
        {...{ onLectureLeave, slideTransitionsData }}
      />
    </div>
  );
};
