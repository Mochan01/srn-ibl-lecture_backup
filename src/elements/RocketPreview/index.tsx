import React, { FC } from "react";
import styled from "styled-components";

export interface RocketPreviewProps {
  image: string;
  missionParts: string[];
  powerSupplyPart: string;
  loadedPart: string;
  rocket: string;
  className?: string;
}

const Main = styled.div``;

/**
 * 特別レクチャーの衛生・ロケット画像のプレビュー部分
 */
export const RocketPreview: FC<RocketPreviewProps> = (props) => {
  return (
    <>
      <Main />
    </>
  );
};
