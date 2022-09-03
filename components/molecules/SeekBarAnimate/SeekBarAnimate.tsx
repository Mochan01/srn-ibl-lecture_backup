import React, { FC, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useAnimationFrame } from "../../../hooks/useAnimationFrame";
import { SeekBar } from "../../atoms/SeekBar/SeekBar";

export interface SeekBarAnimateProps {
  duration: number;
  onRunning?: (percentage: number) => void;
  percentage?: number;
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
  percentage = 0,
}) => {

  // 100%で停止
  const _percentage = useMemo(() => percentage, []);
  const [value, setValue] = useState(_percentage);

  useEffect(() => {
    onRunning(value);

    if (value <= 100) return;
    setIsRunning(false);
  }, [value]);

  // 停止 / 再開
  const [isRunning, setIsRunning] = useState(true);
  useEffect(() => setIsRunning(isRunning), [isRunning]);

  // アニメーション開始
  const time = useMemo(() => new Date().getTime(), []);
  useAnimationFrame(isRunning, () => {

    // % 計算
    const _duration = duration - (duration * (_percentage / 100));

    let percentage
      = ((new Date().getTime() - time) / _duration) * (100 - _percentage);

    percentage += _percentage;

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
