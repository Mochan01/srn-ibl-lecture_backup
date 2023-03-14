import React, { FC } from "react";
import { ResultList } from "src-ibl-lecture-master-special/types";
import styled from "styled-components";
import { createThumbnailFileName } from "../../features/SatelliteAssembly/utils";
import { createAssetUri } from "../../utils";

const Main = styled.div`
  width: 816px;
  height: 161px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 12px;
  padding-top: 11px;
  padding-left: 24px;
`;

const Content = styled.div`
  display: flex;
`;

const SImage = styled.div<{ image?: string }>`
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
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

export interface TwoPartsResultCardProps {
  resultList: ResultList;
}
/**
 * 結果ののサムネイルと名前を表示する(結果にpart_a,part_b両方ある場合)
 */
export const TwoPartsResultCard: FC<TwoPartsResultCardProps> = ({
  resultList,
}) => {
  return (
    <Main>
      <Content>
        <SImage
          image={
            resultList.part_a &&
            createAssetUri(createThumbnailFileName(resultList.part_a))
          }
        />
        <SName>{resultList.part_a_name}</SName>
      </Content>
      <Content>
        <SImage
          image={
            resultList.part_b &&
            createAssetUri(createThumbnailFileName(resultList.part_b))
          }
        />
        <SName>{resultList.part_b_name}</SName>
      </Content>
    </Main>
  );
};
