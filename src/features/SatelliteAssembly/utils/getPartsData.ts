import { MasterData } from "../types";

type GetParts<T> = (masterData: MasterData) => T[];

export const getMissionParts = (masterData: MasterData) => {
  const masterMissionParts = [
    ...masterData.sensor_parts,
    ...masterData.transmission_parts,
    ...masterData.computer,
    ...masterData.debris,
    ...masterData.sample_return,
    ...masterData.asteroid,
  ];
  return masterMissionParts;
};

export const getBatteryPats = (masterData: MasterData) => {
  return masterData.battery;
};

export const getBusPats = (masterData: MasterData) => {
  return masterData.bus;
};

export const getRocketPats = (masterData: MasterData) => {
  return masterData.rocket;
};

export const handlePartsData =
  (masterData: MasterData) =>
  <T>(callback: GetParts<T>) =>
    callback(masterData);

// IDでマスターデータからパーツのオブジェクトを取得する
export const getPartDetailData = <T extends { part_id: string }>(
  partsData: T[],
  id: string
) => {
  return partsData.find((x) => x.part_id === id);
};

export const getMissionPartsData = (masterData: MasterData, IDs: string[]) => {
  const masterMissionParts = [
    ...masterData.sensor_parts,
    ...masterData.transmission_parts,
    ...masterData.computer,
    ...masterData.debris,
    ...masterData.sample_return,
    ...masterData.asteroid,
  ];
  return masterMissionParts.filter((obj) => IDs.includes(obj.part_id));
};
export const getBatteryData = (masterData: MasterData, IDs: string[]) => {
  return masterData.battery?.filter((obj) => IDs?.includes(obj.part_id));
};
export const getBusData = (masterData: MasterData, IDs: string[]) => {
  return masterData.bus?.filter((obj) => IDs?.includes(obj.part_id));
};

export const getRocketData = (masterData: MasterData, IDs: string[]) => {
  return masterData.rocket?.filter((obj) => IDs?.includes(obj.part_id));
};

export const getCategoryDescription = (masterData: MasterData, ID?: string) => {
  return masterData.category_list.find((x) => x.category_id === ID)
    ?.category_description;
};
