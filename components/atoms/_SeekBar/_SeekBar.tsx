import React, { FC, memo, useCallback, useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { useAnimationFrame } from "../../../hooks/useAnimationFrame";
import { StepsProgressContext } from "../../providers/StepsProgressProvider/StepsProgressProvider";
import { PlayContext } from "../../providers/PlayProvider/PlayProvider";
import { useCreateSeekPoints } from "../../../hooks/useCreateSeekPoints";

export interface SeekBarProps {
}

interface StyledSliderProps {
  alpha?: number;
  pointerEvents?: string;
}
const SeekBarContainer = styled.div`
  position: relative;
  height: 50px;
`;

const StyledSlider = styled(SliderPrimitive.Root)<StyledSliderProps>`
  position: absolute;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 100%;
  opacity: ${ ({ alpha }) => typeof alpha === "number" ? alpha : 1 };
  pointer-events: ${ ({ pointerEvents }) => pointerEvents || "auto" };
  &[data-orientation="horizontal"] {
    height: 20px;
  }
  &[data-orientation="vertical"] {
    flex-direction: column;
    width: 20px;
    height: 100px;
  }
`;

const StyledTrack = styled(SliderPrimitive.Track)`
  background-color: red;
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;
  &[data-orientation="horizontal"] { height: 3px; }
  &[data-orientation="vertical"] { width: 3px; }
`;

const StyledRange = styled(SliderPrimitive.Range)`
  position: absolute;
  background-color: #aaa;
  border-radius: 9999px;
  height: 100%;
`;

const StyledThumb = styled(SliderPrimitive.Thumb)`
  all: unset;
  display: block;
  width: 20px;
  height: 20px;
  background-color: white;
  box-shadow: 0 2px 10px #000;
  border-radius: 10px;
  &:hover { background-color: pink; }
  &:focus { box-shadow: 0 0 0 5px #000; }
`;

export interface SeekBarMemoProps extends StyledSliderProps {
  value: number;
  onValueChange: (nextValue: number[]) => void;
  onPointerDown?: () => void;
  onPointerUp?: () => void;
}

/**
 * https://www.radix-ui.com/docs/primitives/components/slider
 * @param param0 
 * @returns 
 */
const SeekBarMemo: FC<SeekBarMemoProps> = memo(({
  value,
  onValueChange,
  alpha,
  pointerEvents,
  onPointerDown,
  onPointerUp
}) => {
  return (
    <StyledSlider
      max={ 100 }
      value={ [value] }
      onValueChange={ onValueChange }
      alpha={ alpha }
      pointerEvents={ pointerEvents }
      onPointerUp={ () => {
        if (!onPointerUp) return;
        onPointerUp();
      } }
      onPointerDown={ () => {
        if (!onPointerDown) return;
        onPointerDown();
      } }
    >
      <StyledTrack>
        <StyledRange />
      </StyledTrack>
      <StyledThumb />
    </StyledSlider>
  );
});

interface SeekBarControllableProps extends StyledSliderProps {
}

/**
 * 操作できるシークバー
 * @param param0 
 * @returns 
 */
const SeekBarControllable: FC<SeekBarControllableProps> = ({
  alpha
}) => {
  const { stepsProgress, setStepsProgress } = useContext(StepsProgressContext);
  const { points } = useCreateSeekPoints(stepsProgress);

  // スライドのページが変わったときにシークバーの初期位置を更新する
  const [seekValue, seekValueDispatch] = useState<number>(0);
  useEffect(() => seekValueDispatch(points[0]), [points]);

  // ステップのページが変わったときにシークバーの初期位置を更新する
  useEffect(() => seekValueDispatch(points[stepsProgress]), [stepsProgress]);

  // シークバーを操作したとき
  const onValueChange
    = useCallback(nextValue => seekValueDispatch(nextValue[0]), []);

  const { play, setPlay } = useContext(PlayContext);
  // シークバー操作直前に再生していたかどうか？ 記録
  const [prePlay, setPrePlay] = useState(play);

  const pointerDownHandle = useCallback(() => {
    setPrePlay(play);
    // シークバーコントロール中は再生を停止する
    setPlay(false);
  }, [play]);

  const pointerUpHandle = useCallback(() => {

    // シークバーを特定の位置にfixさせる
    const closest = points.reduce((prev, curr) => {
      return Math.abs(curr - seekValue) < Math.abs(prev - seekValue) ? curr : prev;
    });

    seekValueDispatch(closest);

    // 一番近い位置のステップに移動する
    setStepsProgress(points.indexOf(closest));
    // シークバー操作直前に再生中であれば再生を再開
    setPlay(prePlay);
  }, [seekValue]);

  return (
    <SeekBarMemo
      value={ seekValue }
      onValueChange={ onValueChange }
      onPointerDown={ pointerDownHandle }
      onPointerUp={ pointerUpHandle }
      alpha={ alpha }
    />
  );
};

interface SeekBarAnimateProps {
  /**
   * ステップ全体の再生時間
   */
  duration: number;
}

/**
 * 等速直線運動するだけのシークバー
 * @param param0 
 * @returns 
 */
const SeekBarAnimate: FC<SeekBarAnimateProps> = ({
  duration
}) => {

  const { setPlay } = useContext(PlayContext);

  const { stepsProgress, setStepsProgress } = useContext(StepsProgressContext);
  const { point, points } = useCreateSeekPoints(stepsProgress);

  const [value, onValueChange] = useState([point]);
  const [isRunning, setIsRunning] = useState(true);

  const currentTime = useMemo(() => new Date().getTime(), [stepsProgress]);

  useAnimationFrame(isRunning, () => {

    // % 計算
    duration -= point ? duration * (point / 100) : 0;
    let percentage
      = ((new Date().getTime() - currentTime) / duration) * (100 - point);

    percentage += point;

    const zero = 100;
    percentage *= zero;
    percentage = Math.floor(percentage);
    percentage /= zero;
    onValueChange([percentage]);

    // 次のステップがあれば進む
    const nextStep = stepsProgress + 1;
    const nextPoint = points[nextStep];

    let isNextOvrFlow = false;

    if (nextPoint) isNextOvrFlow = percentage > nextPoint;
    if (isNextOvrFlow) setStepsProgress(nextStep);

    const isPause = true;
    isNextOvrFlow = isPause && isNextOvrFlow;

    const isMaxOvrFlow = percentage > 100;
    if (!isMaxOvrFlow && !isNextOvrFlow) return;

    // 止める
    setIsRunning(false);
    setPlay(false);
  });

  return (
    <SeekBarMemo
      value={ value[0] }
      onValueChange={ onValueChange }
      pointerEvents="none"
    />
  );
};

export const SeekBar: FC = () => {

  const { play } = useContext(PlayContext);

  return (
    <SeekBarContainer>
      <SeekBarControllable alpha={ play ? 0 : 1 } />
      { play && <SeekBarAnimate duration={ 5000 } /> }
    </SeekBarContainer>
  );
};
