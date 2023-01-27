import React, { FC } from "react";
import styled from "styled-components";
import { Parameter } from "../../../elements/Parameter";

const tmpPriceProps = {
  value: 50000,
  limit: 10000,
  title: "製造コスト",
  unit: "億円",
};
const tmpMonthsProps = {
  value: 50,
  limit: 100,
  title: "準備期間",
  unit: "ヶ月",
};
const tmpLaunchProps = {
  value: 50,
  limit: 100,
  title: "打ち上げ可能質量",
  unit: "kg",
};
const tmpLoadingProps = {
  value: 50,
  limit: 100,
  title: "積載可能質量",
  unit: "kg",
};
const tmpWattsProps = {
  value: 50,
  limit: 100,
  title: "使用可能電力",
  unit: "W",
};

const Main = styled.div`
  padding-left: 12px;
  padding-top: 12px;
`;
const STitle = styled.div`
  color: #5a5a5a;
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 10px;
`;
export interface MissionConditionsProps {
  className?: string;
  onClick?: () => void;
}

export const MissionConditions: FC<MissionConditionsProps> = (props) => {
  return (
    <Main>
      <STitle>ミッションの条件（上限）</STitle>
      <div css={"display: flex"}>
        <Parameter {...tmpPriceProps} />
        <div css={"margin-right: 46.5px"}></div>
        <Parameter {...tmpMonthsProps} />
        <div css={"margin-right: 46.5px"}></div>
        <Parameter {...tmpLaunchProps} />
        <div css={"margin-right: 46.5px"}></div>
        <Parameter {...tmpLoadingProps} />
        <div css={"margin-right: 46.5px"}></div>
        <Parameter {...tmpWattsProps} />
      </div>
    </Main>
  );
};
