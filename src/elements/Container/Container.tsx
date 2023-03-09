import React, { FC, ReactNode } from "react";
import styled from "styled-components";

export interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const Main = styled.div`
  width: 1920px;
  height: 1080px;
  position: relative;
`;

export const Container: FC<ContainerProps> = (props) => <Main {...props} />;
