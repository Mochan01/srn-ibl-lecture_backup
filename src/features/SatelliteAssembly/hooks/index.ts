import { useReducer, Reducer } from "react";

export interface SatelliteAssemblyState {
  // 選択済みの各パーツＩＤ
  selectedMissionPartsIDs: string[];
  selectedRocketID?: string | undefined;
  selectedBusID?: string | undefined;
  selectedBatteryID?: string | undefined;
  // 黄色の枠線が付くパーツID
  selectedPartID: string;
  // 表示しているタブのインデックス
  tabIndex: number;
  // 各コストのオバーしているかどうかのフラグ
  isPriceOver: boolean;
  isMonthOver: boolean;
  isLaunchOver: boolean;
  isLoadingOver: boolean;
  isWattsOver: boolean;
  // ミッションの対応の打ち上げ可能質量
  launchableMass: "leo" | "geo" | "ooo";
}

export type SatelliteAssemblyAction =
  | { type: "selectedMissionPartsIDs"; val: string[] }
  | { type: "selectedRocketID"; val: string | undefined }
  | { type: "selectedBusID"; val: string | undefined }
  | { type: "selectedBatteryID"; val: string | undefined }
  | { type: "selectedPartID"; val: string }
  | { type: "tabIndex"; val: number }
  | { type: "isPriceOver"; val: boolean }
  | { type: "isMonthOver"; val: boolean }
  | { type: "isLaunchOver"; val: boolean }
  | { type: "isLoadingOver"; val: boolean }
  | { type: "isWattsOver"; val: boolean };

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
    case "isMonthOver":
      return { ...state, isMonthOver: action.val };
    case "isLaunchOver":
      return { ...state, isLaunchOver: action.val };
    case "isLoadingOver":
      return { ...state, isLoadingOver: action.val };
    case "isWattsOver":
      return { ...state, isWattsOver: action.val };
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
