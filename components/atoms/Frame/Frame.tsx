import React, { FC } from "react";
import styled from "styled-components";

export interface FrameProps {
}

const Main = styled.div`
  background-image: url("lecture_flame.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  &:before {
    content: "";
    display: block;
    padding-top: 75%;
  }
`;

export const Frame: FC<FrameProps> = ({
}) => {
  return <Main />;
};

