import React, { FC } from "react";
import styled from "styled-components";

export interface PartsSelectSliderProps {
  images: string[];
  onSelect?: (index: number) => void;
  className?: string;
}

const Main = styled.div``;

/**
 * 特別レクチャー(衛生組み立て画面）のパーツセレクト部分のスライダー
 */
export const PartsSelectSlider: FC<PartsSelectSliderProps> = (props) => {
  return (
    <>
      <Main />
    </>
  );
};
