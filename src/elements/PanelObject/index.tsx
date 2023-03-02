import React, { FC, ReactNode } from "react";
import styled from "styled-components";

type Motion =
  | "none"
  | "fadein"
  | "slideup"
  | "slidedown"
  | "slideleft"
  | "slideright"
  | "enlarge";

export interface PanelObjectProps {
  step: number;
  depth: number;
  x?: number;
  y?: number;
  motion1?: Motion;
  motion2?: Motion;
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
  @keyframes none {
  }
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
  motion1 = "fadein",
  ...props
}) => <Main {...{ x, y, motion1 }} {...props} />;
