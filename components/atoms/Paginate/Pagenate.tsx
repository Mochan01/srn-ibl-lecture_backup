import React, { FC } from "react";
import styled from "styled-components";

export interface PaginateProps {
  id?: string;
}

const Main = styled.div`
  & .swiper-pagination-bullet {
    display: block;
    background-color: #ddd;
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    opacity: 0.5;
    &.swiper-pagination-bullet-active {
      opacity: 1;
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
