import React, { FC, ReactNode, useState, useEffect } from "react";
import { Main } from "./styles";
import { Motion } from "./types";

export interface PanelObjectProps {
  step: number;
  depth: number;
  x?: number;
  y?: number;
  motion1?: Motion;
  motion2?: Motion;
  children: ReactNode;
}

export const PanelObject: FC<PanelObjectProps> = ({
  x = 0,
  y = 0,
  motion1 = "fadein",
  step,
  depth,
  ...props
}) => {
  const [renderKey, setRenderKey] = useState(0);

  // このコンポーネントが現在のstepのdepthに属している場合 renderKey をインクリメントする
  useEffect(() => {
    depth === step && setRenderKey((s) => s + 1);
  }, [depth, step]);

  // renderKey が変更されるたびにコンポーネントが再描画される
  // つまり、現在のステップに展開されているオブジェクトのみが再描画される
  return <Main key={renderKey} {...{ x, y, motion1, depth, step, ...props }} />;
};
