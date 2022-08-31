import React, { FC } from "react";
import styled from "styled-components";

export interface StepProps {
  image: string;
}

interface MainProps {
  image: StepProps["image"];
}

const Main = styled.div<MainProps>`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #ddd;
  &:before {
    content: "";
    display: block;
    width: 100%;
    padding-top: 75%;
  }
`;

export const Step: FC<StepProps> = ({
  image
}) => {
  return (
    <>
      <Main image={ image } />
    </>
  );
};
