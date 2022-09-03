import React, { FC } from "react";
import styled from "styled-components";

export interface UnitTitleProps {
  unitName: string;
  unitTitle: string;
}

const Main = styled.div`
  background-color: #005fa8;
  padding: 10px;
  display: flex;
  align-items: center;
`;

const Comment = styled.p<{ fz: number }>`
  font-size: ${ ({ fz }) => fz }px;
  color: #fff;
  line-height: 1;
  white-space: nowrap;
`;

export const UnitTitle: FC<UnitTitleProps> = ({
  unitName,
  unitTitle
}) => {
  return (
    <>
      <Main>
        <Comment fz={ 16 }>{ unitName }</Comment>
        &nbsp;&nbsp;
        <Comment fz={ 21 }>{ unitTitle }</Comment>
      </Main>
    </>
  );
};
