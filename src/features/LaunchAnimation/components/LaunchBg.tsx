import React, { FC } from "react";
import styled from "styled-components";

export interface LaunchBgProps {
  img: string;
}

const Main = styled.div<LaunchBgProps>(
  ({ img }) => `
  background-image: url(${img});
  width: 960px;
  height: 540px;
`
);

export const LaunchBg: FC<LaunchBgProps> = (props) => <Main {...props} />;
