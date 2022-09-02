import React, { FC, useContext, useMemo, memo } from "react";
import styled from "styled-components";
import { ArrowBtn } from "../../molecules/ArrowBtn/ArrowBtn";
import { Paginate } from "../../atoms/Paginate/Pagenate";
import { classNames } from "../../../data/ClassNames";
import { PlayBtn } from "../../molecules/PlayBtn/PlayBtn";
import { SeekBarAnimate } from "../../molecules/SeekBarAnimate/SeekBarAnimate";
import { SeekBarController } from "../../molecules/SeekBarController/SeekBarController";
import { StepsProgressContext } from "../../providers/StepsProgressProvider/StepsProgressProvider";
import { PlayContext } from "../../providers/PlayProvider/PlayProvider";
import { SlideProgressContext } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { StepsFactoryContext } from "../../providers/StepsFactoryProvider/StepsFactoryProvider";
import { Spacer } from "../../providers/Spacer/Spacer";
import { SeekProgressContext } from "../../providers/SeekProgressProvider/SeekProgressProvider";

export interface ControlPanelProps {
}

const Panel = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  &:before {
    content: "";
    display: block;
  }
`;

const PanelB = styled(Panel)`
  background-image: url("lecture_panel_b.png");
  width: 48%;
  & > div {
    margin-top: 1.5%;
    width: 100%;
  }
  &:before {
    padding-top: 15.417%;
  }
`;

const PanelTypo = styled.p`
  width: 100%;
  text-align: center;
  color: #fff;
  line-height: 1;
  white-space: nowrap;
  user-select: none;
  font-size: 9px;
`;

const PanelA = styled(Panel)`
  background-image: url("lecture_panel_a.png");
  width: 26%;
  &:before {
    padding-top: 28.462%;
  }
`;

const PanelWrapper = styled.div`
  display: flex;
`;

/**
 * コントロールパネル
 * @param param0 
 * @returns 
 */
export const ControlPanel: FC<ControlPanelProps> = ({
}) => {
  return (
    <>
      <SeekBarMemo />
      <PanelWrapper>
        <PanelA>
          <Paginate id={ classNames.paginate } />
        </PanelA>
        <PanelB>
          <Spacer size={ 40 } />
          <div>
            <ArrowBtn id={ classNames.arrowPrev } dir="prev" />
            <PanelTypo>前ページ</PanelTypo>
          </div>
          <Spacer size={ 24 } />
          <PlayBtnMemo />
          <Spacer size={ 24 } />
          <div>
            <ArrowBtn id={ classNames.arrowNext } dir="next" />
            <PanelTypo>次ページ</PanelTypo>
          </div>
          <Spacer size={ 80 } />
          <div>
            <ArrowBtn id={ classNames.arrowNext } dir="next" />
            <PanelTypo>もう一度</PanelTypo>
          </div>
          <Spacer size={ 40 } />
        </PanelB>
        <PanelA>
        </PanelA>
      </PanelWrapper>
    </>
  );
};

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

  const { stepsProgress, setStepsProgress } = useContext(StepsProgressContext);
  const { play, setPlay } = useContext(PlayContext);
  const { slideProgress } = useContext(SlideProgressContext);
  const { seekProgress, setSeekProgress } = useContext(SeekProgressContext);

  // シークバーが止まる位置を取得
  const stepsFactory = useContext(StepsFactoryContext);
  const points = useMemo(() => {
    return stepsFactory.getSeekBarStartsBySlide(slideProgress);
  }, [slideProgress]);

  const onRunning = percentage => {
    /*

    // 100%に達したとき
    if (percentage > 100) {
      setPlay(false);
      return;
    }

    // 次のステップの位置に達したとき
    const nextStep = stepsFactory.getNextStep(slideProgress, seekProgress);

    if (!points[nextStep]) return;

    if (percentage > points[seekProgress + 1]) {

      setSeekProgress(nextStep);

      // クイズ画面なら一旦停止
      const { questions }
        = stepsFactory.getStepDataPropsBySlide(slideProgress)[seekProgress];

      if (questions) {
        setPlay(false);
      } else {
        setStepsProgress(nextStep);
      }

      return;
    }
    */
  };

  return <>
    <SeekBarWrapper>
      { /** 再生中にアニメーションするシークバー */ }
      { play &&
        <SeekBarChild>
          <SeekBarAnimate
            key={ points[seekProgress] }
            defaultPercentage={ points[seekProgress] }
            onRunning={ onRunning }
            duration={ 5000 }
          />
        </SeekBarChild> }
      { /** ユーザーが操作できるシークバー */ }
      <SeekBarChild alpha={ play ? 0 : 1 }>
        <SeekBarController
          points={ points }
          stepsProgress={ seekProgress }
          onPointerDown={ () => setPlay(false) }
          onPointerUp={ progress => {
            setStepsProgress(progress);
            setSeekProgress(progress) 
          }}
        />
      </SeekBarChild>
    </SeekBarWrapper>
  </>;
});

/**
 * 再生ボタン
 */
const PlayBtnMemo: FC = memo(() => {

  const { seekProgress } = useContext(SeekProgressContext);
  const { play, setPlay } = useContext(PlayContext);
  const { stepsProgress } = useContext(StepsProgressContext);

  const onClick = () => {
    // 解答ステップなら再生させない
    if (seekProgress !== stepsProgress) return;
    setPlay(s => !s);
  };

  return (
    <div>
      <PlayBtn isPlay={ play } onClick={ onClick } />
      <PanelTypo>{ play ? "一時停止" : "再生" }</PanelTypo>
    </div>
  );
});