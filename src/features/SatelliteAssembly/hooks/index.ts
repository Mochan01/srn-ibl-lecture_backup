import { useReducer, Reducer } from "react";

export interface SatelliteAssemblyState {
  // 選択済みの各パーツＩＤ
  selectedMissionPartsIDs: string[];
  selectedRocketID?: string | undefined;
  selectedBusID?: string | undefined;
  selectedBatteryID?: string | undefined;
  // 黄色の枠線が付くパーツID
  selectedPartID?: string | undefined;
  tabIndex: number;
  isPriceOver: boolean;
}

export type SatelliteAssemblyAction =
  | { type: "selectedMissionPartsIDs"; val: string[] }
  | { type: "selectedRocketID"; val: string | undefined }
  | { type: "selectedBusID"; val: string | undefined }
  | { type: "selectedBatteryID"; val: string | undefined }
  | { type: "selectedPartID"; val: string | undefined }
  | { type: "tabIndex"; val: number }
  | { type: "isPriceOver"; val: boolean };

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
    case "isPriceOver":
      return { ...state, isPriceOver: action.val };
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
