import React from "react";
import styled from "styled-components";
const ImageLecture = new URL("../../../assets/prod/lecture_panel_answer.png", import.meta.url).toString();
/**
 * lecture_panel_b.png
 */
const Main = styled.div `
  width: 616px;
  height: 95px;
  background-position: 0 -2108px;
  background-image: url(${ImageLecture});
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ControlPanelB = ({ children }) => {
    return React.createElement(Main, null, children);
};
//# sourceMappingURL=ControlPanelB.js.map