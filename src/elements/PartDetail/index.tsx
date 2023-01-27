import React, { FC } from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 640px;
  display: grid;
  grid-template-columns: 73px 567px;
  grid-template-rows: 48px 72px;
  border: 1px solid #bcbcbc;
`;

const SCell = styled.div`
  padding: 8px;
  align-items: center;
  color: #5a5a5a;
  font-size: 16px;
  line-height: 23px;
  font-family: "UD デジタル 教科書体 N-B";
  display: flex;
`;
export interface PartDetailProps {
  part_name: string;
  description: string;
  className?: string;
}

/**
 * パーツの詳細
 */
export const PartDetail: FC<PartDetailProps> = ({ part_name, description }) => {
  return (
    <Main>
      <SCell
        css={
          "border-right: 1px solid #bcbcbc; border-bottom: 1px solid #bcbcbc; justify-content: center"
        }
      >
        機器名
      </SCell>
      <SCell css={"border-bottom: 1px solid #bcbcbc;"}>{part_name}</SCell>
      <SCell css={"border-right: 1px solid #bcbcbc; justify-content: center"}>
        説明
      </SCell>
      <SCell>{description}</SCell>
    </Main>
  );
};
