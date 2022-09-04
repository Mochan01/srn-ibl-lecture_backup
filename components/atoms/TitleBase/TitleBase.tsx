import React, { FC } from "react";
import styled from "styled-components";

export interface TitleBaseProps {
  unitName: string;
  unitTitle: string;
}

const Main = styled.div`
  width: 700px;
  height: 327px;
  background-image: url("lecture_title_base.png");
  position: relative;
`;

const CommentArea = styled.div`
  position: absolute;
  padding: 40px 32px;
  width: 400px;
  height: 240px;
  left: 270px;
  top: 56px;
  overflow: hidden;
  h1 {
    font-size: 24px;
    line-height: 1;
    margin-bottom: 40px;
    color: #1a6cf1;
    font-weight: bold;
  }
  h2 {
    font-size: 16px;
    color: #5a5a5a;
  }
`;

export const TitleBase: FC<TitleBaseProps> = ({
  unitName,
  unitTitle
}) => {
  return (
    <Main>
      <CommentArea>
        <h1>{ unitName }</h1>
        <h2>{ unitTitle }</h2>
      </CommentArea>
    </Main>
  );
};
