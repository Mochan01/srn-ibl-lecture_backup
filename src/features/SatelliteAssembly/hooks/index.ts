import { useReducer, Reducer } from "react";

export interface SatelliteAssemblyState {
  // 選択済みの各パーツＩＤ
  selectedMissionPartsIDs?: string[];
  selectedRocketID?: string;
  selectedBusID?: string;
  selectedBatteryID?: string;
  // 黄色の枠線が付くパーツID
  selectedPartID?: string | undefined;
  tabIndex: number;
}

export type SatelliteAssemblyAction =
  | { type: "selectedMissionPartsIDs"; val: string[] }
  | { type: "selectedRocketID"; val: string }
  | { type: "selectedBusID"; val: string }
  | { type: "selectedBatteryID"; val: string }
  | { type: "selectedPartID"; val: string | undefined }
  | { type: "tabIndex"; val: number };

const reducer = (
  state: SatelliteAssemblyState,
  action: SatelliteAssemblyAction
) => {
  switch (action.type) {
    case "selectedMissionPartsIDs":
      return { ...state, selectedMissionPartsIDs: action.val };
    case "selectedRocketID":
      return { ...state, selectedRocketID: action.val };
    case "selectedBusID":
      return { ...state, selectedBusID: action.val };
    case "selectedBatteryID":
      return { ...state, selectedBatteryID: action.val };
    case "selectedPartID":
      return { ...state, selectedPartID: action.val };
    case "tabIndex":
      return { ...state, tabIndex: action.val };
  }
};

/**
 * ルーブリック設定に必要なデータの状態管理
 * @returns
 */
export const useSatelliteAssemblyReducer = (
  initialValue: SatelliteAssemblyState
) =>
  useReducer<Reducer<SatelliteAssemblyState, SatelliteAssemblyAction>>(
    reducer,
    initialValue
  );
