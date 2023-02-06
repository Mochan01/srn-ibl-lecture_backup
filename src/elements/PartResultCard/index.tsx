import React, { FC } from "react";
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
`;

const SImage = styled.img`
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
  partID: string;
  partName: string;
}
/**
 * パーツのコストを表示する
 */
export const PartResultCard: FC<PartResultCardProps> = ({
  partID,
  partName,
}) => {
  return (
    <Main>
      <SImage src={thumbnailPath[partID]} />
      <SName>{partName}</SName>
    </Main>
  );
};
