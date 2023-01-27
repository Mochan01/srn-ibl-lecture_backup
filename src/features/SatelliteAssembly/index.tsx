import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { SIZE } from "../../data/SIZE";
import { LaunchBtn } from "../../elements/LaunchBtn";
import { LectureFrame } from "../../elements/LectureFrame";
import { PartCost } from "../../elements/PartCost";
import { PartDetail } from "../../elements/PartDetail";
import { PartsSelectBtn } from "../../elements/PartsSelectBtn";
import { PartsSelectSlider } from "../../elements/PartsSelectSlider";
import { PartsSelectTab } from "../../elements/PartsSelectTab";
import { ResetBtn } from "../../elements/ResetBtn";
import { RocketPreview } from "../../elements/RocketPreview";
import { MissionConditions } from "./components";
import { MasterData } from "./types";
import {
  handleMissionData,
  getMissionParts,
  getBatteryIDs,
  getBusIDs,
  getRocketIDs,
} from "./utils";

const backGroundWhiteColor = "#fafbfd " as const;
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
const PartDetailArea = styled.div`
  height: 500px;
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

  const tmpPartDetailProps = {
    part_name:
      "地上の携帯電話や小型発信機との通信装置+地上の小型発信機1000個セット",
    description:
      "地上のGPS受信機で得た位置情報を衛星が受信する専用の装置と地上で使用するGPS受信機1000個のセット",
  };
  const tmpPartCostProps = {
    cost_name: "価格（億円）",
    cost: 20000,
    isCostOver: false,
  };
  const tmpPartsSelectSliderProps = {
    selectIndex: 0,
    selectedIndexes: [1, 2],
    items: [
      { name: "ああああああああ", image: "https://placekitten.com/116/116" },
      { name: "いいいいいいい", image: "https://placekitten.com/117/116" },
      { name: "うううううう", image: "https://placekitten.com/118/116" },
      { name: "えええええ", image: "https://placekitten.com/119/116" },
      { name: "おおおお", image: "https://placekitten.com/112/116" },
    ],
    onSelect: (i: number) => console.log(`${i}番目を選択した`),
  };
  return (
    <LectureFrame unitName="とりあえず仮" unitTitle="とりあえず仮">
      <Main>
        <PartsViewArea>
          <RocketPreview {...tmpRocketViewProps}></RocketPreview>
        </PartsViewArea>
        <div>
          <div css={"margin-top: 18px"}></div>
          <ButtonArea>
            <ResetBtn {...tmpResetBtnProps} />
            <LaunchBtn variant="OFF" onClick={() => console.log("launch")} />
          </ButtonArea>
          <div css={"margin-top: 18px"}></div>
          <ParameterArea>
            <MissionConditions />
          </ParameterArea>
          <div css={"margin-top: 18px"}></div>
          <PartsSelectTab index={0} onChange={() => console.log("tabClick")} />
          <PartDetailArea>
            <PartDetail {...tmpPartDetailProps} />
            <PartCost {...tmpPartCostProps} />
            <PartCost {...tmpPartCostProps} />
            <PartCost {...tmpPartCostProps} />
            <PartCost {...tmpPartCostProps} />
            <PartsSelectBtn
              isSelected={true}
              onClick={() => console.log("click")}
            />
            <PartsSelectSlider {...tmpPartsSelectSliderProps} />
          </PartDetailArea>
        </div>
      </Main>
      {/* ここに衛生組み立て画面の実装を書く */}
    </LectureFrame>
  );
};
