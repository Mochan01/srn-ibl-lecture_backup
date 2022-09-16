import React, { FC } from "react";
import styled from "styled-components";
const lecture_button_close
  = new URL("../../../assets/prod/lecture_button_close.png", import.meta.url).toString();

export interface CloseBtnProps {
  className?: string;
  onClick?: () => void;
}

const Main = styled.div`
  width: 98px;
  height: 83px;
  background-image: url(${ lecture_button_close });
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;

export const CloseBtn: FC<CloseBtnProps> = ({
  className,
  onClick = () => {}
}) => {
  return <Main className={ className } role="button" onClick={ onClick } />;
};
