import React from "react";
import styled from "styled-components";
const ImageCommon = new URL("../../../assets/prod/close_character_spritesheet.png", import.meta.url).toString();
const Main = styled.div `
  width: 98px;
  height: 83px;
  background-image: url(${ImageCommon});
  background-repeat: no-repeat;
  background-position: 0 0;
  cursor: pointer;
`;
export const CloseBtn = ({ className, onClick = () => { } }) => {
    return React.createElement(Main, { className: className, role: "button", onClick: onClick });
};
//# sourceMappingURL=CloseBtn.js.map