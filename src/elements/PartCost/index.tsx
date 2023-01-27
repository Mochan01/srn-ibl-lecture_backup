import React, { FC } from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 312px;
  height: 40px;
  display: grid;
  grid-template-columns: 256px 56px;
  border: 1px solid #bcbcbc;
`;

const SCell = styled.div<Pick<PartCostProps, "isCostOver">>`
  align-items: center;
  color: ${({ isCostOver }) => (isCostOver ? "#FF0000" : "#5a5a5a")};
  padding-left: 4px;
  font-size: 20px;
  font-family: "UD デジタル 教科書体 N-B";
  display: flex;
  letter-spacing: 0px;
`;
export interface PartCostProps {
  cost_name: string;
  cost: number;
  isCostOver: boolean;
  className?: string;
}

/**
 * パーツのコストを表示する
 */
export const PartCost: FC<PartCostProps> = ({
  cost_name,
  cost,
  isCostOver,
}) => {
  return (
    <Main>
      <SCell isCostOver={isCostOver} css={"border-right: 1px solid #bcbcbc;"}>
        {cost_name}
      </SCell>
      <SCell isCostOver={isCostOver}>{cost}</SCell>
    </Main>
  );
};
