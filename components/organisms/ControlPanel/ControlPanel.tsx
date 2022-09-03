import React, { FC, useContext, useMemo, memo, useState } from "react";
import styled from "styled-components";
import { ArrowBtn } from "../../molecules/ArrowBtn/ArrowBtn";
import { Paginate } from "../../atoms/Paginate/Pagenate";
import { classNames } from "../../../data/ClassNames";
import { PlayBtn } from "../../molecules/PlayBtn/PlayBtn";
import { SeekBarAnimate } from "../../molecules/SeekBarAnimate/SeekBarAnimate";
import { SeekBarController } from "../../molecules/SeekBarController/SeekBarController";
import { PlayContext } from "../../providers/PlayProvider/PlayProvider";
import { SlideProgressContext } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { Spacer } from "../../providers/Spacer/Spacer";
import { useGetStepList } from "../../../hooks/useGetStepList";
import { StepsFactory } from "../../../factories/StepsFactory";
import { RunSeekContext } from "../../providers/RunSeekProvider/RunSeekProvider";

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

  const { play, setPlay } = useContext(PlayContext);
  const { slideProgress } = useContext(SlideProgressContext);
  const { currentProgress, setStepList } = useGetStepList();

  const points = useMemo(() => {
    return StepsFactory.getSeekBarStartsBySlide(slideProgress);
  }, [slideProgress]);

  const duration = useMemo(() => {
    return StepsFactory.getTotalTime(slideProgress);
  }, [slideProgress]);

  const [isTouched, setIsTouched] = useState(false);

  return <>
    <SeekBarWrapper key= {`${ slideProgress }_${ currentProgress }`}>
      { /** アニメーション */ }
      { (!isTouched && play) &&
        <SeekBarChild>
          <SeekBarAnimate
            percentage={ points[currentProgress] }
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
          onPointerUp={ progress => {
            const stepList = StepsFactory.getStepList(slideProgress, progress);
            setStepList({ type: "UPDATE", stepList });
            setIsTouched(false);
          }}
          { ...{ points } }
        />
      </SeekBarChild>
    </SeekBarWrapper>
  </>;
});

/**
 * 再生ボタン
 */
const PlayBtnMemo: FC = memo(() => {

  const { play, setPlay } = useContext(PlayContext);
  const { setIsRunSeek } = useContext(RunSeekContext);

  const onClick = () => {
    setPlay(s => {

      const state = !s;

      setIsRunSeek(state);
      return state;
    });
  };

  return (
    <div>
      <PlayBtn isPlay={ play } onClick={ onClick } />
      <PanelTypo>{ play ? "一時停止" : "再生" }</PanelTypo>
    </div>
  );
});