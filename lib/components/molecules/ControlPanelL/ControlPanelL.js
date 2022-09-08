import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ControlPanelA } from "../../atoms/ControlPanelA/ControlPanelA";
const lecture_star_off = new URL("../../../assets/lecture_star_off.png", import.meta.url).toString();
const lecture_star_on = new URL("../../../assets/lecture_star_on.png", import.meta.url).toString();
const Wrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  height: 100%;
`;
const Grid = styled.div `
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 4px;
`;
const StyleControlPanelL = createGlobalStyle `
  .swiper-pagination-bullet {
    all: unset;
    display: block;
    background-image: url(${lecture_star_off});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 32px;
    height: 30px;
    margin: auto;
  }
  .swiper-pagination-bullet-active {
    background-image: url(${lecture_star_on});
  }
`;
export const ControlPanelL = ({ id }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(StyleControlPanelL, null),
        React.createElement(ControlPanelA, null,
            React.createElement(Wrapper, null,
                React.createElement(Grid, { id: id })))));
};
//# sourceMappingURL=ControlPanelL.js.map