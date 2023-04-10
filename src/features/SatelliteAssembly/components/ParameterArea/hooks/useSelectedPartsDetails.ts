import { useContext } from "react";
import { SatelliteAssemblyStateContext } from "../../../contexts";
import { MasterData } from "../../../types";
import { Battery, Bus, Rocket } from "src-ibl-lecture-master-special/types";
import {
  getBatteryParts,
  getBusParts,
  getMissionParts,
  getPartDetailData,
  getRocketParts,
  handlePartsData,
} from "../../../utils";
import { MissionParts } from "../../../types";

/**
 * 選択されたパーツの詳細データを取得するカスタムフック
 * @param {MasterData} masterData - マスターデータ
 * @returns {object} 選択されたパーツの詳細データ
 */
export const useSelectedPartsDetails = (masterData: MasterData) => {
  const state = useContext(SatelliteAssemblyStateContext);
  const getPartsDetail = handlePartsData(masterData);

  // 選択されたロケットの詳細データを取得
  const rocket = state.selectedRocketID
    ? getPartDetailData<Rocket>(
        getPartsDetail(getRocketParts),
        state.selectedRocketID
      )
    : undefined;

  // 選択されたバスパーツの詳細データを取得
  const busPart = state.selectedBusID
    ? getPartDetailData<Bus>(getPartsDetail(getBusParts), state.selectedBusID)
    : undefined;

  // 選択されたバッテリーパーツの詳細データを取得
  const batteryPart = state.selectedBatteryID
    ? getPartDetailData<Battery>(
        getPartsDetail(getBatteryParts),
        state.selectedBatteryID
      )
    : undefined;

  // 選択されたミッションパーツの詳細データを取得
  const missionParts = state.selectedMissionPartsIDs.map((id) => {
    return getPartDetailData<MissionParts>(getPartsDetail(getMissionParts), id);
  });

  return { missionParts, batteryPart, busPart, rocket };
};
