import React from "react";
import styled from "styled-components";
const lecture_button_close = new URL("../../../assets/lecture_button_close.png", import.meta.url).toString();
const Main = styled.div `
  width: 98px;
  height: 83px;
  background-image: url(${lecture_button_close});
  cursor: pointer;
`;
export const CloseBtn = ({ onClick = () => { } }) => {
    return React.createElement(Main, { role: "button", onClick: onClick });
};
//# sourceMappingURL=CloseBtn.js.map