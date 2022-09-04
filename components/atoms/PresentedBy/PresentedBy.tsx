import React, { FC } from "react";
import styled from "styled-components";

export interface PresentedByProps {
}

const Main = styled.div`
  width: 600px;
  height: 42px;
  background-image: url("lecture_title_offer.png");
`;

export const PresentedBy: FC<PresentedByProps> = ({
}) => {
  return <Main />;
};
