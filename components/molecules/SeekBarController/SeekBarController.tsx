import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { SeekBar } from "../../atoms/SeekBar/SeekBar";

export interface SeekBarControllerProps {
  points: number[];
  stepsProgress: number;
  pointerDown?: () => void;
  pointerUp?: (nextProgress: number) => void;
}

const Main = styled.div`
`;

export const SeekBarController: FC<SeekBarControllerProps> = ({
  points,
  stepsProgress,
  pointerDown = () => {},
  pointerUp = () => {}
}) => {

  // スライドのページが変わったときにシークバーの初期位置を更新する
  const [value, setValue] = useState(points[stepsProgress]);
  useEffect(() => setValue(points[0]), [points]);

  // ステップのページが変わったときにシークバーの初期位置を更新する
  useEffect(() => setValue(points[stepsProgress]), [stepsProgress]);

  const pointerUpHandle = () => {

    // シークバーを特定の位置にfixさせる
    const closest = points.reduce((prev, curr) => {
      return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;
    });

    setValue(closest);
    pointerUp(points.indexOf(closest));
  };

  return (
    <SeekBar
      value={ value }
      setValue={ setValue }
      onPointerDown={ pointerDown }
      onPointerUp={ pointerUpHandle }
    />
  );
};
