import { MissionList } from "src-ibl-lecture-master-special/types";

type GetParts = (missionData: MissionList) => string[];

export const getMissionPartsIDs: GetParts = (missionData) => [
  ...missionData.sensor_item,
  ...missionData.transmission_item,
  ...missionData.computer_item,
  ...missionData.debris_item,
  ...missionData.sample_return_item,
  ...missionData.asteroid_item,
];

export const getBatteryIDs: GetParts = (missionData) =>
  missionData.solar_battery;

export const getBusIDs: GetParts = (missionData) => missionData.loading_bus;

export const getRocketIDs: GetParts = (missionData) => missionData.rocket;

export const handleMissionDataIDs =
  (missionData: MissionList) => (callback: GetParts) =>
    callback(missionData);

// interface SavedParts {
//   missionPartsIDs: string[];
//   rocketID: string;
//   busID: string;
//   batteryID: string;
// }

// /**
//  * ローカルストレージに検索条件を保存
//  * @param state
//  */
// export const saveParts = (state: SavedParts) => {
//   typeof window !== "undefined" &&
//     localStorage.setItem("searchStudentsConditionInput", JSON.stringify(state));
// };
