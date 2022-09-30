import React, { FC } from "react";
import styled from "styled-components"
const ImageCommon = new URL("../../../assets/prod/close_character_spritesheet.png", import.meta.url).toString();

export interface BubbleProps {
  className?: string;
  children?: string;
}

const Main = styled.div`
  background-image: url(${ ImageCommon });
  background-repeat: no-repeat;
  background-position: 0 -4851px;
  width: 293px;
  height: 221px;
  padding: 40px 40px 70px 40px;
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
