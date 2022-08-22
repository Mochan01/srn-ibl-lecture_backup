import React, { FC } from "react";
import styled from "styled-components";

export interface ArrowBtnProps {
  id?: string;
  dir: "prev" | "next";
}

interface MainProps {
  dir: ArrowBtnProps["dir"];
}

const Main = styled.div<MainProps>`
  background-color: #aaa;
  width: 150px;
  height: 50px;
  transform: ${ ({ dir }) => dir === "prev" ? "scale(-1, 1)": "none" };
`;

export const ArrowBtn: FC<ArrowBtnProps> = ({
  id,
  dir
}) => {
  return (
    <>
      <Main id={ id } dir={ dir } role="button">＞</Main>
    </>
  );
};
