import React from "react";
import { SeekBar } from "../../atoms/SeekBar/SeekBar";
import { useSeekControl } from "../../../hooks/useSeekControl";
export const SeekBarController = ({ points, index, onPointerDown = () => { }, onPointerUp = () => { } }) => {
    const { value, setValue, getClosest } = useSeekControl(points, index, "EDGE");
    return (React.createElement(SeekBar, Object.assign({ onPointerUp: () => {
            const closest = getClosest();
            onPointerUp(points.indexOf(closest));
        } }, { value, setValue, onPointerDown })));
};
//# sourceMappingURL=SeekBarController.js.map