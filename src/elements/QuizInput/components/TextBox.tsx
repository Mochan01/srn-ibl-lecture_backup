import React, { FC, useRef, useState } from "react";
import styled from "styled-components";

export interface TextBoxProps {
  onChange?: (value: string) => void;
  onEnter?: () => void;
}

const STitle = styled.div`
  font-size: 18px;
  font-family: "UD デジタル 教科書体 N-B";
  color: #5a5a5a;
`;
const STextBox = styled.input`
  height: 48px;
  width: 256px;
  font-family: "UD デジタル 教科書体 N-B";
  border-radius: 10px;
  font-size: 23px;
  color: #5a5a5a;
  padding-left: 16px;
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
  // タイトルの色を変えるための状態管理
  const [isHover, setIsHover] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  // 入力文字が確定しているかの状態管理(変換前かどうか)
  const [isComposing, setIsComposing] = useState(false);
  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isComposing) {
      // 変換のためのエンターキー押下のときはここに到達しない
      e.preventDefault();
      onEnter && onEnter();

      // enterで回答した場合に編集できるためfocusを外す
      inputRef.current?.blur();
    }
  };

  return (
    <>
      {/* hover時とfocus時には色を変える */}
      <STitle css={isHover || isFocus ? "color: #1a6cf1" : ""}>
        あなたの解答
      </STitle>
      <div css={"margin-bottom: 12px"}></div>
      <STextBox
        type="text"
        ref={inputRef}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        placeholder="ここに答えを入力"
        onChange={(e) => onChange && onChange(e.currentTarget.value)}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
        onKeyDown={onKeyDownHandler}
      />
    </>
  );
};
