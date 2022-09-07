import React from "react";
import styled from "styled-components";
import { SIZE } from "../../../data/SIZE";
const lecture_panel_a = new URL("../../../assets/lecture_panel_a.png", import.meta.url).toString();
const Main = styled.div `
  width: ${SIZE.PANEL_A_W}px;
  height: ${SIZE.PANEL_A_H}px;
  background-image: url(${lecture_panel_a});
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
`;
export const ControlPanelA = ({ children }) => {
    return React.createElement(Main, null, children);
};
//# sourceMappingURL=ControlPanelA.js.map