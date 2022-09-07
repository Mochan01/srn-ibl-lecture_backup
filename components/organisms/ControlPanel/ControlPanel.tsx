import React, { FC, useContext, useMemo, memo, useState } from "react";
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

export interface ControlPanelProps {
}

const Main = styled.div`
  display: flex;
  width: ${ SIZE.W }px;
`;

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
  background-image: url(${ lecture_panel_b });
  width: ${ SIZE.PANEL_B_W }px;
  height: ${ SIZE.PANEL_B_H }px;
  padding: 6px 30px 0 30px;
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
}) => {
  return (
    <>
      <SeekBarMemo />
      <Main>
        <ControlPanelL id={ classNames.paginate } />
        <PanelB>
          <BtnWrapperL>
            <ArrowBtn id={ classNames.arrowPrev } $dir="prev" />
            <PlayBtnMemo />
            <ArrowBtn id={ classNames.arrowNext } $dir="next" />
          </BtnWrapperL>
          <BtnWrapperR>
            <ArrowBtn id={ classNames.arrowNext } $dir="next" />
          </BtnWrapperR>
        </PanelB>
        <ControlPanelR />
      </Main>
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
            percentage={ steps.filter(x => x.stepProgress === currentProgress)[0].seekStart }
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
            const stepList = factory.getStepList(slideProgress, step.stepProgress);
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

  return <PlayBtn isPlay={ play } onClick={ onClick } />;
});