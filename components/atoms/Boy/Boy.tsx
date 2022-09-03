import React, { FC } from "react";
import styled from "styled-components";
import { useTimeout, UseTimeoutProps } from "../../../hooks/useTimeout";

export interface BoyProps extends UseTimeoutProps {
}

interface MainProps {
}

const Main = styled.div.attrs<MainProps>(
  (props) => ({
    style: {
    }
  })
)<MainProps>`
`;

export const Boy: FC<BoyProps> = ({
  duration,
  onEnd
}) => {

  useTimeout({ duration, onEnd });

  return (
    <>
      <Main />
    </>
  );
};
