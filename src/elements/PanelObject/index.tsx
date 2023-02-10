import React, { FC, ReactNode } from "react";
import { MotionType } from "src-ibl-lecture-master/types/stepType";
import styled from "styled-components";

export interface PanelObjectProps {
  step: number;
  depth: number;
  x?: number;
  y?: number;
  motion1?: MotionType;
  motion2?: MotionType;
  children: ReactNode;
}

const distance = 200;

const Main = styled.div<PanelObjectProps>(
  ({ step, x, y, depth, motion1, motion2 }) => `
  position: absolute;
  z-index: ${depth};
  left: ${x}px;
  top: ${y}px;
  cursor: pointer;
  pointer-events: ${step === depth ? "auto" : "none"};
  user-select: none;
  animation-name: ${motion1 || "none"}, ${motion2 || "none"};
  animation-duration: .3s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes slideup {
    from {
      transform: translateY(-${distance}px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slidedown {
    from {
      transform: translateY(${distance}px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slideleft {
    from {
      transform: translateX(${distance}px);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes slideright {
    from {
      transform: translateX(-${distance}px);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes enlarge {
    from {
      transform: scale(.5);
    }
    to {
      transform: scale(1);
    }
  }
`
);

export const PanelObject: FC<PanelObjectProps> = ({
  x = 0,
  y = 0,
  ...props
}) => <Main {...{ x, y }} {...props} />;
