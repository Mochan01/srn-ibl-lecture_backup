import React, { FC } from "react";
import styled from "styled-components";

export interface PartsSelectTabProps {
  onChange?: (index: number) => void;
  className?: string;
}

const Main = styled.div``;

/**
 * 特別レクチャーのパーツセレクト部分のタブ
 */
export const PartsSelectTab: FC<PartsSelectTabProps> = (props) => {
  return (
    <>
      <Main />
    </>
  );
};
