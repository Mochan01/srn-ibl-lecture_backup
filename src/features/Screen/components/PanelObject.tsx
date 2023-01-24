import React, { FC, ReactNode } from "react";
import styled from "styled-components";

export interface PanelObjectProps {
  step: number;
  depth: number;
  x?: number;
  y?: number;
  children: ReactNode;
}

const Main = styled.div<PanelObjectProps>(
  ({ step, x, y, depth }) => `
  position: absolute;
  z-index: ${depth};
  left: ${x}px;
  top: ${y}px;
  cursor: pointer;
  pointer-events: ${step === depth ? "auto" : "none"};
  user-select: none;
`
);

export const PanelObject: FC<PanelObjectProps> = ({ x = 0, y = 0, ...props }) => (
  <Main {...{ x, y }} {...props} />
);
