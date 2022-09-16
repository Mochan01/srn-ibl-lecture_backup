import React from "react";
import styled from "styled-components";
const lecture_title_skip = new URL("../../../assets/prod/lecture_title_skip.png", import.meta.url).toString();
const Main = styled.div `
  width: 180px;
  height: 59px;
  background-image: url(${lecture_title_skip});
  cursor: pointer;
`;
export const SkipBtn = ({ onClick = () => { }, className }) => {
    return React.createElement(Main, Object.assign({ role: "button" }, { onClick, className }));
};
//# sourceMappingURL=SkipBtn.js.map