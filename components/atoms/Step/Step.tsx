import React, { FC } from "react";
import styled from "styled-components";
import { StepDataProps } from "../../../variable_types/StepDataProps";

export interface StepProps {
  image: StepDataProps["image"];
}

interface MainProps {
  image: StepDataProps["image"];
}

const Main = styled.div<MainProps>`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: contain;
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
