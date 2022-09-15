import React, { FC, ReactElement, useEffect } from "react";
import styled from "styled-components";
import { useGetWider } from "../../../hooks/useGetWider";

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

  const wider = useGetWider();

  useEffect(() => {
    console.log(wider);
  }, [wider]);

  return (
    <Main>
      { children }
    </Main>
  );
};
