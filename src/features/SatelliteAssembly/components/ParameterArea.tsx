import React, { FC, useContext, useEffect } from "react";
import styled from "styled-components";
import { Parameter } from "../../../elements/Parameter";
import {
  SatelliteAssemblyStateContext,
  SatelliteAssemblyDispatchContext,
} from "../contexts";
import { MasterData, PartType } from "../types";
import { getPartDetailData } from "../utils";

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
export interface ParameterAreaProps {
  masterData: MasterData;
  maxBudget: number;
  preparationPeriod: number;
  className?: string;
  onClick?: () => void;
}

export const ParameterArea: FC<ParameterAreaProps> = ({
  masterData,
  maxBudget,
  preparationPeriod,
}) => {
  const state = useContext(SatelliteAssemblyStateContext);
  const dispatch = useContext(SatelliteAssemblyDispatchContext);

  // const rocket = getPartDetailData(masterData, state.selectedRocketID);
  // const busPart = getPartDetailData(masterData, state.selectedBusID);
  // const batteryPart = getPartDetailData(masterData, state.selectedBatteryID);
  // const missionParts = state.selectedMissionPartsIDs.map((id) => {
  //   return getPartDetailData(masterData, id);
  // });

  // const parts = [rocket, busPart, batteryPart, missionParts];

  // const getTotalPriceAndMonth = (
  //   rocket: PartType | undefined,
  //   busPart: PartType | undefined,
  //   batteryPart: PartType | undefined,
  //   missionParts: (PartType | undefined)[]
  // ) => {
  //   let totalPrice: number = 0;
  //   let totalMonth: number = 0;
  //   if (rocket) {
  //     totalPrice += rocket.price_hundred_million;
  //     totalMonth += rocket.manufacturing_period_months;
  //   }
  //   if (busPart) {
  //     totalPrice += busPart.price_hundred_million;
  //     totalMonth += busPart.manufacturing_period_months;
  //   }
  //   if (batteryPart) {
  //     totalPrice += batteryPart.price_hundred_million;
  //     totalMonth += batteryPart.manufacturing_period_months;
  //   }
  //   for (const missionPart of missionParts) {
  //     if (missionPart) {
  //       totalPrice += missionPart.price_hundred_million;
  //       totalMonth += missionPart.manufacturing_period_months;
  //     }
  //   }
  //   return { totalPrice, totalMonth };
  // };

  // const getTotalLaunchAndLoading = (
  //   busPart: PartType | undefined,
  //   batteryPart: PartType | undefined,
  //   missionParts: (PartType | undefined)[]
  // ) => {
  //   let totalLaunch: number = 0;
  //   let totalLoading: number = 0;
  //   if (busPart?.body_mass_kg) {
  //     totalLaunch += busPart.body_mass_kg;
  //   }
  //   if (batteryPart?.body_mass_kg) {
  //     totalLaunch += batteryPart.body_mass_kg;
  //     totalLoading += batteryPart.body_mass_kg;
  //   }
  //   for (const missionPart of missionParts) {
  //     if (missionPart?.body_mass_kg) {
  //       totalLaunch += missionPart.body_mass_kg;
  //       totalLoading += missionPart.body_mass_kg;
  //     }
  //   }
  //   return { totalLaunch, totalLoading };
  // };
  // const getTotalWatts = (
  //   busPart: PartType | undefined,
  //   missionParts: (PartType | undefined)[]
  // ) => {
  //   let totalWatts: number = 0;
  //   if (busPart?.required_power_watts) {
  //     totalWatts += busPart.required_power_watts;
  //   }
  //   for (const missionPart of missionParts) {
  //     if (missionPart?.required_power_watts) {
  //       totalWatts += missionPart.required_power_watts;
  //     }
  //   }
  //   return totalWatts;
  // };
  // const { totalPrice, totalMonth } = getTotalPriceAndMonth(
  //   rocket,
  //   busPart,
  //   batteryPart,
  //   missionParts
  // );
  // const { totalLaunch, totalLoading } = getTotalLaunchAndLoading(
  //   busPart,
  //   batteryPart,
  //   missionParts
  // );
  // const priceValue = totalPrice;
  // const monthValue = totalMonth;
  // const launchValue = totalLaunch;
  // // TODO:要確認
  // const launchLimit =
  //   rocket?.geo_launchable_mass_kg ||
  //   rocket?.leo_launchable_mass_kg ||
  //   rocket?.ooo_launchable_mass_kg ||
  //   0;
  // const loadingValue = totalLoading;
  // const loadingLimit = busPart?.max_loading_mass_kg || 0;
  // const wattsValue = getTotalWatts(busPart, missionParts);
  // const wattsLimit = batteryPart?.power_supply_watts || 0;

  // useEffect(() => {
  //   dispatch({ type: "isPriceOver", val: maxBudget < priceValue });
  // }, [dispatch, maxBudget, priceValue, rocket]);
  // console.log(state);

  // const tmpPriceProps = {
  //   value: priceValue,
  //   limit: maxBudget,
  //   title: "製造コスト",
  //   unit: "億円",
  // };
  // const tmpMonthsProps = {
  //   value: monthValue,
  //   limit: preparationPeriod,
  //   title: "準備期間",
  //   unit: "ヶ月",
  // };
  // const tmpLaunchProps = {
  //   value: launchValue,
  //   limit: launchLimit,
  //   title: "打ち上げ可能質量",
  //   unit: "kg",
  // };
  // const tmpLoadingProps = {
  //   value: loadingValue,
  //   limit: loadingLimit,
  //   title: "積載可能質量",
  //   unit: "kg",
  // };
  // const tmpWattsProps = {
  //   value: wattsValue,
  //   limit: wattsLimit,
  //   title: "使用可能電力",
  //   unit: "W",
  // };
  return (
    <Main>
      <STitle>ミッションの条件（上限）</STitle>
      {/* <div css={"display: flex"}>
        <Parameter {...tmpPriceProps} />
        <div css={"margin-right: 46.5px"}></div>
        <Parameter {...tmpMonthsProps} />
        <div css={"margin-right: 46.5px"}></div>
        <Parameter {...tmpLaunchProps} />
        <div css={"margin-right: 46.5px"}></div>
        <Parameter {...tmpLoadingProps} />
        <div css={"margin-right: 46.5px"}></div>
        <Parameter {...tmpWattsProps} />
      </div> */}
    </Main>
  );
};
