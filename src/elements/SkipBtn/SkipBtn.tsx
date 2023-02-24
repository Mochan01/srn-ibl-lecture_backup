import React, { FC } from "react";
import styled from "styled-components";

const ImageTitle = new URL(
  "../../assets/prod/lecture_title.png",
  import.meta.url
).toString();
export interface SkipBtnProps {
  className?: string;
  onClick?: () => void;
}

const Main = styled.div`
  width: 180px;
  height: 59px;
  background-image: url(${ImageTitle});
  /* lecture_title_skip.png */
  background-position: 0 -518px;
  cursor: pointer;
  position: absolute;
  right: 455px;
  bottom: 219px;
`;
export const SkipBtn: FC<SkipBtnProps> = (props) => (
  <Main role="button" {...props} />
);
