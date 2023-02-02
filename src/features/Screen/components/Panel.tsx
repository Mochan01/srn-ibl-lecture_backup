import React, { FC, ReactNode } from "react";
import { MotionType } from "src-ibl-lecture-master/types/stepType";
import styled from "styled-components";
import { SIZE } from "../../../data/SIZE";

export interface PanelProps {
  image?: string;
  motion1?: MotionType;
  motion2?: MotionType;
  children?: ReactNode;
}

const Main = styled.div<PanelProps>`
  position: relative;
  width: ${SIZE.W}px;
  height: ${SIZE.H}px;
  background-color: #ddd;
  z-index: 0;
  & > * {
    position: absolute;
  }
`;

export const Panel: FC<PanelProps> = (props) => <Main {...props} />;
