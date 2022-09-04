import React, { FC } from "react";
import styled from "styled-components";

export interface CloseBtnProps {
  onClick?: () => void;
}

const Main = styled.div`
  width: 98px;
  height: 83px;
  background-image: url("lecture_button_close.png");
  cursor: pointer;
`;

export const CloseBtn: FC<CloseBtnProps> = ({
  onClick = () => {}
}) => {
  return <Main role="button" onClick={ onClick } />;
};
