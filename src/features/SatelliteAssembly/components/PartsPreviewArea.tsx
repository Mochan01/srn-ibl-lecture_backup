import React, { FC } from "react";
import styled from "styled-components";
import { RocketPreview } from "../../../elements/RocketPreview";
const Main = styled.div`
  height: 890px;
  width: 574px;
`;

const tmpRocketViewProps = {
  // images: ["https://placekitten.com/600/600"],
  images: [
    "https://placekitten.com/601/600",
    "https://placekitten.com/601/600",
  ],
  selectedPart: "ミッションパーツA",
  missionParts: ["ミッションパーツA", "ミッションパーツB", "ミッションパーツC"],
  powerSupplyPart: "電源パーツA",
  loadedPart: "積載パーツA",
  rocket: "打ち上げロケットA",
  isShow: true,
};

export const PartsPreviewArea: FC = () => {
  return (
    <Main>
      <RocketPreview {...tmpRocketViewProps}></RocketPreview>
    </Main>
  );
};
