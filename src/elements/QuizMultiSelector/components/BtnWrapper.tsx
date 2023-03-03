import React, { FC, ReactNode, useContext } from "react";
import { SIZE } from "../../../data/SIZE";
import styled from "styled-components";
import { QuizMultiSelectorProviderContext } from "../providers";

export interface BtnWrapper {
  children?: ReactNode;
  className?: string;
}

const Main = styled.div<{ isAnswer: boolean }>(
  ({ isAnswer }) => `
  // 回答したらインタラクションできなくする
  pointer-events: ${isAnswer ? "none" : "auto"};
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 246px);
  column-gap: ${SIZE.QUIZ_COLUMN_G}px;
  row-gap: ${SIZE.QUIZ_ROW_G}px;
`
);

/**
 * ボタンを囲むラッパー要素
 * @param props
 * @returns
 */
export const BtnWrapper: FC<BtnWrapper> = (props) => {
  const [{ isAnswer }] = useContext(QuizMultiSelectorProviderContext);
  return <Main {...props} {...{ isAnswer }} />;
};
