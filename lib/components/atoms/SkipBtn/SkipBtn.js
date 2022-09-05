import React from "react";
import styled from "styled-components";
const Main = styled.div `
  width: 180px;
  height: 59px;
  background-image: url("lecture_title_skip.png");
  cursor: pointer;
`;
export const SkipBtn = ({ onClick = () => { } }) => {
    return React.createElement(Main, { role: "button", onClick: onClick });
};
//# sourceMappingURL=SkipBtn.js.map