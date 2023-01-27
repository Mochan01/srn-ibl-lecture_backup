import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { LectureFrame } from "../../elements/LectureFrame";
import { MasterData } from "./types";
import {
  handleMissionData,
  getMissionParts,
  getBatteryIDs,
  getBusIDs,
  getRocketIDs,
} from "./utils";

// height: ${SIZE.H};
// width: ${SIZE.W};
const Main = styled.div`
  height: 890px;
  width: 1286px;
  background-color: red;
  display: flex;
`;

const PartsViewArea = styled.div`
  height: 890px;
  width: 574px;
  background-color: blue;
`;
const ButtonArea = styled.div`
  height: 59px;
  width: 680px;
  background-color: blue;
`;
const ParameterArea = styled.div`
  height: 210px;
  width: 680px;
  background-color: blue;
`;
const PartDetailArea = styled.div`
  height: 543px;
  width: 680px;
  background-color: blue;
`;
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

  console.log("missionPartsIDs", missionPartsIDs);
  console.log(" batteryIDs", batteryIDs);
  console.log(" busIDs", busIDs);
  console.log(" rocketIDs", rocketIDs);
  console.log(" missionData", missionData);
  console.log(" masterData", masterData);

  return (
    <LectureFrame unitName="とりあえず仮" unitTitle="とりあえず仮">
      <Main>
        <PartsViewArea></PartsViewArea>
        <div>
          <div css={"margin-top: 17px"}></div>
          <ButtonArea></ButtonArea>
          <div css={"margin-top: 17px"}></div>
          <ParameterArea></ParameterArea>
          <div css={"margin-top: 17px"}></div>
          <PartDetailArea></PartDetailArea>
        </div>
      </Main>
      {/* ここに衛生組み立て画面の実装を書く */}
    </LectureFrame>
  );
};
