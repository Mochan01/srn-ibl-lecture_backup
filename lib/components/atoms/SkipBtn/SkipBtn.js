import React from "react";
import styled from "styled-components";
const lecture_title_skip = new URL("../../../assets/prod/lecture_title_skip.png", import.meta.url).toString();
const Main = styled.div `
  width: 180px;
  height: 59px;
  background-image: url(${lecture_title_skip});
  cursor: pointer;
`;
export const SkipBtn = ({ onClick = () => { } }) => {
    return React.createElement(Main, { role: "button", onClick: onClick });
};
//# sourceMappingURL=SkipBtn.js.map