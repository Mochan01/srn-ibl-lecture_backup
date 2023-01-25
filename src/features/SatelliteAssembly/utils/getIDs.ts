import { MissionList } from "src-ibl-lecture-master-special/types";

type GetParts = (missionData: MissionList) => string[];

export const getMissionParts: GetParts = (missionData) => [
  ...missionData.sensor_item,
  ...missionData.transmission_item,
  ...missionData.computer_item,
  ...missionData.debris_item,
  ...missionData.sample_return_item,
];

export const getBatteryIDs: GetParts = (missionData) =>
  missionData.solar_battery;

export const getBusIDs: GetParts = (missionData) => missionData.loading_bus;

export const getRocketIDs: GetParts = (missionData) => missionData.rocket;

export const handleMissionData =
  (missionData: MissionList) => (callback: GetParts) =>
    callback(missionData);
