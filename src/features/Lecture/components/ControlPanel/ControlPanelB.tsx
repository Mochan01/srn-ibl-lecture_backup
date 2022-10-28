import React, { FC, ReactNode } from "react";
import styled from "styled-components";
const ImageLecture = new URL("../../../../assets/prod/lecture_panel_answer.png", import.meta.url).toString();

export interface ControlPanelBProps {
  children?: ReactNode;
}

/**
 * lecture_panel_b.png
 */
const Main = styled.div`
  width: 616px;
  height: 95px;
  background-position: 0 -2108px;
  background-image: url(${ ImageLecture });
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ControlPanelB: FC<ControlPanelBProps> = ({
  children
}) => {
  return <Main>{ children }</Main>;
};
