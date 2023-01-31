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

// 全てのパーツのプロパティを持った型
export interface PartType {
  category_id: string;
  category_name: string;
  part_id: string;
  part_name: string;
  description: string;
  price_hundred_million: number;
  leo_launchable_mass_kg?: number;
  geo_launchable_mass_kg?: number;
  ooo_launchable_mass_kg?: number;
  manufacturing_period_months: number;
  max_loading_mass_kg?: number;
  body_mass_kg?: number;
  required_power_watts?: number;
  power_supply_watts?: number;
}

export type MissionParts =
  | SensorParts
  | TransmissionParts
  | Computer
  | Debris
  | SampleReturn
  | Asteroid;
