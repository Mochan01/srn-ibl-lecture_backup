import React, { FC } from "react";
import styled from "styled-components";
const ImageCommon = new URL(
  "../../assets/prod/close_character_spritesheet.png",
  import.meta.url
).toString();

export interface CloseBtnProps {
  className?: string;
  onClick?: () => void;
}

const Main = styled.div`
  width: 98px;
  height: 83px;
  background-image: url(${ImageCommon});
  background-repeat: no-repeat;
  background-position: 0 0;
  cursor: pointer;
`;

export const CloseBtn: FC<CloseBtnProps> = (props) => (
  <Main role="button" {...props} />
);
