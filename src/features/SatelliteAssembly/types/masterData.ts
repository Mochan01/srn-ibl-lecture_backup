import {
  MissionList,
  CategoryList,
  ItemList,
  ResultList,
  Rocket,
  Bus,
  Battery,
  SensorParts,
  TransmissionParts,
  Computer,
  Debris,
  SampleReturn,
  Asteroid,
} from "src-ibl-lecture-master-special/types";

/**
 * マスターデータから注入されるJSONオブジェクトの定義
 * https://docs.google.com/spreadsheets/d/17Qvq0lq4y-0B3SNnKZiD3P95U0HviFTAkG03tD4QRCM/edit#gid=1394645568
 */
export interface MasterData {
  mission_list: MissionList[];
  category_list: CategoryList[];
  item_list: ItemList[];
  result_list: ResultList[];
  // ここからパーツ
  rocket: Rocket[];
  bus: Bus[];
  battery: Battery[];
  // ここからミッションパーツ
  // プレイヤーが他画面で選択したミッションによって出し分ける
  sensor_parts: SensorParts[];
  transmission_parts: TransmissionParts[];
  computer: Computer[];
  debris: Debris[];
  sample_return: SampleReturn[];
  asteroid: Asteroid[];
}

// missionPartsのユニオン型
export type MissionParts =
  | SensorParts
  | TransmissionParts
  | Computer
  | Debris
  | SampleReturn
  | Asteroid;
