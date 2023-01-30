import React, { FC } from "react";
import styled from "styled-components";
import { PartCost } from "../../../elements/PartCost";
import { PartDetail } from "../../../elements/PartDetail";
const Main = styled.div`
  padding-left: 20px;
  padding-top: 12px;
`;

const STable = styled.div`
  width: 640px;
  height: 40px;
  display: grid;
  column-gap: 16px;
  row-gap: 7px;
  grid-template-columns: 312px 312px;
`;

const SCategoryTitle = styled.div`
  color: #5a5a5a;
  font-size: 18px;
  line-height: 24px;
`;
const SCategoryDescription = styled.div`
  color: #5a5a5a;
  font-size: 16px;
  line-height: 24px;
`;

const tmpPartCostProps = {
  cost_name: "価格（億円）",
  cost: 20000,
  isCostOver: false,
};
const tmpPartDetailProps = {
  part_name:
    "地上の携帯電話や小型発信機との通信装置+地上の小型発信機1000個セット",
  description:
    "地上のGPS受信機で得た位置情報を衛星が受信する専用の装置と地上で使用するGPS受信機1000個のセット",
};
export const PartDetailUnit: FC = () => {
  const categoryTitle = "ロケット";
  const categoryDescription = "衛星を軌道まで打ち上げるための輸送機";
  return (
    <Main>
      <SCategoryTitle>{categoryTitle}</SCategoryTitle>
      <SCategoryDescription>{categoryDescription}</SCategoryDescription>
      <PartDetail {...tmpPartDetailProps} />
      <div css={"margin-top: 7px"} />
      <STable>
        <PartCost {...tmpPartCostProps} />
        <PartCost {...tmpPartCostProps} />
        <PartCost {...tmpPartCostProps} />
        <PartCost {...tmpPartCostProps} />
        <PartCost {...tmpPartCostProps} />
      </STable>
    </Main>
  );
};
