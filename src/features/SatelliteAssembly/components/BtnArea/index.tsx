import React, { FC, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { LaunchBtn } from "../../../../elements/LaunchBtn";
import { ResetBtn } from "../../../../elements/ResetBtn";
import {
  SatelliteAssemblyStateContext,
  SatelliteAssemblyDispatchContext,
} from "../../contexts";
import { SAVED_PARTS } from "../../../../config";
import { MasterData } from "../../types";
import { getCategoryID } from "../../utils";
import { isAllSelected } from "./utils";
import { MissionList } from "src-ibl-lecture-master-special/types";

export interface BtnAreaProps {
  masterData: MasterData;
  requiredCategory: MissionList["required_category"];
  onClick?: () => void;
}

const Main = styled.div`
  height: 59px;
  width: 680px;
  display: flex;
  justify-content: space-between;
`;

export const BtnArea: FC<BtnAreaProps> = ({
  masterData,
  requiredCategory,
  onClick,
}) => {
  const [variant, setVariant] = useState<"OFF" | "BEFORE" | "AFTER">("OFF");
  const state = useContext(SatelliteAssemblyStateContext);
  const dispatch = useContext(SatelliteAssemblyDispatchContext);

  // ボタンの状態を管理
  useEffect(() => {
    // 全てのパーツが選択されていない場合はreturn
    if (isAllSelected(requiredCategory, state, getCategoryID(masterData))) {
      setVariant("OFF");
      return;
    }
    // 一つでもコストがオーバーしている場合はreturn
    if (
      state.isPriceOver ||
      state.isMonthOver ||
      state.isLaunchOver ||
      state.isLoadingOver ||
      state.isWattsOver
    ) {
      setVariant("OFF");
      return;
    }
    // 条件を満たしている場合は押下可能にする
    setVariant("BEFORE");
  }, [requiredCategory, state, masterData]);

  // 全ての選択状態をリセットする
  const handleReset = () => {
    dispatch({ type: "selectedMissionPartsIDs", val: [] });
    dispatch({ type: "selectedBatteryID", val: undefined });
    dispatch({ type: "selectedBusID", val: undefined });
    dispatch({ type: "selectedRocketID", val: undefined });
  };

  // 打ち上げ開始ボタンが押下された場合の処理
  const handleLaunch = () => {
    // 各パーツIDをローカルストレージに保存する
    typeof window !== "undefined" &&
      localStorage.setItem(
        SAVED_PARTS,
        JSON.stringify({
          missionPartsIDs: state.selectedMissionPartsIDs,
          rocketID: state.selectedRocketID,
          busID: state.selectedBusID,
          batteryID: state.selectedBatteryID,
        })
      );
    setVariant("AFTER");

    onClick && onClick();
  };

  return (
    <Main>
      <ResetBtn onClick={handleReset} />
      <LaunchBtn variant={variant} onClick={handleLaunch} />
    </Main>
  );
};
