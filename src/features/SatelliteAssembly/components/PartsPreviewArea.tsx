import React, { FC, useContext } from "react";
import styled from "styled-components";
import { PreviewItem, RocketPreview } from "../../../elements/RocketPreview";
import { previewPath } from "../../../data/previewPath";
import { Rocket, Bus, Battery } from "src-ibl-lecture-master-special/types";
import {
  SatelliteAssemblyStateContext,
  SatelliteAssemblyDispatchContext,
} from "../contexts";
import { MasterData, MissionParts } from "../types";
import {
  handlePartsData,
  getPartDetailData,
  getRocketParts,
  getBusParts,
  getBatteryParts,
  getMissionParts,
} from "../utils";
const Main = styled.div`
  height: 890px;
  width: 574px;
`;

export interface PartsPreviewAreaProps {
  masterData: MasterData;
}
export const PartsPreviewArea: FC<PartsPreviewAreaProps> = ({ masterData }) => {
  const state = useContext(SatelliteAssemblyStateContext);
  const dispatch = useContext(SatelliteAssemblyDispatchContext);
  const getPartsDetail = handlePartsData(masterData);

  const rocket = state.selectedRocketID
    ? getPartDetailData<Rocket>(
        getPartsDetail(getRocketParts),
        state.selectedRocketID
      )
    : undefined;

  const busPart = state.selectedBusID
    ? getPartDetailData<Bus>(getPartsDetail(getBusParts), state.selectedBusID)
    : undefined;

  const batteryPart = state.selectedBatteryID
    ? getPartDetailData<Battery>(
        getPartsDetail(getBatteryParts),
        state.selectedBatteryID
      )
    : undefined;

  const missionParts = state.selectedMissionPartsIDs
    .map((id) => {
      return getPartDetailData<MissionParts>(
        getPartsDetail(getMissionParts),
        id
      );
    })
    .filter((part) => part !== undefined) as MissionParts[];

  const onClick = (part: PreviewItem) => {
    let tabIndex: number;
    if (part.category_id == "3") {
      tabIndex = 1;
    } else if (part.category_id == "2") {
      tabIndex = 2;
    } else if (part.category_id == "1") {
      tabIndex = 3;
    } else {
      tabIndex = 0;
    }
    console.log("tabIndex", tabIndex);
    console.log("part", part);

    dispatch({ type: "selectedPartID", val: part.part_id });
    dispatch({ type: "tabIndex", val: tabIndex });
  };

  let images = [previewPath[state.selectedPartID]];

  if (state.tabIndex === 1 && state.selectedBusID) {
    images = [previewPath[state.selectedBusID], ...images];
  }
  if (state.tabIndex === 2 && state.selectedBatteryID) {
    images = [...images, previewPath[state.selectedBatteryID]];
  }

  const RocketViewProps = {
    images: images,
    // images: [previewPath["3_1"], previewPath["2_1"]],
    selectedPart: state.selectedPartID,
    missionParts: missionParts,
    batteryPart: batteryPart,
    busPart: busPart,
    rocket: rocket,
    onClick: onClick,
    isShow: true,
  };
  return (
    <Main>
      <RocketPreview {...RocketViewProps}></RocketPreview>
    </Main>
  );
};
