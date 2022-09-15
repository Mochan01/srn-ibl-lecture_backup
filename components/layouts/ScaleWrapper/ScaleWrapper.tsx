import React, { FC, ReactElement, useEffect } from "react";
import styled from "styled-components";
import { useGetAxis } from "../../../hooks/useGetAxis";

export interface ScaleWrapperProps {
  children: ReactElement;
}

interface MainProps {
}

const Main = styled.div.attrs<MainProps>(
  (props) => ({
    style: {
    }
  })
)<MainProps>`
  background: #000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ScaleWrapper: FC<ScaleWrapperProps> = ({
  children
}) => {

  const axis = useGetAxis();

  useEffect(() => {
    console.log(axis);
  }, [axis]);

  return (
    <Main>
      { children }
    </Main>
  );
};
