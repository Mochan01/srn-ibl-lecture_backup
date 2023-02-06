import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { LinkText, Spacer, Typography } from "srn-ibl-component";
import { SIZE } from "../../data/SIZE";
import { LectureFrame } from "../../elements/LectureFrame";
import { MasterData } from "../DisplayResult/types";

const ImageBackGround = new URL(
  "../../assets/prod/bg_grid.png",
  import.meta.url
).toString();
const Main = styled.div`
  height: ${SIZE.H};
  width: ${SIZE.W};
  font-family: "UD デジタル 教科書体 N-B";
  padding-left: 38px;
  padding-top: 25px;
`;

const STitle = styled.div`
  font-size: 38px;
  line-height: 38.58px;
  color: #5a5a5a;
`;
const SResults = styled.div`
  margin-left: 85px;
  width: 1024px;
  height: 608px;
  font-size: 30px;
  line-height: 40px;
  color: #5a5a5a;
  text-align: center;
  border: 3px solid #483bcb;
`;
const SMessage = styled.div`
  font-size: 30px;
  line-height: 40px;
  color: #5a5a5a;
  text-align: center;
  margin-top: 30px;
`;
export interface DisplayResultProps {
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
export const DisplayResult: FC<DisplayResultProps> = ({
  selectedMissionID,
  masterData,
}) => {
  // // 当該ミッションのデータを取得
  // const missionData = useMemo(
  //   () =>
  //     masterData.mission_list.find((x) => x.mission_id === selectedMissionID),
  //   [masterData, selectedMissionID]
  // );
  // if (!missionData) return <></>;

  // // 何のパーツを読み込むか？判定（タブ順）
  // const getIDs = handleMissionDataIDs(missionData);
  // const missionPartsIDs = getIDs(getMissionPartsIDs); // ミッションパーツ

  return (
    <LectureFrame unitName="とりあえず仮" unitTitle="とりあえず仮">
      <Main>
        <STitle>■人工衛星が送ってきたデータを確認する</STitle>
        <div css={"margin-top: 46px"} />
        <SResults>
          <div css={"margin-top: 26px"} />
          <STitle>■人工衛星による成果を確認しよう</STitle>
        </SResults>
        <div css={"margin-top: 30px"} />
        <SMessage>
          データを保存したら、このユニットは終了です。
          <br />
          次のユニットでは、このデータをもとに、
          <br />
          課題を解決する方法を考えるグループワークを行います。
        </SMessage>
      </Main>
    </LectureFrame>
  );
};
