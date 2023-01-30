import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { SIZE } from "../../data/SIZE";
import { LectureFrame } from "../../elements/LectureFrame";
import {
  BtnArea,
  ParameterArea,
  PartsPreviewArea,
  PartsSelectArea,
} from "./components";
import { MasterData } from "./types";
import {
  handleMissionData,
  getMissionParts,
  getBatteryIDs,
  getBusIDs,
  getRocketIDs,
} from "./utils";

export const backGroundWhiteColor = "#fafbfd " as const;
const ImageBackGround = new URL(
  "../../assets/prod/bg_grid.png",
  import.meta.url
).toString();
const Main = styled.div`
  height: ${SIZE.H};
  width: ${SIZE.W};
  background-image: url(${ImageBackGround});
  display: flex;
  font-family: "UD デジタル 教科書体 N-B";
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
        <PartsPreviewArea />
        <div>
          <div css={"margin-top: 18px"} />
          <BtnArea />
          <div css={"margin-top: 18px"} />
          <ParameterArea />
          <div css={"margin-top: 18px"} />
          <PartsSelectArea />
        </div>
      </Main>
      {/* ここに衛生組み立て画面の実装を書く */}
    </LectureFrame>
  );
};
