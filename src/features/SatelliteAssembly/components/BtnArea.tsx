import React, { FC, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { LaunchBtn } from "../../../elements/LaunchBtn";
import { ResetBtn } from "../../../elements/ResetBtn";
import {
  SatelliteAssemblyStateContext,
  SatelliteAssemblyDispatchContext,
} from "../contexts";
import { SAVED_PARTS } from "../../../config";
const Main = styled.div`
  height: 59px;
  width: 680px;
  display: flex;
  justify-content: space-between;
`;

export const BtnArea: FC = () => {
  const [variant, setVariant] = useState<"OFF" | "BEFORE" | "AFTER">("OFF");
  const state = useContext(SatelliteAssemblyStateContext);
  const dispatch = useContext(SatelliteAssemblyDispatchContext);

  // ボタンの状態を管理
  useEffect(() => {
    // 全てのパーツが選択されていない場合はreturn
    if (
      state.selectedMissionPartsIDs.length === 0 ||
      !state.selectedBatteryID ||
      !state.selectedBusID ||
      !state.selectedRocketID
    ) {
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
  }, [
    state.isLaunchOver,
    state.isLoadingOver,
    state.isMonthOver,
    state.isPriceOver,
    state.isWattsOver,
    state.selectedBatteryID,
    state.selectedBusID,
    state.selectedMissionPartsIDs.length,
    state.selectedRocketID,
  ]);

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
    // TODO: 画面遷移処理を実装
  };

  return (
    <Main>
      <ResetBtn onClick={handleReset} />
      <LaunchBtn variant={variant} onClick={handleLaunch} />
    </Main>
  );
};
