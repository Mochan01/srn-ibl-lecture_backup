import React, { FC, ReactElement, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useResizeWindow } from "../../../hooks/useResizeWindow";

export interface ScaleWrapperProps {
  children: ReactElement;
}

const Wrapper = styled.div`
  background: #000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

interface ContainerProps { $scale: number; };
const Container = styled.div.attrs<ContainerProps>(
  ({ $scale }) => ({ style: { transform: `scale(${ $scale })` } })
)<ContainerProps>``;

export const ScaleWrapper: FC<ScaleWrapperProps> = ({
  children
}) => {

  const [windowWidth, windowHeight] = useResizeWindow();
  const ref = useRef<HTMLDivElement>();
  const [$scale, setScale] = useState(1);

  useEffect(() => {

    const { clientWidth, clientHeight } = ref.current.children[0];

    const windowRatio = windowHeight / windowWidth;
    const clientRatio = clientHeight / clientWidth;

    const scale = windowRatio > clientRatio
      ? windowWidth / clientWidth
      : windowHeight / clientHeight;

    setScale(Math.floor(scale * 1000) / 1000);

  }, [windowWidth, windowHeight, ref.current]);

  return (
    <Wrapper>
      <Container { ...{ ref, $scale } }>
        { children }
      </Container>
    </Wrapper>
  );
};
