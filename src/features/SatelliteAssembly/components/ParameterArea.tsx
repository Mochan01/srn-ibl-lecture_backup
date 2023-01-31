import React, { FC, useContext, useEffect } from "react";
import { Battery, Bus, Rocket } from "src-ibl-lecture-master-special/types";
import styled from "styled-components";
import { Parameter } from "../../../elements/Parameter";
import {
  SatelliteAssemblyStateContext,
  SatelliteAssemblyDispatchContext,
} from "../contexts";
import { MasterData, MissionParts } from "../types";
import {
  getBatteryParts,
  getBusParts,
  getMissionParts,
  getPartDetailData,
  getRocketParts,
  handlePartsData,
} from "../utils";

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
  const getPartsDetail = handlePartsData(masterData);

  const rocket = state.selectedRocketID
    ? getPartDetailData<Rocket>(
        getPartsDetail(getRocketParts),
        state.selectedRocketID
      )
    : undefined;
  const busPart = state.selectedBusID
    ? getPartDetailData<Bus>(getPartsDetail(getBusParts), state.selectedBusID)
    : undefined;
  const batteryPart = state.selectedBatteryID
    ? getPartDetailData<Battery>(
        getPartsDetail(getBatteryParts),
        state.selectedBatteryID
      )
    : undefined;
  const missionParts = state.selectedMissionPartsIDs.map((id) => {
    return getPartDetailData<MissionParts>(getPartsDetail(getMissionParts), id);
  });

  const getTotalPriceAndMonth = (
    rocket: Rocket | undefined,
    busPart: Bus | undefined,
    batteryPart: Battery | undefined,
    missionParts: (MissionParts | undefined)[]
  ) => {
    let totalPrice: number = 0;
    let totalMonth: number = 0;
    if (rocket) {
      totalPrice += rocket.price_hundred_million;
      totalMonth += rocket.manufacturing_period_months;
    }
    if (busPart) {
      totalPrice += busPart.price_hundred_million;
      totalMonth += busPart.manufacturing_period_months;
    }
    if (batteryPart) {
      totalPrice += batteryPart.price_hundred_million;
      totalMonth += batteryPart.manufacturing_period_months;
    }
    for (const missionPart of missionParts) {
      if (missionPart) {
        totalPrice += missionPart.price_hundred_million;
        totalMonth += missionPart.manufacturing_period_months;
      }
    }
    return { totalPrice, totalMonth };
  };

  const getTotalLaunchAndLoading = (
    busPart: Bus | undefined,
    batteryPart: Battery | undefined,
    missionParts: (MissionParts | undefined)[]
  ) => {
    let totalLaunch: number = 0;
    let totalLoading: number = 0;
    if (busPart?.body_mass_kg) {
      totalLaunch += busPart.body_mass_kg;
    }
    if (batteryPart?.body_mass_kg) {
      totalLaunch += batteryPart.body_mass_kg;
      totalLoading += batteryPart.body_mass_kg;
    }
    for (const missionPart of missionParts) {
      if (missionPart?.body_mass_kg) {
        totalLaunch += missionPart.body_mass_kg;
        totalLoading += missionPart.body_mass_kg;
      }
    }
    return { totalLaunch, totalLoading };
  };
  const getTotalWatts = (
    busPart: Bus | undefined,
    missionParts: (MissionParts | undefined)[]
  ) => {
    let totalWatts: number = 0;
    if (busPart?.required_power_watts) {
      totalWatts += busPart.required_power_watts;
    }
    for (const missionPart of missionParts) {
      if (missionPart?.required_power_watts) {
        totalWatts += missionPart.required_power_watts;
      }
    }
    return totalWatts;
  };
  const { totalPrice, totalMonth } = getTotalPriceAndMonth(
    rocket,
    busPart,
    batteryPart,
    missionParts
  );
  const { totalLaunch, totalLoading } = getTotalLaunchAndLoading(
    busPart,
    batteryPart,
    missionParts
  );
  const priceValue = totalPrice;
  const monthValue = totalMonth;
  const launchValue = totalLaunch;
  // TODO:要確認
  const launchLimit =
    rocket?.geo_launchable_mass_kg ||
    rocket?.leo_launchable_mass_kg ||
    rocket?.ooo_launchable_mass_kg ||
    0;
  const loadingValue = totalLoading;
  const loadingLimit = busPart?.max_loading_mass_kg || 0;
  const wattsValue = getTotalWatts(busPart, missionParts);
  const wattsLimit = batteryPart?.power_supply_watts || 0;

  // costOverのフラグを判定する
  useEffect(() => {
    dispatch({ type: "isPriceOver", val: maxBudget < priceValue });
    dispatch({ type: "isMonthOver", val: preparationPeriod < totalMonth });
    dispatch({
      type: "isLaunchOver",
      val: launchLimit === 0 ? false : launchLimit < launchValue,
    });
    dispatch({
      type: "isLoadingOver",
      val: loadingLimit === 0 ? false : loadingLimit < loadingValue,
    });
    dispatch({
      type: "isWattsOver",
      val: wattsLimit === 0 ? false : wattsLimit < wattsValue,
    });
  }, [
    dispatch,
    launchLimit,
    launchValue,
    loadingLimit,
    loadingValue,
    maxBudget,
    preparationPeriod,
    priceValue,
    rocket,
    totalMonth,
    wattsLimit,
    wattsValue,
  ]);
  console.log(state);

  const PriceProps = {
    value: priceValue,
    limit: maxBudget,
    title: "製造コスト",
    unit: "億円",
  };
  const MonthsProps = {
    value: monthValue,
    limit: preparationPeriod,
    title: "準備期間",
    unit: "ヶ月",
  };
  const LaunchProps = {
    value: launchValue,
    limit: launchLimit,
    title: "打ち上げ可能質量",
    unit: "kg",
  };
  const LoadingProps = {
    value: loadingValue,
    limit: loadingLimit,
    title: "積載可能質量",
    unit: "kg",
  };
  const WattsProps = {
    value: wattsValue,
    limit: wattsLimit,
    title: "使用可能電力",
    unit: "W",
  };
  return (
    <Main>
      <STitle>ミッションの条件（上限）</STitle>
      <div css={"display: flex"}>
        <Parameter {...PriceProps} />
        <div css={"margin-right: 46.5px"}></div>
        <Parameter {...MonthsProps} />
        <div css={"margin-right: 46.5px"}></div>
        <Parameter {...LaunchProps} />
        <div css={"margin-right: 46.5px"}></div>
        <Parameter {...LoadingProps} />
        <div css={"margin-right: 46.5px"}></div>
        <Parameter {...WattsProps} />
      </div>
    </Main>
  );
};
