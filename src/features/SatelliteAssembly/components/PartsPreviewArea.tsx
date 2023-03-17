import React, { FC, useContext } from "react";
import styled from "styled-components";
import { PreviewItem, RocketPreview } from "../../../elements/RocketPreview";
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
  createPreviewFileName,
} from "../utils";
import { createAssetUri } from "../../../utils";
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

  // パーツ名をクリックした際の処理
  const onClick = (part: PreviewItem) => {
    let tabIndex: number;
    // 電源パーツ
    if (part.category_id == 3) {
      tabIndex = 1;
      // 積載パーツ
    } else if (part.category_id == 2) {
      tabIndex = 2;
      // ロケット
    } else if (part.category_id == 1) {
      tabIndex = 3;
      // ミッションパーツ
    } else {
      tabIndex = 0;
    }

    dispatch({ type: "selectedPartID", val: part.part_id });
    dispatch({ type: "tabIndex", val: tabIndex });
  };

  // プレビュー画面に表示する画像
  let image = createAssetUri(createPreviewFileName(state.selectedPartID));

  // 電源パーツのタブかつ積載パーツが選択済みの場合は合体画像にする
  if (state.tabIndex === 1 && state.selectedBusID) {
    image = createAssetUri(
      createPreviewFileName(`${state.selectedPartID}-${state.selectedBusID}`)
    );
  }
  // 積載パーツのタブかつ電源パーツが選択済みの場合は合体画像にする
  if (state.tabIndex === 2 && state.selectedBatteryID) {
    image = createAssetUri(
      createPreviewFileName(
        `${state.selectedBatteryID}-${state.selectedPartID}`
      )
    );
  }

  const RocketViewProps = {
    image: image,
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
