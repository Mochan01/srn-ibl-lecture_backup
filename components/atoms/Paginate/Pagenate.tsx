import React, { FC } from "react";
import styled from "styled-components";

export interface PaginateProps {
  id?: string;
}

const Main = styled.div`
  & .swiper-pagination-bullet {
    display: block;
    width: 100%;
    max-width: 200px;
    margin-bottom: 10px;
    background-image: url("lecture_star_off.png");
    background-size: contain;
    background-repeat: no-repeat;
    &:before {
      content: "";
      display: block;
      padding-top: 100%;
    }
    &.swiper-pagination-bullet-active {
      background-image: url("lecture_star_on.png");
    }
  }
`;

export const Paginate: FC<PaginateProps> = ({
  id
}) => {
  return (
    <>
      <Main id={ id } />
    </>
  );
};
