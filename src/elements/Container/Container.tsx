import React, { FC, ReactNode } from "react";
import styled from "styled-components";
const ImgBg = new URL(
  "../../assets/prod/lecture_bg.png",
  import.meta.url
).toString();

export interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const Main = styled.div`
  width: 1920px;
  height: 1080px;
  position: relative;
  background-image: url(${ImgBg});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Container: FC<ContainerProps> = (props) => <Main {...props} />;
