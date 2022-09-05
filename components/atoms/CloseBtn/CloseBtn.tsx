import React, { FC } from "react";
import styled from "styled-components";

// @ts-ignore
import lectureButtonClose from "../../../assets/lecture_button_close.png";
new URL("../../../assets/lecture_button_close.png", import.meta.url).toString();

export interface CloseBtnProps {
  onClick?: () => void;
}

const Main = styled.div`
  width: 98px;
  height: 83px;
  background-image: url(lectureButtonClose);
  cursor: pointer;
`;

export const CloseBtn: FC<CloseBtnProps> = ({
  onClick = () => {}
}) => {
  return <Main role="button" onClick={ onClick } />;
};
