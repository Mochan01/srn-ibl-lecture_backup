import React, { FC } from "react";
import styled from "styled-components";

export interface SkipBtnProps {
  onClick?: () => void;
}

const Main = styled.div`
  width: 180px;
  height: 59px;
  background-image: url("lecture_title_skip.png");
  cursor: pointer;
`;

export const SkipBtn: FC<SkipBtnProps> = ({
  onClick = () => {}
}) => {
  return <Main role="button" onClick={ onClick } />;
};
