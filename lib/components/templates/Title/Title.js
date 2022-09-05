import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { SkipBtn } from "../../atoms/SkipBtn/SkipBtn";
import { TitleBase } from "../../atoms/TitleBase/TitleBase";
import { useScalable } from "../../../hooks/useScalable";
import { Spacer } from "../../providers/Spacer/Spacer";
import { StepsFactory } from "../../../factories/StepsFactory";
import { Narration } from "../../providers/Narration/Narration";
import { Timer } from "../../providers/Timer/Timer";
const Main = styled.div.attrs(({ scale }) => ({
    style: {
        transform: `scale(${scale})`
    }
})) `
  transform-origin: left top;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: fit-content;
`;
export const Title = ({ onOver = () => { } }) => {
    const scale = useScalable();
    const initStep = useMemo(() => StepsFactory.getCurrentStepData(0, 0), []);
    const [step, setStep] = useState(initStep);
    const onEnd = () => {
        const next = StepsFactory.getCurrentStepData(0, step.stepProgress + 1);
        // 終わり
        if (!next) {
            onOver();
            return;
        }
        setStep(next);
    };
    return (React.createElement(Main, { scale: scale },
        React.createElement(Narration, { key: "narration" + step.stepProgress, sound: step.sound }),
        React.createElement(Timer, { key: "timer" + step.stepProgress, duration: step.duration, onEnd: onEnd }),
        React.createElement(TitleBase, { unitName: "\u30C0\u30DF\u30FC\u30C6\u30AD\u30B9\u30C8", unitTitle: "\u30C0\u30DF\u30FC\u30C6\u30AD\u30B9\u30C8\u30C0\u30DF\u30FC\u30C6\u30AD\u30B9\u30C8" }),
        React.createElement(Spacer, { size: 32 }),
        React.createElement(SkipBtn, { onClick: onOver })));
};
//# sourceMappingURL=Title.js.map