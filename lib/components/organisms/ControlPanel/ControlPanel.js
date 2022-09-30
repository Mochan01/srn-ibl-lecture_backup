import React, { useContext, useMemo, memo, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { ControlPanelL } from "../../molecules/ControlPanelL/ControlPanelL";
import { classNames } from "../../../data/ClassNames";
import { PlayBtn } from "../../molecules/PlayBtn/PlayBtn";
import { SeekBarAnimate } from "../../molecules/SeekBarAnimate/SeekBarAnimate";
import { SeekBarController } from "../../molecules/SeekBarController/SeekBarController";
import { PlayContext } from "../../providers/PlayProvider/PlayProvider";
import { SlideProgressContext } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { SIZE } from "../../../data/SIZE";
import { useGetStepList } from "../../../hooks/useGetStepList";
import { ControlPanelR } from "../../molecules/ControlPanelR/ControlPanelR";
import { FactoryContext } from "../../providers/FactoryProvider/FactoryProvider";
import { ReplayBtn } from "../../molecules/ReplayBtn/ReplayBtn";
import { IsSlideEndContext } from "../../providers/IsSlideEndProvider/IsSlideEndProvider";
import { LectureEndBtn } from "../../molecules/LectureEndBtn/LectureEndBtn";
import { PrevBtn } from "../../molecules/PrevBtn/PrevBtn";
import { NextBtn } from "../../molecules/NextBtn/NextBtn";
import { IsStepEndContext } from "../../providers/IsStepEndProvider/IsStepEndProvider";
import { ControlPanelB } from "../../atoms/ControlPanelB/ControlPanelB";
const Main = styled.div `
  display: flex;
  width: ${SIZE.W}px;
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
export const ControlPanel = ({ onClickPrev }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(SeekBarMemo, null),
        React.createElement(Main, null,
            React.createElement(ControlPanelL, { id: classNames.paginate }),
            React.createElement(ControlPanelB, null,
                React.createElement(BtnWrapperL, null,
                    React.createElement(PrevBtnMemo, Object.assign({}, { onClickPrev })),
                    React.createElement(PlayBtnMemo, null),
                    React.createElement(NextBtnMemo, null)),
                React.createElement(BtnWrapperR, null,
                    React.createElement(ReplayBtnMemo, null))),
            React.createElement(ControlPanelR, null))));
};
/**
 * 前へボタン
 * 1ページ目で押すと、タイトル画面に戻る
 */
const PrevBtnMemo = memo(({ onClickPrev }) => {
    const { slideProgress } = useContext(SlideProgressContext);
    return React.createElement(React.Fragment, null,
        React.createElement("div", { onClick: () => {
                if (slideProgress !== 1)
                    return;
                if (!onClickPrev)
                    return;
                onClickPrev();
            } },
            React.createElement(PrevBtn, null)));
});
/**
 * 次へボタン
 * スライドが終わるとレクチャー終了ボタンに変わる
 */
const NextBtnMemo = memo(() => {
    const { isSlideEnd } = useContext(IsSlideEndContext);
    const { isStepEnd } = useContext(IsStepEndContext);
    return React.createElement(React.Fragment, null,
        isSlideEnd && React.createElement(LectureEndBtn, null),
        React.createElement("div", { style: {
                display: isSlideEnd ? "none" : "block"
            } },
            React.createElement(NextBtn, { isBlink: isStepEnd })));
});
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
        React.createElement("div", { key: `${slideProgress}_${currentProgress}`, css: css `position: relative;` },
            (!isTouched && play) &&
                React.createElement(SeekBarAnimate, Object.assign({ css: css `position: absolute;`, percentage: steps.filter(x => x.stepProgress === currentProgress)[0].seekStart }, { duration })),
            React.createElement(SeekBarController, Object.assign({ index: currentProgress, css: css `opacity: ${(isTouched || !play) ? 1 : 0};`, onPointerDown: () => {
                    setPlay(false);
                    setIsTouched(true);
                }, onPointerUp: step => {
                    setPlay(true);
                    const stepList = factory.getStepList(slideProgress, step.stepProgress);
                    setStepList({ type: "UPDATE", stepList });
                    setIsTouched(false);
                } }, { steps }))));
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
    return React.createElement(ReplayBtn, { onClick: onClick });
});
/**
 * 再生ボタン
 */
const PlayBtnMemo = memo(() => {
    const { play, setPlay } = useContext(PlayContext);
    const onClick = () => {
        setPlay(s => !s);
    };
    return React.createElement(PlayBtn, { isPlay: play, onClick: onClick });
});
//# sourceMappingURL=ControlPanel.js.map