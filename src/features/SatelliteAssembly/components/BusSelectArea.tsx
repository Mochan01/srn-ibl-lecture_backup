import React, { FC, useContext, useMemo } from "react";
import { MissionList } from "src-ibl-lecture-master-special/types";
import styled from "styled-components";
import { PartsSelectBtn } from "../../../elements/PartsSelectBtn";
import {
  PartsSelectSlider,
  PartsSelectSliderProps,
  SliderItem,
} from "../../../elements/PartsSelectSlider";
import {
  SatelliteAssemblyDispatchContext,
  SatelliteAssemblyStateContext,
} from "../contexts";
import { MasterData } from "../types";
import { getBusIDs, getBusData, handleMissionDataIDs } from "../utils";
import { BusDetailUnit } from "../components";
import { SBtnArea, SPartDetailArea } from "../styles";
const Main = styled.div``;
interface BusSelectAreaProps {
  missionData: MissionList;
  masterData: MasterData;
}

// パーツを選択する部分のエリア
export const BusSelectArea: FC<BusSelectAreaProps> = ({
  missionData,
  masterData,
}) => {
  const state = useContext(SatelliteAssemblyStateContext);
  const dispatch = useContext(SatelliteAssemblyDispatchContext);
  const getIDs = handleMissionDataIDs(missionData);

  // 開いているタブでの選択中のパーツのID
  const isSelectedIDs = useMemo(() => {
    return state.selectedBusID ? [state.selectedBusID] : [];
  }, [state.selectedBusID]);

  // 開いているタブでのパーツの一覧情報
  const partsData = useMemo(() => {
    return getBusData(masterData, getIDs(getBusIDs));
  }, [getIDs, masterData]);

  // スライダーで表示するための情報
  const sliderItem: SliderItem[] = partsData.map((partData) => {
    return {
      partID: partData.part_id,
      name: partData.part_name,
    };
  });

  // スライダーコンポーネントに渡すprops
  const PartsSelectSliderProps: PartsSelectSliderProps = {
    selectIndex: partsData.findIndex(
      (partData) => partData.part_id === state.selectedPartID
    ),
    selectedIDs: isSelectedIDs,
    items: sliderItem,
    // スライダーでパーツをクリックした時の処理(黄色の枠線の移動)
    onSelect: (index: number) => {
      dispatch({ type: "selectedPartID", val: sliderItem[index].partID });
    },
  };

  // 選択ボタンを押下した時の処理
  const onPartSelectClick = () => {
    dispatch({
      type: "selectedBusID",
      val:
        state.selectedBusID === state.selectedPartID
          ? undefined
          : state.selectedPartID,
    });
  };

  return (
    <Main>
      <SPartDetailArea>
        <BusDetailUnit {...{ partsData, masterData }} />
        <SBtnArea>
          <PartsSelectBtn
            isSelected={isSelectedIDs.includes(state.selectedPartID)}
            onClick={onPartSelectClick}
          />
        </SBtnArea>
      </SPartDetailArea>
      <PartsSelectSlider {...PartsSelectSliderProps} />
    </Main>
  );
};
