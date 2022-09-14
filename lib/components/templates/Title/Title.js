import React, { useMemo, useState, memo } from "react";
import styled from "styled-components";
import { SkipBtn } from "../../atoms/SkipBtn/SkipBtn";
import { TitleBase } from "../../atoms/TitleBase/TitleBase";
import { useScalable } from "../../../hooks/useScalable";
import { StepsFactory } from "../../../factories/StepsFactory";
import { CloseBtn } from "../../atoms/CloseBtn/CloseBtn";
import { ProgressionTrigger } from "../../providers/ProgressionTrigger/ProgressionTrigger";
import { Cast } from "../../molecules/Cast/Cast";
const Main = styled.div.attrs(({ scale }) => ({
    style: {
        transform: `scale(${scale})`
    }
})) `
  transform-origin: left top;
  display: grid;
  width: 1150px;
  grid-template-columns: 914px 236px;
  grid-template-rows: 202px 332px 90px 192px;
  height: 0;
  margin: 0 auto;
  position: relative;
`;
export const Title = ({ unitName, unitTitle, data, onClickSkip = () => { }, onClickClose = () => { } }) => {
    const scale = useScalable(1250);
    const factory = new StepsFactory(data);
    const initStep = useMemo(() => factory.getCurrentStepData(0, 0), []);
    const [step, setStep] = useState(initStep);
    const onEnd = () => {
        const next = factory.getCurrentStepData(0, step.stepProgress + 1);
        // 終わり
        if (!next) {
            onClickSkip();
            return;
        }
        setStep(next);
    };
    const [isPlay, setIsPlay] = useState(false);
    return React.createElement(React.Fragment, null,
        isPlay &&
            React.createElement(ProgressionTrigger, { key: step.stepProgress, sound: step.sound, duration: step.duration, onEnd: onEnd }),
        React.createElement(Main, { scale: scale },
            React.createElement(CastMemo, Object.assign({}, { isPlay, step })),
            React.createElement("div", { style: {
                    gridColumn: "1 / 2",
                    gridRow: "2 / 3",
                    alignSelf: "end",
                    justifySelf: "end"
                } },
                React.createElement(TitleBase, Object.assign({ onClick: () => setIsPlay(true) }, { unitName, unitTitle }))),
            React.createElement("div", { style: {
                    gridColumn: "1 / 2",
                    gridRow: "3 / 4",
                    alignSelf: "end",
                    justifySelf: "end"
                } }, isPlay && React.createElement(SkipBtn, { onClick: onClickSkip })),
            React.createElement("img", { style: {
                    gridColumn: "1 / 3",
                    gridRow: "4 / 5",
                    alignSelf: "end",
                    justifySelf: "end"
                }, src: new URL("../../../assets/prod/lecture_title_offer.png", import.meta.url).toString() }),
            React.createElement("div", { style: {
                    gridColumn: "2 / 3",
                    gridRow: "1 / 2",
                    justifySelf: "end",
                    marginTop: 16
                } },
                React.createElement(CloseBtn, { onClick: onClickClose }))));
};
/**
 *　先生と生徒
 */
const CastWrapper = styled.div `
  position: absolute;
  top: 100px;
  right: 0;
`;
const CastMemo = memo(({ isPlay, step }) => {
    return (React.createElement(CastWrapper, null,
        React.createElement(Cast, { teacher: isPlay ? step.teacher : "animation_1", student: step.student }, step.speech)));
});
//# sourceMappingURL=Title.js.map