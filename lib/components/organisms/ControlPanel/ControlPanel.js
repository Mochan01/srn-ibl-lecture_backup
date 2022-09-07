import React, { useContext, useMemo, memo, useState, useEffect } from "react";
import styled from "styled-components";
import { ArrowBtn } from "../../molecules/ArrowBtn/ArrowBtn";
import { ControlPanelL } from "../../molecules/ControlPanelL/ControlPanelL";
import { classNames } from "../../../data/ClassNames";
import { PlayBtn } from "../../molecules/PlayBtn/PlayBtn";
import { SeekBarAnimate } from "../../molecules/SeekBarAnimate/SeekBarAnimate";
import { SeekBarController } from "../../molecules/SeekBarController/SeekBarController";
import { PlayContext } from "../../providers/PlayProvider/PlayProvider";
import { SlideProgressContext } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { SIZE } from "../../../data/SIZE";
import { useGetStepList } from "../../../hooks/useGetStepList";
import { RunSeekContext } from "../../providers/RunSeekProvider/RunSeekProvider";
import { ControlPanelR } from "../../molecules/ControlPanelR/ControlPanelR";
import { FactoryContext } from "../../providers/FactoryProvider/FactoryProvider";
const lecture_panel_b = new URL("../../../assets/lecture_panel_b.png", import.meta.url).toString();
import { ReplayBtn } from "../../molecules/ReplayBtn/ReplayBtn";
const Main = styled.div `
  display: flex;
  width: ${SIZE.W}px;
`;
const Panel = styled.div `
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  &:before {
    content: "";
    display: block;
  }
`;
const PanelB = styled(Panel) `
  background-image: url(${lecture_panel_b});
  width: ${SIZE.PANEL_B_W}px;
  height: ${SIZE.PANEL_B_H}px;
  padding: 6px 30px 0 30px;
`;
const BtnWrapperL = styled.div `
  display: flex;
  & > div:not(:first-of-type) {
    margin-left: 22px;
  }
`;
const BtnWrapperR = styled.div `
  & > div {
    margin-left: 64px;
  }
`;
/**
 * コントロールパネル
 * @param param0
 * @returns
 */
export const ControlPanel = ({}) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(SeekBarMemo, null),
        React.createElement(Main, null,
            React.createElement(ControlPanelL, { id: classNames.paginate }),
            React.createElement(PanelB, null,
                React.createElement(BtnWrapperL, null,
                    React.createElement(ArrowBtn, { id: classNames.arrowPrev, "$dir": "prev" }),
                    React.createElement(PlayBtnMemo, null),
                    React.createElement(ArrowBtn, { id: classNames.arrowNext, "$dir": "next" })),
                React.createElement(BtnWrapperR, null,
                    React.createElement(ReplayBtnMemo, null))),
            React.createElement(ControlPanelR, null))));
};
const SeekBarWrapper = styled.div `
  position: relative;
  height: 12px;
`;
const SeekBarChild = styled.div `
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  opacity: ${({ alpha }) => typeof alpha === "number" ? alpha : 1};
`;
/**
 *  シークバー
 *  アニメーションするバーと手で操作するバーはコンポーネントを分けてます
 */
const SeekBarMemo = memo(() => {
    const { play, setPlay } = useContext(PlayContext);
    const { slideProgress } = useContext(SlideProgressContext);
    const factory = useContext(FactoryContext);
    const { currentProgress, setStepList } = useGetStepList();
    const steps = useMemo(() => {
        return factory.getStepListAll(slideProgress);
    }, [slideProgress]);
    const duration = useMemo(() => {
        return factory.getTotalTime(slideProgress);
    }, [slideProgress]);
    const [isTouched, setIsTouched] = useState(false);
    return React.createElement(React.Fragment, null,
        React.createElement(SeekBarWrapper, { key: `${slideProgress}_${currentProgress}` },
            (!isTouched && play) &&
                React.createElement(SeekBarChild, null,
                    React.createElement(SeekBarAnimate, Object.assign({ percentage: steps.filter(x => x.stepProgress === currentProgress)[0].seekStart }, { duration }))),
            React.createElement(SeekBarChild, { alpha: (isTouched || !play) ? 1 : 0 },
                React.createElement(SeekBarController, Object.assign({ index: currentProgress, onPointerDown: () => {
                        setPlay(false);
                        setIsTouched(true);
                    }, onPointerUp: step => {
                        const stepList = factory.getStepList(slideProgress, step.stepProgress);
                        setStepList({ type: "UPDATE", stepList });
                        setIsTouched(false);
                    } }, { steps })))));
});
/**
 * リプレイボタン
 */
const ReplayBtnMemo = memo(() => {
    const { slideProgress } = useContext(SlideProgressContext);
    const { stepList, setStepList } = useGetStepList();
    const factory = useContext(FactoryContext);
    // 一旦ステップをすべてアンマウントしてから最初のステップを描画する
    const onClick = () => {
        setStepList({ type: "UPDATE", stepList: [] });
    };
    useEffect(() => {
        if (stepList.length !== 0)
            return;
        setStepList({
            type: "UPDATE",
            stepList: [factory.getCurrentStepData(slideProgress, 0)]
        });
    }, [stepList]);
    return React.createElement(ReplayBtn, { active: true, onClick: onClick });
});
/**
 * 再生ボタン
 */
const PlayBtnMemo = memo(() => {
    const { play, setPlay } = useContext(PlayContext);
    const { setIsRunSeek } = useContext(RunSeekContext);
    const onClick = () => {
        setPlay(s => {
            const state = !s;
            setIsRunSeek(state);
            return state;
        });
    };
    return React.createElement(PlayBtn, { isPlay: play, onClick: onClick });
});
//# sourceMappingURL=ControlPanel.js.map