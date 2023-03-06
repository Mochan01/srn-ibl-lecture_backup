import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { ResultList } from "src-ibl-lecture-master-special/types";
import { ScrollArea } from "srn-ibl-component";
import { pdfPath } from "../../data/pdfPath";
import { OpenPdfBtn } from "../../elements/OpenPdfBtn";
import { PartResultCard } from "../../elements/PartResultCard";
import { TwoPartsResultCard } from "../../elements/TwoPartsResultCard";
import { getPartsIDs, getSelectedMissionID } from "../Screen/utils";

const Main = styled.div`
  padding-right: 10px;
  width: 1024px;
  height: 608px;
  font-size: 30px;
  font-family: "UD デジタル 教科書体 N-B";
  line-height: 40px;
  color: #5a5a5a;
  text-align: center;
  border: 3px solid #483bcb;
  background-color: rgba(255, 255, 255, 0.5);
`;
const SContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const STitle = styled.div`
  font-size: 38px;
  line-height: 38.58px;
  color: #5a5a5a;
`;

export interface SavedParts {
  missionPartsIDs: string[];
  batteryID: string;
  busID: string;
  rocketID: string;
}

export interface DisplayResultProps {
  /**
   * マスターデータから注入されるJSONオブジェクト
   */
  resultList: ResultList[];
}

/**
 * データ確認画面
 */
export const DisplayResult: FC<DisplayResultProps> = ({ resultList }) => {
  // 画面に表示するパーツ
  const missionParts = useMemo(() => {
    const { missionPartsIDs } = getPartsIDs() || {};
    const selectedMissionID = getSelectedMissionID();

    return (
      missionPartsIDs &&
      selectedMissionID &&
      resultList.filter((result) => {
        // 選択したmissionでは無い場合はfalseを返す
        if (result.mission_id !== selectedMissionID) return false;
        // part_aとpart_bに両方値がある場合
        if (result.part_a && result.part_b) {
          // part_aとpart_bの両方が保存したミッションパーツに含まれる場合をフィルタリング
          return (
            missionPartsIDs.includes(result.part_a ? result.part_a : "") &&
            missionPartsIDs.includes(result.part_b ? result.part_b : "")
          );
        } else {
          // missionPartがpart_a または part_bに含まれるものフィルタリング
          return (
            missionPartsIDs.includes(result.part_a ? result.part_a : "") ||
            missionPartsIDs.includes(result.part_b ? result.part_b : "")
          );
        }
      })
    );
  }, [resultList]);

  return (
    <Main>
      <ScrollArea css={"height: 600px; "}>
        <div css={"margin-top: 26px"} />
        <STitle>人工衛星による成果を確認しよう</STitle>
        <div css={"margin-top: 31px"} />
        {missionParts &&
          missionParts.map((partsResult) => (
            <SContents key={partsResult.result_id}>
              {/* part_aとpart_bに両方値がある場合と片方しかない場合でコンポーネントを分ける */}
              {partsResult.part_a && partsResult.part_b ? (
                <TwoPartsResultCard resultList={partsResult} />
              ) : (
                <PartResultCard resultList={partsResult} />
              )}
              <div css={"margin-left: 24px"} />
              <OpenPdfBtn filePath={pdfPath[partsResult.result_pdf]} />
            </SContents>
          ))}
      </ScrollArea>
    </Main>
  );
};
