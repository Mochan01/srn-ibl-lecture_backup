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

const SeekBarWrapper = styled.div`
  position: relative;
  height: 50px;
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
      <SeekBarChild alpha={ play ? 0 : 1 }>
        <SeekBarController
          points={ points }
          stepsProgress={ stepsProgress }
          onPointerUp={ nextValue => setStepsProgress(nextValue) }
        />
      </SeekBarChild>
      <SeekBarChild>
        { play &&
          <SeekBarAnimate
            defaultPercentage={ points[stepsProgress] }
            onRunning={ onRunning }
            duration={ 5000 }
          /> }
      </SeekBarChild>
    </SeekBarWrapper>

  );
});

export interface ControlPanelProps {
}

const Main = styled.div`
`;

/**
 * コントロールパネル
 * @param param0 
 * @returns 
 */
export const ControlPanel: FC<ControlPanelProps> = ({
}) => {

  const { play, setPlay } = useContext(PlayContext);

  return (
    <>
      <Main>
        <SeekBarMemo />
        <PlayBtn isPlay={ play } onClick={ () => setPlay(s => !s) } />
        <ArrowBtn id={ classNames.arrowPrev } dir="prev" />
        <ArrowBtn id={ classNames.arrowNext } dir="next" />
        <Paginate id={ classNames.paginate } />
      </Main>
    </>
  );
};
