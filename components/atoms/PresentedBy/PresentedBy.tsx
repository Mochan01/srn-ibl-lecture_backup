import React, { FC } from "react";
import styled from "styled-components";
const ImageTitle = new URL("../../../assets/prod/lecture_title.png", import.meta.url).toString();

export interface PresentedByProps {
  className?: string;
}

const Main = styled.div`
  width: 600px;
  height: 42px;
  background-image: url(${ ImageTitle });
  background-position:0 -619px;
`;

export const PresentedBy: FC<PresentedByProps> = ({
  className
}) => {
  return <Main { ...{ className } } />;
};
