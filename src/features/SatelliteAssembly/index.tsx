import React, { FC, useMemo } from "react";
import { LectureFrame } from "../../elements/LectureFrame";
import { MasterData } from "./types";
import {
  handleMissionData,
  getMissionParts,
  getBatteryIDs,
  getBusIDs,
  getRocketIDs,
} from "./utils";

export interface SatelliteAssemblyProps {
  /**
   * プレイヤーが選択しているミッションID
   */
  selectedMissionID: string;
  /**
   * マスターデータから注入されるJSONオブジェクト
   */
  masterData: MasterData;
}

/**
 * 衛生組み立て画面
 */
export const SatelliteAssembly: FC<SatelliteAssemblyProps> = ({
  selectedMissionID,
  masterData,
}) => {
  // 当該ミッションのデータを取得
  const missionData = useMemo(
    () =>
      masterData.mission_list.find((x) => x.mission_id === selectedMissionID),
    [masterData, selectedMissionID]
  );
  if (!missionData) return <></>;

  // 何のパーツを読み込むか？判定（タブ順）
  const getIDs = handleMissionData(missionData);
  const missionPartsIDs = getIDs(getMissionParts); // ミッションパーツ
  const batteryIDs = getIDs(getBatteryIDs); // 電源パーツ
  const busIDs = getIDs(getBusIDs); // 積載パーツ
  const rocketIDs = getIDs(getRocketIDs); // 打ち上げロケット

  return (
    <LectureFrame unitName="とりあえず仮" unitTitle="とりあえず仮">
      {/* ここに衛生組み立て画面の実装を書く */}
    </LectureFrame>
  );
};
