import React, { FC, useContext, useMemo } from "react";
import { MissionList } from "src-ibl-lecture-master-special/types";
import styled from "styled-components";
import { PartsSelectBtn } from "../../../elements/PartsSelectBtn";
import {
  PartsSelectSlider,
  PartsSelectSliderProps,
  SliderItem,
} from "../../../elements/PartsSelectSlider";
import { backGroundWhiteColor, sliderImageFileName } from "../config";
import {
  SatelliteAssemblyDispatchContext,
  SatelliteAssemblyStateContext,
} from "../contexts";
import { MasterData } from "../types";
import {
  getMissionPartsData,
  getMissionPartsIDs,
  handleMissionDataIDs,
} from "../utils";
import { MissionPartDetailUnit } from "../components";
const Main = styled.div``;
const PartDetailArea = styled.div`
  height: 340px;
  width: 680px;
  position: relative;
  background-color: ${backGroundWhiteColor};
`;
const BtnArea = styled.div`
  position: absolute;
  top: 285px;
  right: 40px;
`;

interface MissionPartsSelectAreaProps {
  missionData: MissionList;
  masterData: MasterData;
}

// パーツを選択する部分のエリア
export const MissionPartsSelectArea: FC<MissionPartsSelectAreaProps> = ({
  missionData,
  masterData,
}) => {
  const state = useContext(SatelliteAssemblyStateContext);
  const dispatch = useContext(SatelliteAssemblyDispatchContext);
  const getIDs = handleMissionDataIDs(missionData);

  // 開いているタブでの選択中のパーツのID
  const isSelectedIDs = useMemo(() => {
    return state.selectedMissionPartsIDs;
  }, [state.selectedMissionPartsIDs]);

  // 開いているタブでのパーツの一覧情報
  const partsData = useMemo(() => {
    return getMissionPartsData(masterData, getIDs(getMissionPartsIDs));
  }, [getIDs, masterData]);

  // スライダーで表示するための情報
  const sliderItem: SliderItem[] | undefined = partsData?.map((partData) => {
    const image = `${partData.part_id}${sliderImageFileName}`;
    return {
      partID: partData.part_id,
      name: partData.part_name,
      image: image,
    };
  });

  // スライダーコンポーネントに渡すprops
  const PartsSelectSliderProps: PartsSelectSliderProps = {
    selectIndex: partsData?.findIndex(
      (partData) => partData.part_id === state.selectedPartID
    ),
    selectedIDs: isSelectedIDs,
    items: sliderItem ? sliderItem : [],
    // スライダーでパーツをクリックした時の処理(黄色の枠線の移動)
    onSelect: (index: number) => {
      if (!sliderItem) return;
      dispatch({ type: "selectedPartID", val: sliderItem[index].partID });
    },
  };

  // 選択ボタンを押下した時の処理
  const onPartSelectClick = () => {
    if (!state.selectedPartID) return;
    dispatch({
      type: "selectedMissionPartsIDs",
      val: state.selectedMissionPartsIDs?.includes(state.selectedPartID)
        ? state.selectedMissionPartsIDs.filter(
            (id) => id !== state.selectedPartID
          )
        : [...state.selectedMissionPartsIDs, state.selectedPartID],
    });
  };

  return (
    <Main>
      <PartDetailArea>
        <MissionPartDetailUnit {...{ partsData, masterData }} />
        <BtnArea>
          <PartsSelectBtn
            isSelected={isSelectedIDs.includes(state.selectedPartID)}
            onClick={onPartSelectClick}
          />
        </BtnArea>
      </PartDetailArea>
      <PartsSelectSlider {...PartsSelectSliderProps} />
    </Main>
  );
};
