import React, { FC, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useAnimationFrame } from "../../../hooks/useAnimationFrame";
import { SeekBar } from "../../atoms/SeekBar/SeekBar";

export interface SeekBarAnimateProps {
  duration: number;
  onRunning?: (percentage: number) => void;
  defaultPercentage?: number;
  isRunning?: boolean;
}

const Main = styled.div`
  pointer-events: none;
`;

/**
 * 等速直線運動するだけのシークバー
 * @param param0 
 * @returns 
 */
export const SeekBarAnimate: FC<SeekBarAnimateProps> = ({
  duration,
  onRunning = () => {},
  defaultPercentage = 0,
  isRunning = true
}) => {

  // defaultPercentageが変わったら位置を更新する
  useEffect(() => setValue(defaultPercentage), [defaultPercentage]);

  // 100%で停止
  const [value, setValue] = useState(defaultPercentage);
  useEffect(() => {
    onRunning(value);

    if (value <= 100) return;
    setIsRunning(false);
  }, [value]);

  // 停止 / 再開
  const [_isRunning, setIsRunning] = useState(isRunning);
  useEffect(() => setIsRunning(isRunning), [isRunning]);

  // 停止したあと同じ位置から始めるためにメモ噛ませる
  const _defaultPercentage = useMemo(() => value, [isRunning]);
  const currentTime = useMemo(() => new Date().getTime(), [isRunning]);

  // アニメーション開始
  useAnimationFrame(_isRunning, () => {

    // % 計算
    const _duration = duration - (duration * (_defaultPercentage / 100));

    let percentage
      = ((new Date().getTime() - currentTime) / _duration) * (100 - _defaultPercentage);

    percentage += _defaultPercentage;

    const zero = 10;
    percentage *= zero;
    percentage = Math.floor(percentage);
    percentage /= zero;

    setValue(percentage);
  });

  return (
    <Main>
      <SeekBar
        value={ value }
        setValue={ setValue }
      />
    </Main>
  );
};
