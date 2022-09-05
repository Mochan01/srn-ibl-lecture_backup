import React from "react";
import styled from "styled-components";
new URL("../../../assets/lecture_button_close.png", import.meta.url).toString();
const Main = styled.div `
  width: 98px;
  height: 83px;
  background-image: url(lectureButtonClose);
  cursor: pointer;
`;
export const CloseBtn = ({ onClick = () => { } }) => {
    return React.createElement(Main, { role: "button", onClick: onClick });
};
//# sourceMappingURL=CloseBtn.js.map