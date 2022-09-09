import React, { useState, useEffect } from "react";
import { Timer } from "../Timer/Timer";
import { useNarration } from "../../../hooks/useNarration";
/**
 * 音声があった場合、音声を読み込んだ後に、タイマーを発動する
 * 音声がなかった場合、即時にタイマーを発動する
 * @param param0
 * @returns
 */
export const ProgressionTrigger = ({ onEnd, duration, onLoad = () => { }, onUnMount = () => { }, sound }) => {
    const [isLoad, setIsLoad] = useState(!sound);
    useNarration(sound, () => {
        setIsLoad(true);
        onLoad();
    });
    useEffect(() => onUnMount, []);
    return isLoad && React.createElement(Timer, Object.assign({}, { duration, onEnd }));
};
//# sourceMappingURL=ProgressionTrigger.js.map