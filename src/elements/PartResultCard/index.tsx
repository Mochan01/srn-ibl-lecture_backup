import React, { FC } from "react";
import { ResultList } from "src-ibl-lecture-master-special/types";
import styled from "styled-components";
import { thumbnailPath } from "../../data/thumbnailPath";

const Main = styled.div`
  width: 816px;
  height: 88px;
  display: flex;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 12px;
  padding-top: 11px;
  padding-left: 24px;
  text-align: center;
`;

const SImage = styled.div<{ image: string }>`
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: contain;
  width: 66px;
  height: 66px;
`;
const SName = styled.div`
  font-size: 23px;
  line-height: 23px;
  height: 66px;
  width: 664px;
  padding-left: 46px;
  color: #5a5a5a;
  display: flex;
  align-items: center;
`;

export interface PartResultCardProps {
  resultList: ResultList;
}
/**
 * 結果のサムネイルと名前を表示する
 * (part_aかpart_bのどちらかは空の場合)
 */
export const PartResultCard: FC<PartResultCardProps> = ({ resultList }) => {
  // サムネイルを表示するためのpart_aかpart_bのID
  const partID = resultList.part_a
    ? resultList.part_a
    : resultList.part_b
    ? resultList.part_b
    : "";

  const partName = resultList.part_a_name
    ? resultList.part_a_name
    : resultList.part_b_name;

  return (
    <Main>
      <SImage image={thumbnailPath[partID]} />
      <SName>{partName}</SName>
    </Main>
  );
};
