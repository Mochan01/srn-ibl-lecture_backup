import React, { FC, useMemo } from "react";
import { ResultList } from "src-ibl-lecture-master-special/types";
import styled from "styled-components";
import { OpenPdfBtn } from "../../../elements/OpenPdfBtn";
import { PartResultCard } from "../../../elements/PartResultCard";
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
  const mockMissionParts = ["4_2", "4_3", "4_4"];

  const missionParts = useMemo(() => {
    const mockMissionParts = ["4_2", "4_3", "4_4"];
    // TODO: フィルタリング
    mockMissionParts.filter(() => {});
  }, []);
  return (
    <Main>
      <div css={"margin-top: 26px"} />
      <STitle>■人工衛星による成果を確認しよう</STitle>
      <div css={"margin-top: 31px"} />
      <>
        {mockMissionParts.map((part) => (
          <div
            key={part}
            css={"display: flex; justify-content: center; margin-bottom: 16px"}
          >
            <PartResultCard key={part} partID={part} partName={part} />
            <div css={"margin-left: 24px"} />
            <OpenPdfBtn onClick={() => console.log(part)} filePath={part} />
          </div>
        ))}
      </>
    </Main>
  );
};
