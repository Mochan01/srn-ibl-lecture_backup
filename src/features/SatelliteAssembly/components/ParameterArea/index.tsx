import React, { FC } from "react";
import styled from "styled-components";
import { MasterData } from "../../types";
import {
  LaunchParameter,
  LoadingParameter,
  MonthsParameter,
  PriceParameter,
  WattsParameter,
} from "./components";

export interface ParameterAreaProps {
  masterData: MasterData;
  maxBudget: number;
  preparationPeriod: number;
}

const backGroundWhiteColor = "#fafbfd " as const;

const Main = styled.div`
  height: 210px;
  width: 680px;
  background-color: ${backGroundWhiteColor};
  padding-left: 12px;
  padding-top: 12px;
`;
const STitle = styled.div`
  color: #5a5a5a;
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 10px;
`;

export const ParameterArea: FC<ParameterAreaProps> = ({
  masterData,
  maxBudget,
  preparationPeriod,
}) => (
  <Main>
    <STitle>ミッションの条件（上限）</STitle>
    <div css={"display: flex"}>
      <PriceParameter {...{ masterData, maxBudget }} />
      <div css={"margin-right: 46.5px"}></div>
      <MonthsParameter {...{ masterData, preparationPeriod }} />
      <div css={"margin-right: 46.5px"}></div>
      <LaunchParameter {...{ masterData }} />
      <div css={"margin-right: 46.5px"}></div>
      <LoadingParameter {...{ masterData }} />
      <div css={"margin-right: 46.5px"}></div>
      <WattsParameter {...{ masterData }} />
    </div>
  </Main>
);
