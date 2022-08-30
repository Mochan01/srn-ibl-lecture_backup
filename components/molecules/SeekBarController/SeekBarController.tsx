import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { SeekBar } from "../../atoms/SeekBar/SeekBar";

export interface SeekBarControllerProps {
  points: number[];
  stepsProgress: number;
  onPointerDown?: () => void;
  onPointerUp?: (nextProgress: number) => void;
}

const Main = styled.div`
`;

export const SeekBarController: FC<SeekBarControllerProps> = ({
  points,
  stepsProgress,
  onPointerDown = () => {},
  onPointerUp = () => {}
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
    onPointerUp(points.indexOf(closest));
  };

  return (
    <SeekBar
      value={ value }
      setValue={ setValue }
      onPointerDown={ onPointerDown }
      onPointerUp={ pointerUpHandle }
    />
  );
};
