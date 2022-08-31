import React, { FC } from "react";
import styled, { createGlobalStyle } from "styled-components";

export interface PaginateProps {
  id?: string;
}

const PADDING = 6;
const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridContainer = styled.div`
  width: 89%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5%;
`;

const StylePaginate = createGlobalStyle`
  .swiper-pagination-bullet {
    display: block;
    background-image: url("lecture_star_off.png");
    background-size: contain;
    background-position: center;
    aspect-ratio: 1 / 1;
    background-repeat: no-repeat;
  }
  .swiper-pagination-bullet-active {
    background-image: url("lecture_star_on.png");
  }
`;

export const Paginate: FC<PaginateProps> = ({
  id
}) => {
  return (
    <>
      <StylePaginate />
      <Main>
        <GridContainer id={ id } />
      </Main>
    </>
  );
};
