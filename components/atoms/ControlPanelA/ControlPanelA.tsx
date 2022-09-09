import React, { FC } from "react";
import styled from "styled-components";
import { SIZE } from "../../../data/SIZE";
import { Children } from "../../../variable_types/Children";
const lecture_panel_a = new URL("../../../assets/lecture_panel_a.png", import.meta.url).toString();

export interface ControlPanelAProps extends Children {
}

const Main = styled.div`
  width: ${ SIZE.PANEL_A_W }px;
  height: ${ SIZE.PANEL_A_H }px;
  background-image: url(${ lecture_panel_a });
`;

export const ControlPanelA: FC<ControlPanelAProps> = ({
  children
}) => {
  return <Main>{ children }</Main>;
};
