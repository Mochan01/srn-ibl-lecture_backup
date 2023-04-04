import React, { FC } from "react";
import styled from "styled-components";

export interface PartCostProps {
  cost_name: string;
  cost: number;
  isCostOver: boolean;
  className?: string;
}

const Main = styled.div`
  width: 312px;
  height: 40px;
  display: grid;
  border: 1px solid #bcbcbc;
  display: flex;
`;

const SCell = styled.div<Pick<PartCostProps, "isCostOver">>`
  color: ${({ isCostOver }) => (isCostOver ? "#FF0000" : "#5a5a5a")};
  font-size: 20px;
  display: flex;
  align-items: center;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
`;

/**
 * パーツのコストを表示する
 * @param cost_name 最大文字の表記：打ち上げ可能質量(kg)
 * @param cost 最大桁数：5
 */
export const PartCost: FC<PartCostProps> = ({
  cost_name,
  cost,
  isCostOver,
  ...props
}) => (
  <Main {...props}>
    <SCell
      {...{ isCostOver }}
      css="padding-left: 4px; border-right: 1px solid #bcbcbc; flex-grow: 1;"
    >
      {cost_name}
    </SCell>
    <SCell {...{ isCostOver }} css="width: 90px; justify-content: center;">
      {cost}
    </SCell>
  </Main>
);
