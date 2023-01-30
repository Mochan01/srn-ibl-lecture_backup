import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { SIZE } from "../../data/SIZE";
import { LaunchBtn } from "../../elements/LaunchBtn";
import { LectureFrame } from "../../elements/LectureFrame";
import { ResetBtn } from "../../elements/ResetBtn";
import { RocketPreview } from "../../elements/RocketPreview";
import { MissionConditions, PartsSelectArea } from "./components";
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

const PartsViewArea = styled.div`
  height: 890px;
  width: 574px;
`;
const ButtonArea = styled.div`
  height: 59px;
  width: 680px;
  display: flex;
  justify-content: space-between;
`;
const ParameterArea = styled.div`
  height: 210px;
  width: 680px;
  background-color: ${backGroundWhiteColor};
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

  const tmpRocketViewProps = {
    // images: ["https://placekitten.com/600/600"],
    images: [
      "https://placekitten.com/601/600",
      "https://placekitten.com/601/600",
    ],
    selectedPart: "ミッションパーツA",
    missionParts: [
      "ミッションパーツA",
      "ミッションパーツB",
      "ミッションパーツC",
    ],
    powerSupplyPart: "電源パーツA",
    loadedPart: "積載パーツA",
    rocket: "打ち上げロケットA",
    isShow: true,
  };

  const tmpResetBtnProps = {
    onClick: () => console.log("リセットの処理を実行"),
  };

  return (
    <LectureFrame unitName="とりあえず仮" unitTitle="とりあえず仮">
      <Main>
        <PartsViewArea>
          <RocketPreview {...tmpRocketViewProps}></RocketPreview>
        </PartsViewArea>
        <div>
          <div css={"margin-top: 18px"} />
          <ButtonArea>
            <ResetBtn {...tmpResetBtnProps} />
            <LaunchBtn variant="OFF" onClick={() => console.log("launch")} />
          </ButtonArea>
          <div css={"margin-top: 18px"} />
          <ParameterArea>
            <MissionConditions />
          </ParameterArea>
          <div css={"margin-top: 18px"} />
          <PartsSelectArea />
        </div>
      </Main>
      {/* ここに衛生組み立て画面の実装を書く */}
    </LectureFrame>
  );
};
