import React, { FC } from "react";
import styled from "styled-components";

export interface RocketPreviewProps {
  image: string;
  missionParts: string[];
  powerSupplyPart: string;
  loadedPart: string;
  rocket: string;
  show?: boolean;
  className?: string;
}

const Main = styled.div``;

/**
 * 特別レクチャー(衛生組み立て画面）の衛生・ロケット画像のプレビュー部分
 */
export const RocketPreview: FC<RocketPreviewProps> = (props) => {
  return (
    <>
      <Main />
    </>
  );
};
