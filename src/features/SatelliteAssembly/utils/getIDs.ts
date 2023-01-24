import { MissionList } from "src-ibl-lecture-master-special/types";
import { SplitIDs } from "../../../types";

type GetParts = (splitIDs: SplitIDs, missionData: MissionList) => string[];

export const getMissionParts: GetParts = (splitIDs, missionData) =>
  splitIDs(
    missionData.sensor_item,
    missionData.transmission_item,
    missionData.computer_item,
    missionData.debris_item,
    missionData.sample_return_item
  );

export const getBatteryIDs: GetParts = (splitIDs, missionData) =>
  splitIDs(missionData.solar_battery);

export const getBusIDs: GetParts = (splitIDs, missionData) =>
  splitIDs(missionData.loading_bus);

export const getRocketIDs: GetParts = (splitIDs, missionData) =>
  splitIDs(missionData.rocket);

export const handleMissionData =
  (splitIDs: SplitIDs, missionData: MissionList) => (callback: GetParts) =>
    callback(splitIDs, missionData);
