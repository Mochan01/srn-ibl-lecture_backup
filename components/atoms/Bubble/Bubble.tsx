import React, { FC } from "react";
import styled from "styled-components"
const speech_Bubble
  = new URL("../../../assets/prod/speech_bubble.png", import.meta.url).toString();

export interface BubbleProps {
  className?: string;
  children?: string;
}

const Main = styled.div`
  background-image: url(${ speech_Bubble });
  background-repeat: no-repeat;
  background-size: cover;
  width: 185px;
  height: 127px;
  padding: 22px 22px 40px 22px;
`;

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
  line-height: 1.4;
`;

export const Bubble: FC<BubbleProps> = ({
  className,
  children
}) => {
  return (
    <Main className={ className }>
      <Wrapper dangerouslySetInnerHTML={ { __html: children } } />
    </Main>
  );
};
