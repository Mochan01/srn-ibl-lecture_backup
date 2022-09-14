import React, { FC } from "react";
import styled from "styled-components";
const lecture_title_offer = new URL("../../../assets/prod/lecture_title_offer.png", import.meta.url).toString();

export interface PresentedByProps {
}

const Main = styled.div`
  width: 600px;
  height: 42px;
  background-image: url(${ lecture_title_offer });
`;

export const PresentedBy: FC<PresentedByProps> = ({
}) => {
  return <Main />;
};
