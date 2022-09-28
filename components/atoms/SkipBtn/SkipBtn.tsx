import React, { FC } from "react";
import styled from "styled-components";
const ImageTitle = new URL("../../../assets/prod/lecture_title.png", import.meta.url).toString();

export interface SkipBtnProps {
  onClick?: () => void;
  className?: string;
}

const Main = styled.div`
  width: 180px;
  height: 59px;
  background-image: url(${ ImageTitle });
  background-position:0 -556px;
  cursor: pointer;
`;

export const SkipBtn: FC<SkipBtnProps> = ({
  onClick = () => {},
  className
}) => {
  return <Main role="button" { ...{ onClick, className } } />;
};
