import React, { FC, useMemo } from "react";
import { ResultList } from "src-ibl-lecture-master-special/types";
import styled from "styled-components";
import { OpenPdfBtn } from "../../../elements/OpenPdfBtn";
import { PartResultCard } from "../../../elements/PartResultCard";
import { TwoPartsResultCard } from "../../../elements/TwoPartsResultCard";

const mockResultList: ResultList[] = [
  {
    result_id: "result_1",
    part_a: "4_2",
    part_a_name: "高分解能サーモグラフィー",
    part_b: "",
    part_b_name: "",
    result_pdf: "result-4_2.pdf",
  },
  {
    result_id: "result_2",
    part_a: "",
    part_a_name: "",
    part_b: "4_3",
    part_b_name: "標準SAR\n",
    result_pdf: "result-4_3.pdf",
  },
  {
    result_id: "result_3",
    part_a: "4_5",
    part_a_name: "広域カメラ",
    part_b: "4_6",
    part_b_name: "高分解能カメラ",
    result_pdf: "result-4_5-4_6.pdf",
  },
  {
    result_id: "result_3",
    part_a: "4_2",
    part_a_name: "広域カメラ",
    part_b: "4_7",
    part_b_name: "高分解能カメラ",
    result_pdf: "result-4_5-4_6.pdf",
  },
];

const Main = styled.div`
  margin-left: 85px;
  width: 1024px;
  height: 608px;
  font-size: 30px;
  line-height: 40px;
  color: #5a5a5a;
  text-align: center;
  border: 3px solid #483bcb;
`;
const SContents = styled.div`
  display: flex;
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

export const MissionPartsResults: FC<MissionPartsResultsProps> = ({
  resultList,
}) => {
  // TODO:ローカルストレージから取得
  const mockMissionParts = ["4_2", "4_3", "4_4", "4_5", "4_6"];
  const missionParts = useMemo(() => {
    const mockMissionParts = ["4_2", "4_3", "4_4", "4_5", "4_6"];

    return resultList.filter((result) => {
      // part_aとpart_bに両方値がある場合
      if (!!result.part_a && !!result.part_b) {
        // part_aとpart_bの両方が保存したミッションパーツに含まれる場合をフィルタリング
        return (
          mockMissionParts.includes(result.part_a ? result.part_a : "") &&
          mockMissionParts.includes(result.part_b ? result.part_b : "")
        );
      } else {
        // missionPartがpart_a または part_bに含まれるものフィルタリング
        return (
          mockMissionParts.includes(result.part_a ? result.part_a : "") ||
          mockMissionParts.includes(result.part_b ? result.part_b : "")
        );
      }
    });
  }, [resultList]);

  console.log("missionParts", missionParts);

  return (
    <Main>
      <div css={"margin-top: 26px"} />
      <STitle>■人工衛星による成果を確認しよう</STitle>
      <div css={"margin-top: 31px"} />
      <>
        {missionParts.map((partsResult) => (
          <SContents
            key={partsResult.result_id}
            css={"display: flex; justify-content: center; margin-bottom: 16px"}
          >
            {partsResult.part_a && partsResult.part_b ? (
              <TwoPartsResultCard resultList={partsResult} />
            ) : (
              <PartResultCard resultList={partsResult} />
            )}
            <div css={"margin-left: 24px"} />
            <OpenPdfBtn
              onClick={() => console.log(partsResult)}
              filePath={partsResult.result_pdf}
            />
          </SContents>
        ))}
      </>
    </Main>
  );
};
