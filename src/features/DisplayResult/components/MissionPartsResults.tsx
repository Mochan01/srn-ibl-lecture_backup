import React, { FC, useMemo } from "react";
import { ResultList } from "src-ibl-lecture-master-special/types";
import styled from "styled-components";
import { pdfPath } from "../../../data/pdfPath";
import { SAVED_PARTS } from "../../../config";
import { OpenPdfBtn } from "../../../elements/OpenPdfBtn";
import { PartResultCard } from "../../../elements/PartResultCard";
import { TwoPartsResultCard } from "../../../elements/TwoPartsResultCard";

const Main = styled.div`
  margin-left: 85px;
  width: 1024px;
  height: 608px;
  font-size: 30px;
  line-height: 40px;
  color: #5a5a5a;
  text-align: center;
  border: 3px solid #483bcb;
  overflow-y: scroll;
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

interface MissionPartsResultsProps {
  resultList: ResultList[];
}

export interface SavedParts {
  missionPartsIDs: string[];
  batteryID: string;
  busID: string;
  rocketID: string;
}

export const MissionPartsResults: FC<MissionPartsResultsProps> = ({
  resultList,
}) => {
  // 画面に表示するパーツ
  const missionParts = useMemo(() => {
    // ローカルストレージからパーツを取得
    const item = localStorage.getItem(SAVED_PARTS);
    const savedParts: SavedParts = item && JSON.parse(item);
    // missionパーツ
    const { missionPartsIDs } = savedParts;

    // TODO:表示確認用 必要なくなったら消す
    // const missionPartsIDs = ["4_2", "4_3", "4_6", "5_2", "7_1"];

    return resultList.filter((result) => {
      // part_aとpart_bに両方値がある場合
      if (!!result.part_a && !!result.part_b) {
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
    });
  }, [resultList]);

  return (
    <Main>
      <div css={"margin-top: 26px"} />
      <STitle>人工衛星による成果を確認しよう</STitle>
      <div css={"margin-top: 31px"} />
      {missionParts.map((partsResult) => (
        <SContents key={partsResult.result_id}>
          {/* part_aとpart_bに両方値がある場合と片方しかない場合でコンポーネントを分ける */}
          {!!partsResult.part_a && !!partsResult.part_b ? (
            <TwoPartsResultCard resultList={partsResult} />
          ) : (
            <PartResultCard resultList={partsResult} />
          )}
          <div css={"margin-left: 24px"} />
          <OpenPdfBtn filePath={pdfPath[partsResult.result_pdf]} />
        </SContents>
      ))}
    </Main>
  );
};
