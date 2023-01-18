import React, { FC, ReactNode } from "react";
import styled from "styled-components";

export interface ParameterProps {
  value: number;
  limit: number;
  unit: number;
  children?: ReactNode;
  className?: string;
}

const Main = styled.div``;

/**
 * 特別レクチャーのパラメータ
 */
export const Parameter: FC<ParameterProps> = (props) => {
  return (
    <>
      <Main />
    </>
  );
};
