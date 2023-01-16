import React, { FC } from "react";
import styled from "styled-components";

export interface TextBoxProps {
  onChange?: (value: string) => void;
  onEnter?: () => void;
}

const Main = styled.input``;

export const TextBox: FC<TextBoxProps> = ({ onChange, onEnter }) => {
  return (
    <Main
      type="text"
      onChange={(e) => onChange && onChange(e.currentTarget.value)}
      onKeyDown={(e) => onEnter && e.key === "Enter" && onEnter()}
    />
  );
};
