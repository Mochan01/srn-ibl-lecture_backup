import React, { FC } from "react";
import styled from "styled-components";
import { useTimeout, UseTimeoutProps } from "../../../hooks/useTimeout";

export interface TimerProps extends UseTimeoutProps {
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

export const Timer: FC<TimerProps> = ({
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
