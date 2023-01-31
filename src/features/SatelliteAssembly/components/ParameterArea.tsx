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
  getTotalLaunchAndLoading,
  getTotalPriceAndMonth,
  getTotalWatts,
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

  const { totalPrice, totalMonth } = getTotalPriceAndMonth(
    missionParts,
    batteryPart,
    busPart,
    rocket
  );

  const { totalLaunch, totalLoading } = getTotalLaunchAndLoading(
    missionParts,
    batteryPart,
    busPart
  );

  const launchLimit =
    rocket?.geo_launchable_mass_kg ||
    rocket?.leo_launchable_mass_kg ||
    rocket?.ooo_launchable_mass_kg ||
    0;

  const loadingLimit = busPart?.max_loading_mass_kg || 0;
  const wattsValue = getTotalWatts(missionParts, busPart);
  const wattsLimit = batteryPart?.power_supply_watts || 0;

  // costOverのフラグを判定する
  useEffect(() => {
    dispatch({ type: "isPriceOver", val: maxBudget < totalPrice });
    dispatch({ type: "isMonthOver", val: preparationPeriod < totalMonth });
    dispatch({
      type: "isLaunchOver",
      val: launchLimit === 0 ? false : launchLimit < totalLaunch,
    });
    dispatch({
      type: "isLoadingOver",
      val: loadingLimit === 0 ? false : loadingLimit < totalLoading,
    });
    dispatch({
      type: "isWattsOver",
      val: wattsLimit === 0 ? false : wattsLimit < wattsValue,
    });
  }, [
    dispatch,
    launchLimit,
    loadingLimit,
    maxBudget,
    preparationPeriod,
    totalLaunch,
    totalLoading,
    totalMonth,
    totalPrice,
    wattsLimit,
    wattsValue,
  ]);
  console.log(state);

  const PriceProps = {
    value: totalPrice,
    limit: maxBudget,
    title: "製造コスト",
    unit: "億円",
  };
  const MonthsProps = {
    value: totalMonth,
    limit: preparationPeriod,
    title: "準備期間",
    unit: "ヶ月",
  };
  const LaunchProps = {
    value: totalLaunch,
    limit: launchLimit,
    title: "打ち上げ可能質量",
    unit: "kg",
  };
  const LoadingProps = {
    value: totalLoading,
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
