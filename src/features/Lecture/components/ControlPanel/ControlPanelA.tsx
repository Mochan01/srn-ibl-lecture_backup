import React, { FC, ReactNode } from "react";
import styled from "styled-components";
const ImageLecture = new URL("../../../../assets/prod/lecture_panel_answer.png", import.meta.url).toString();

export interface ControlPanelAProps {
  children?: ReactNode;
}

/**
 * lecture_panel_a.png
 */
const Main = styled.div`
  width: 335px;
  height: 95px;
  background-position: 0 -2009px;
  background-image: url(${ ImageLecture });
`;

export const ControlPanelA: FC<ControlPanelAProps> = ({
  children
}) => {
  return <Main>{ children }</Main>;
};
