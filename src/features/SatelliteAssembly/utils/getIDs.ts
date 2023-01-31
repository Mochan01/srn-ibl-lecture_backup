import {
  Battery,
  Computer,
  MissionList,
  Rocket,
  Bus,
  SensorParts,
  TransmissionParts,
  Debris,
  SampleReturn,
  Asteroid,
} from "src-ibl-lecture-master-special/types";
import { MasterData, PartType } from "../types";

type GetParts = (missionData: MissionList) => string[];

export const getMissionParts: GetParts = (missionData) => [
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

export const handleMissionData =
  (missionData: MissionList) => (callback: GetParts) =>
    callback(missionData);

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

// export const getPartDetailData = (
//   masterData: MasterData,
//   ID?: string
// ):
//   | Rocket
//   | Bus
//   | Battery
//   | SensorParts
//   | TransmissionParts
//   | Computer
//   | Debris
//   | SampleReturn
//   | Asteroid
//   | undefined => {
//   if (!ID) return;
//   if (masterData.rocket.find((obj) => obj.part_id === ID)) {
//     return masterData.rocket.find((obj) => obj.part_id === ID);
//   }
//   if (masterData.bus.find((obj) => obj.part_id === ID)) {
//     return masterData.bus.find((obj) => obj.part_id === ID);
//   }
//   if (masterData.battery.find((obj) => obj.part_id === ID)) {
//     return masterData.battery.find((obj) => obj.part_id === ID);
//   }
//   if (masterData.sensor_parts.find((obj) => obj.part_id === ID)) {
//     return masterData.sensor_parts.find((obj) => obj.part_id === ID);
//   }
//   if (masterData.transmission_parts.find((obj) => obj.part_id === ID)) {
//     return masterData.transmission_parts.find((obj) => obj.part_id === ID);
//   }
//   if (masterData.computer.find((obj) => obj.part_id === ID)) {
//     return masterData.computer.find((obj) => obj.part_id === ID);
//   }
//   if (masterData.debris.find((obj) => obj.part_id === ID)) {
//     return masterData.debris.find((obj) => obj.part_id === ID);
//   }
//   if (masterData.sample_return.find((obj) => obj.part_id === ID)) {
//     return masterData.sample_return.find((obj) => obj.part_id === ID);
//   }
//   if (masterData.asteroid.find((obj) => obj.part_id === ID)) {
//     return masterData.asteroid.find((obj) => obj.part_id === ID);
//   }
// };

// IDでマスターデータからパーツのオブジェクトを取得する
export const getPartDetailData = (
  masterData: MasterData,
  ID?: string
): PartType | undefined => {
  if (!ID) return;
  const partTypes = [
    masterData.rocket,
    masterData.bus,
    masterData.battery,
    masterData.sensor_parts,
    masterData.transmission_parts,
    masterData.computer,
    masterData.debris,
    masterData.sample_return,
    masterData.asteroid,
  ];
  for (const partType of partTypes) {
    // プロパティを持たせるために型をキャストする
    const tmp = partType as PartType[];
    const part = tmp.find((obj: { part_id: string }) => obj.part_id === ID);
    if (part) return part;
  }
};

export const getCategoryDescription = (masterData: MasterData, ID?: string) => {
  return masterData.category_list.find((x) => x.category_id === ID)
    ?.category_description;
};

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
