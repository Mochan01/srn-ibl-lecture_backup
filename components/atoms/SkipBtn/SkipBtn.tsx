import React, { FC } from "react";
import styled from "styled-components";
const lecture_title_skip
  = new URL("../../../assets/lecture_title_skip.png", import.meta.url).toString();

export interface SkipBtnProps {
  onClick?: () => void;
}

const Main = styled.div`
  width: 180px;
  height: 59px;
  background-image: url(${ lecture_title_skip });
  cursor: pointer;
`;

export const SkipBtn: FC<SkipBtnProps> = ({
  onClick = () => {}
}) => {
  return <Main role="button" onClick={ onClick } />;
};
