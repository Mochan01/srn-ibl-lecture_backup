import React, { FC } from "react";
import styled from "styled-components";

export interface TextBoxProps {
  onClick?: () => void;
}

const Main = styled.div`
  background-color: #ddd;
  display: inline-block;
  cursor: pointer;
`;

export const Btn: FC<TextBoxProps> = ({ onClick }) => {
  return <Main {...{ onClick }}>答える</Main>;
};
