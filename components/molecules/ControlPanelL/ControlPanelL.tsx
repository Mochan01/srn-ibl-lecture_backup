import React, { FC } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ControlPanelA } from "../../atoms/ControlPanelA/ControlPanelA";
const ImageLecture = new URL("../../../assets/prod/lecture_panel_answer.png", import.meta.url).toString();

export interface ControlPanelLProps {
  id?: string;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  height: 100%;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 4px;
`;

/**
 * lecture_star_on.png
 * lecture_star_off.png
 */
const StyleControlPanelL = createGlobalStyle`
  .swiper-pagination-bullet {
    // todo: マスターデータの方で最初のプログレス消す
    &:first-child {
      display: none;
    }
    all: unset;
    display: block;
    background-image: url(${ ImageLecture });
    background-repeat: no-repeat;
    width:41px;
    height:38px;
    background-position: 0 -2314px;
    margin: auto;
    .swiper-pagination-bullet-active ~ & {
      background-position: 0 -2272px;
    }
  }
`;

export const ControlPanelL: FC<ControlPanelLProps> = ({
  id
}) => {
  return (
    <>
      <StyleControlPanelL />
      <ControlPanelA>
        <Wrapper>
          <Grid id={ id } />
        </Wrapper>
      </ControlPanelA>
    </>
  );
};
