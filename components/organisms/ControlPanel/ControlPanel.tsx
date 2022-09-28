import React, { FC, useContext, useMemo, memo, useState, useEffect } from "react";
import styled from "styled-components";
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

export interface ControlPanelProps {
  onClickPrev?: () => void;
}

const Main = styled.div`
  display: flex;
  width: ${ SIZE.W }px;
`;

const BtnWrapperL = styled.div`
  display: flex;
  & > div:not(:first-of-type) {
    margin-left: 22px;
  }
`;

const BtnWrapperR = styled.div`
  & > div {
    margin-left: 64px;
  }
`;

/**
 * コントロールパネル
 * @param param0 
 * @returns 
 */
export const ControlPanel: FC<ControlPanelProps> = ({
  onClickPrev
}) => {
  return (
    <>
      <SeekBarMemo />
      <Main>
        <ControlPanelL id={ classNames.paginate } />
        <ControlPanelB>
          <BtnWrapperL>
            <PrevBtnMemo { ...{ onClickPrev } } />
            <PlayBtnMemo />
            <NextBtnMemo />
          </BtnWrapperL>
          <BtnWrapperR>
            <ReplayBtnMemo />
          </BtnWrapperR>
        </ControlPanelB>
        <ControlPanelR />
      </Main>
    </>
  );
};

/**
 * 前へボタン
 * 1ページ目で押すと、タイトル画面に戻る
 */
 const PrevBtnMemo: FC<ControlPanelProps> = memo(({
  onClickPrev
 }) => {

  const { slideProgress } = useContext(SlideProgressContext);

  return <>
    <div onClick={ () => {
      if (slideProgress !== 1) return;
      if (!onClickPrev) return;
      onClickPrev();
    } }>
      <PrevBtn />
    </div>
  </>;
});

/**
 * 次へボタン
 * スライドが終わるとレクチャー終了ボタンに変わる
 */
const NextBtnMemo: FC = memo(() => {

  const { isSlideEnd } = useContext(IsSlideEndContext);
  const { isStepEnd } = useContext(IsStepEndContext);

  return <>
    { isSlideEnd && <LectureEndBtn /> }
    { /**
     * アンマウントした瞬間にswiper-buttonの機能を失うので
     * display: noneすること
     * */ }
    <div style={ {
      display: isSlideEnd ? "none" : "block"
    } }>
      <NextBtn isBlink={ isStepEnd } />
    </div>
  </>;
});

const SeekBarWrapper = styled.div`
  position: relative;
  height: 12px;
`;

const SeekBarChild = styled.div<{ alpha?: number }>`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  opacity: ${ ({ alpha }) => typeof alpha === "number" ? alpha : 1 };
`;

/**
 *  シークバー
 *  アニメーションするバーと手で操作するバーはコンポーネントを分けてます
 */
const SeekBarMemo: FC = memo(() => {

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

  return <>
    <SeekBarWrapper key= {`${ slideProgress }_${ currentProgress }`}>
      { /** アニメーション */ }
      { (!isTouched && play) &&
        <SeekBarChild>
          <SeekBarAnimate
            percentage={
              steps.filter(x => x.stepProgress === currentProgress)[0].seekStart
            }
            { ...{ duration } }
          />
        </SeekBarChild> }
      { /** 操作 */ }
      <SeekBarChild alpha={ (isTouched || !play) ? 1 : 0 }>
        <SeekBarController
          index={ currentProgress }
          onPointerDown={ () => {
            setPlay(false);
            setIsTouched(true);
          } }
          onPointerUp={ step => {
            setPlay(true);

            const stepList
              = factory.getStepList(slideProgress, step.stepProgress);
            setStepList({ type: "UPDATE", stepList });

            setIsTouched(false);
          }}
          { ...{ steps } }
        />
      </SeekBarChild>
    </SeekBarWrapper>
  </>;
});

/**
 * リプレイボタン
 */
const ReplayBtnMemo: FC = memo(() => {

  const { slideProgress } = useContext(SlideProgressContext);
  const { stepList, setStepList } = useGetStepList();
  const factory = useContext(FactoryContext);

  // 一旦ステップをすべてアンマウントしてから最初のステップを描画する
  const onClick = () => {
    setStepList({ type: "UPDATE", stepList: [] });
  };

  useEffect(() => {
    if (stepList.length !== 0) return;

    setStepList({
      type: "UPDATE",
      stepList: [factory.getCurrentStepData(slideProgress, 0)]
    });
  }, [stepList]);

  return <ReplayBtn onClick={ onClick } />;
});

/**
 * 再生ボタン
 */
const PlayBtnMemo: FC = memo(() => {

  const { play, setPlay } = useContext(PlayContext);

  const onClick = () => {
    setPlay(s => !s);
  };

  return <PlayBtn isPlay={ play } onClick={ onClick } />;
});