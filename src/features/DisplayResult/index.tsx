import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { LinkText, Spacer, Typography } from "srn-ibl-component";
import { SIZE } from "../../data/SIZE";
import { LectureFrame } from "../../elements/LectureFrame";
import { MasterData } from "../DisplayResult/types";
import { ResultList } from "src-ibl-lecture-master-special/types";
import { MissionPartsResults } from "./components/MissionPartsResults";

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
const SMessage = styled.div`
  font-size: 30px;
  line-height: 40px;
  color: #5a5a5a;
  text-align: center;
  margin-top: 30px;
`;
export interface DisplayResultProps {
  /**
   * マスターデータから注入されるJSONオブジェクト
   */
  resultList: ResultList[];
}

/**
 * 衛生組み立て画面
 */
export const DisplayResult: FC<DisplayResultProps> = ({ resultList }) => {
  return (
    <LectureFrame unitName="とりあえず仮" unitTitle="とりあえず仮">
      <Main>
        <STitle>■人工衛星が送ってきたデータを確認する</STitle>

        <div css={"margin-top: 46px"} />
        <MissionPartsResults {...{ resultList }} />
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
