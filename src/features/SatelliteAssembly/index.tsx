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
import { SatelliteAssemblyProvider } from "./contexts";
import { MasterData } from "./types";
import { getMissionPartsIDs, handleMissionDataIDs } from "./utils";

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
  const getIDs = handleMissionDataIDs(missionData);
  const missionPartsIDs = getIDs(getMissionPartsIDs); // ミッションパーツ

  return (
    <LectureFrame unitName="とりあえず仮" unitTitle="とりあえず仮">
      <Main>
        <SatelliteAssemblyProvider
          initialValue={{
            tabIndex: 0,
            selectedMissionPartsIDs: [],
            // 初期表示時はミッションパーツの最初のパーツを選択状態にする
            selectedPartID: missionPartsIDs[0],
            isPriceOver: false,
            isMonthOver: false,
            isLaunchOver: false,
            isLoadingOver: false,
            isWattsOver: false,
            launchableMass: missionData.launchable_mass as
              | "leo"
              | "geo"
              | "ooo",
          }}
        >
          <PartsPreviewArea masterData={masterData} />
          <div>
            <div css={"margin-top: 18px"} />
            <BtnArea />
            <div css={"margin-top: 18px"} />
            <ParameterArea
              masterData={masterData}
              maxBudget={missionData.max_budget}
              preparationPeriod={missionData.preparation_period}
            />
            <div css={"margin-top: 18px"} />
            <PartsSelectArea
              missionData={missionData}
              masterData={masterData}
            />
          </div>
        </SatelliteAssemblyProvider>
      </Main>
    </LectureFrame>
  );
};
