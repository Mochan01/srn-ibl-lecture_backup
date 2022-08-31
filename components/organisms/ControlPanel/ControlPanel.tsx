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
  const { stepsProgress, setStepsProgress } = useContext(StepsProgressContext);
  const { slideProgress } = useContext(SlideProgressContext);
  const stepsFactory = useContext(StepsFactoryContext);

  // コンテンツが有る位置
  const points = useMemo(() => {
    return stepsFactory.getSeekBarStartsBySlide(slideProgress);
  }, [slideProgress]);

  const onRunning = percentage => {

    // 次のステップの位置に達したら
    const nextStep = stepsProgress + 1;
    if (percentage > points[nextStep]) {
      setPlay(false);
      setStepsProgress(nextStep);

      // 質問ステップなら止める
      const isQuestion = true;
      if (!isQuestion) return;
      setPlay(false);
    }

    // 100%に達したら
    if (percentage > 100) {
      setPlay(false);
    }

  };

  return (
    <SeekBarWrapper>
      <SeekBarChild>
        { play &&
          <SeekBarAnimate
            defaultPercentage={ points[stepsProgress] }
            onRunning={ onRunning }
            duration={ 5000 }
          /> }
      </SeekBarChild>
      <SeekBarChild alpha={ play ? 0 : 1 }>
        <SeekBarController
          points={ points }
          stepsProgress={ stepsProgress }
          onPointerDown={ () => setPlay(false) }
          onPointerUp={ nextValue => setStepsProgress(nextValue) }
        />
      </SeekBarChild>
    </SeekBarWrapper>

  );
});

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

/**
 * 3つのうち中央のパネル
 * @param param0 
 * @returns 
 */
export const PanelCenter: FC<ControlPanelProps> = ({
}) => {

  const { play, setPlay } = useContext(PlayContext);

  return (
    <PanelB>
      <Spacer size={ 40 } />
      <div>
        <ArrowBtn id={ classNames.arrowPrev } dir="prev" />
        <PanelTypo>前ページ</PanelTypo>
      </div>
      <Spacer size={ 24 } />
      <div>
        <PlayBtn isPlay={ play } onClick={ () => setPlay(s => !s) } />
        <PanelTypo>{ play ? "一時停止" : "再生" }</PanelTypo>
      </div>
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
  );
};

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
        <PanelCenter />
        <PanelA>
        </PanelA>
      </PanelWrapper>
    </>
  );
};
