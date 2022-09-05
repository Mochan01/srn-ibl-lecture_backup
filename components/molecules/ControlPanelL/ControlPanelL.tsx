import React, { FC } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ControlPanelA } from "../../atoms/ControlPanelA/ControlPanelA";
const lecture_star_off = new URL("../../../assets/lecture_star_off.png", import.meta.url).toString();
const lecture_star_on = new URL("../../../assets/lecture_star_on.png", import.meta.url).toString();

export interface ControlPanelLProps {
  id?: string;
}

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 4px;
`;

const StyleControlPanelL = createGlobalStyle`
  .swiper-pagination-bullet {
    display: block;
    background-image: url(${ lecture_star_off });
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 32px;
    height: 30px;
    margin: auto;
  }
  .swiper-pagination-bullet-active {
    background-image: url(${ lecture_star_on });
  }
`;

export const ControlPanelL: FC<ControlPanelLProps> = ({
  id
}) => {
  return (
    <>
      <StyleControlPanelL />
      <ControlPanelA>
        <Grid id={ id } />
      </ControlPanelA>
    </>
  );
};
