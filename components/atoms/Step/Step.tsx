import React, { FC } from "react";
import styled from "styled-components";

export interface StepProps {
  $src: string;
}

const Main = styled.div<StepProps>`
  background-image: url(${({ $src }) => $src});
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
  $src
}) => {
  return (
    <>
      <Main $src={ $src } />
    </>
  );
};
