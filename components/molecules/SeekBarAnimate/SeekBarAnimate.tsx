import React, { FC, useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useAnimationFrame } from "../../../hooks/useAnimationFrame";
import { SeekBar } from "../../atoms/SeekBar/SeekBar";
import { RunSeekContext } from "../../providers/RunSeekProvider/RunSeekProvider";

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
    setIsRunSeek(false);
  }, [value]);

  // 停止 / 再開
  const { isRunSeek, setIsRunSeek } = useContext(RunSeekContext);

  // アニメーション開始
  const time = useMemo(() => new Date().getTime(), [isRunSeek]);
  useAnimationFrame(isRunSeek, () => {

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
