import React, { FC, ReactNode } from "react";
import styled from "styled-components";
const ImageTitle = new URL(
  "../../assets/prod/lecture_title.png",
  import.meta.url
).toString();

export interface TitleBaseProps {
  className?: string;
  children?: ReactNode;
}

const Main = styled.div`
  width: 1007px;
  height: 468px;
  background-image: url(${ImageTitle});
  /* lecture_title_base.png */
  background-position: 0 0;
  background-repeat: no-repeat;
  position: relative;
  margin-bottom: 32px;
`;

const Wrapper = styled.div`
  position: absolute;
  padding: 40px 32px;
  width: 575px;
  height: 345px;
  left: 389px;
  top: 81px;
  overflow: hidden;
`;

export const TitleBase: FC<TitleBaseProps> = ({ children, ...props }) => {
  return (
    <Main {...props}>
      <Wrapper>{children}</Wrapper>
    </Main>
  );
};
