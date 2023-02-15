import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { SIZE } from "../../../data/SIZE";

export interface PanelProps {
  children?: ReactNode;
  className?: string;
}

const Main = styled.div<PanelProps>`
  position: relative;
  width: ${SIZE.W}px;
  height: ${SIZE.H}px;
  background-color: #efefff;
  z-index: 0;
  & > * {
    position: absolute;
  }
`;

export const Panel: FC<PanelProps> = (props) => <Main {...props} />;
