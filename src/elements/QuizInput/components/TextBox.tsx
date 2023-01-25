import React, { FC, useState } from "react";
import styled from "styled-components";

export interface TextBoxProps {
  onChange?: (value: string) => void;
  onEnter?: () => void;
}

const STitle = styled.div`
  font-size: 18px;
  color: #5a5a5a;
  margin-bottom: 12px;
`;
const STextBox = styled.input`
  height: 64px;
  width: 100%;
  border-radius: 10px;
  font-size: 23px;
  color: #5a5a5a;
  padding-left: 10px;
  border: solid 1px #5a5a5a;
  background-color: #ffffff;
  &::placeholder {
    color: #a9a9a9;
  }
  :hover {
    outline: solid 2px #1a6cf1;
    border: none;
  }
  :focus {
    outline: solid 2px #1a6cf1;
    border: none;
  }
`;

export const TextBox: FC<TextBoxProps> = ({ onChange, onEnter }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <STitle css={isHover ? "color: #1a6cf1" : ""}>あなたの解答</STitle>
      <STextBox
        type="text"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        placeholder="ここに答えを入力"
        onChange={(e) => onChange && onChange(e.currentTarget.value)}
        onKeyDown={(e) => onEnter && e.key === "Enter" && onEnter()}
      />
    </>
  );
};
