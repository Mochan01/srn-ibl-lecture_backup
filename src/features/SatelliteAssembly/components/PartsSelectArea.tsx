import React, { FC, useContext } from "react";
import { MissionList } from "src-ibl-lecture-master-special/types";
import styled from "styled-components";
import {
  BatterySelectArea,
  BusSelectArea,
  MissionPartsSelectArea,
  RocketSelectArea,
} from "../components";
import { PartsSelectTab } from "../../../elements/PartsSelectTab";
import {
  SatelliteAssemblyDispatchContext,
  SatelliteAssemblyStateContext,
} from "../contexts";
import { SatelliteAssemblyAction } from "../hooks";
import { MasterData } from "../types";
import {
  getBatteryIDs,
  getBusIDs,
  getRocketIDs,
  getMissionPartsIDs,
  handleMissionDataIDs,
} from "../utils";
import { backGroundWhiteColor } from "../config";

const ImageAlert = new URL(
  "../../../assets/prod/icon_alert.png",
  import.meta.url
).toString();
const Main = styled.div`
  position: relative;
`;

const SAlertImage = styled.img`
  height: 25px;
  width: 25px;
  top: -12px;
  left: 140px;
  position: absolute;
  z-index: 1;
`;
const SSelectArea = styled.div`
  background-color: ${backGroundWhiteColor};
  height: 490px;
  width: 680px;
`;
interface PartsSelectAreaProps {
  missionData: MissionList;
  masterData: MasterData;
}

// パーツを選択する部分のエリア
export const PartsSelectArea: FC<PartsSelectAreaProps> = ({
  missionData,
  masterData,
}) => {
  const state = useContext(SatelliteAssemblyStateContext);
  const dispatch = useContext(SatelliteAssemblyDispatchContext);
  const getIDs = handleMissionDataIDs(missionData);

  console.log("state", state);

  // tabがクリックされた時の処理
  const onTabChange = (index: number) => {
    let action: SatelliteAssemblyAction;
    // 選択済みのパーツが無い場合は一番最初のパーツを黄色の枠線で囲む
    switch (index) {
      // ミッションパーツ
      case 0:
        action = {
          type: "selectedPartID",
          val:
            state.selectedMissionPartsIDs.length !== 0
              ? state.selectedMissionPartsIDs[0]
              : getIDs(getMissionPartsIDs)[0],
        };
        break;
      // 電源パーツ
      case 1:
        action = {
          type: "selectedPartID",
          val: state.selectedBatteryID
            ? state.selectedBatteryID
            : getIDs(getBatteryIDs)[0],
        };
        break;
      // 積載パーツ
      case 2:
        action = {
          type: "selectedPartID",
          val: state.selectedBusID ? state.selectedBusID : getIDs(getBusIDs)[0],
        };
        break;
      // 打ち上げロケット
      case 3:
        action = {
          type: "selectedPartID",
          val: state.selectedRocketID
            ? state.selectedRocketID
            : getIDs(getRocketIDs)[0],
        };
        break;
      default:
        return;
    }
    dispatch(action);
    dispatch({ type: "tabIndex", val: index });
  };

  return (
    <Main>
      <SAlertImage src={ImageAlert} />
      <PartsSelectTab index={state.tabIndex} onChange={onTabChange} />
      <SSelectArea>
        {state.tabIndex === 0 && (
          <MissionPartsSelectArea {...{ missionData, masterData }} />
        )}
        {state.tabIndex === 1 && (
          <BatterySelectArea {...{ missionData, masterData }} />
        )}
        {state.tabIndex === 2 && (
          <BusSelectArea {...{ missionData, masterData }} />
        )}
        {state.tabIndex === 3 && (
          <RocketSelectArea {...{ missionData, masterData }} />
        )}
      </SSelectArea>
    </Main>
  );
};
