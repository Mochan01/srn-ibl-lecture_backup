import React from "react";
import styled from "styled-components";
const lecture_title_offer = new URL("../../../assets/lecture_title_offer.png", import.meta.url).toString();
const Main = styled.div `
  width: 600px;
  height: 42px;
  background-image: url(${lecture_title_offer});
`;
export const PresentedBy = ({}) => {
    return React.createElement(Main, null);
};
//# sourceMappingURL=PresentedBy.js.map