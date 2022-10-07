import React, { FC } from "react";
import styled from "styled-components";
import { Children } from "../../../variable_types/Children";
const ImageLecture = new URL("../../../assets/prod/lecture_panel_answer.png", import.meta.url).toString();

export interface ControlPanelAProps extends Children {
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
