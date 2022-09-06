import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { SkipBtn } from "../../atoms/SkipBtn/SkipBtn";
import { TitleBase } from "../../atoms/TitleBase/TitleBase";
import { useScalable } from "../../../hooks/useScalable";
import { StepsFactory } from "../../../factories/StepsFactory";
import { Narration } from "../../providers/Narration/Narration";
import { Timer } from "../../providers/Timer/Timer";
import { CloseBtn } from "../../atoms/CloseBtn/CloseBtn";
const Main = styled.div.attrs(({ scale }) => ({
    style: {
        transform: `scale(${scale})`
    }
})) `
  transform-origin: left top;
  display: grid;
  grid-template-columns: 914px 236px;
  grid-template-rows: 202px 332px 90px 456px;
`;
export const Title = ({ onClickSkip = () => { }, onClickClose = () => { } }) => {
    const scale = useScalable();
    const initStep = useMemo(() => StepsFactory.getCurrentStepData(0, 0), []);
    const [step, setStep] = useState(initStep);
    const onEnd = () => {
        const next = StepsFactory.getCurrentStepData(0, step.stepProgress + 1);
        // 終わり
        if (!next) {
            onClickSkip();
            return;
        }
        setStep(next);
    };
    return React.createElement(React.Fragment, null,
        React.createElement(Narration, { key: "narration" + step.stepProgress, sound: step.sound }),
        React.createElement(Timer, { key: "timer" + step.stepProgress, duration: step.duration, onEnd: onEnd }),
        React.createElement(Main, { scale: scale },
            React.createElement("div", { style: {
                    gridColumn: "1 / 2",
                    gridRow: "2 / 3",
                    alignSelf: "end",
                    justifySelf: "end"
                } },
                React.createElement(TitleBase, { unitName: "\u30C0\u30DF\u30FC\u30C6\u30AD\u30B9\u30C8", unitTitle: "\u30C0\u30DF\u30FC\u30C6\u30AD\u30B9\u30C8\u30C0\u30DF\u30FC\u30C6\u30AD\u30B9\u30C8" })),
            React.createElement("div", { style: {
                    gridColumn: "1 / 2",
                    gridRow: "3 / 4",
                    alignSelf: "end",
                    justifySelf: "end"
                } },
                React.createElement(SkipBtn, { onClick: onClickSkip })),
            React.createElement("img", { style: {
                    gridColumn: "1 / 3",
                    gridRow: "4 / 5",
                    alignSelf: "end",
                    justifySelf: "end"
                }, src: new URL("../../../assets/lecture_title_offer.png", import.meta.url).toString() }),
            React.createElement("div", { style: {
                    gridColumn: "2 / 3",
                    gridRow: "1 / 2",
                    justifySelf: "end",
                    marginTop: 16
                } },
                React.createElement(CloseBtn, { onClick: onClickClose }))));
};
//# sourceMappingURL=Title.js.map