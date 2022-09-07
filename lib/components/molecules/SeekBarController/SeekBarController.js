import React from "react";
import { SeekBar } from "../../atoms/SeekBar/SeekBar";
import { useSeekControl } from "../../../hooks/useSeekControl";
export const SeekBarController = ({ steps, index, onPointerDown = () => { }, onPointerUp = () => { } }) => {
    const { value, setValue, getClosest } = useSeekControl(steps, index, "EDGE");
    return (React.createElement(SeekBar, Object.assign({ onPointerUp: () => onPointerUp(getClosest()) }, { value, setValue, onPointerDown })));
};
//# sourceMappingURL=SeekBarController.js.map