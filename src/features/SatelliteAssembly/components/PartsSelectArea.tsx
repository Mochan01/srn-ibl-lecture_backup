import React, { FC, useContext, useEffect, useMemo } from "react";
import { MissionList } from "src-ibl-lecture-master-special/types";
import styled from "styled-components";
import { PartsSelectBtn } from "../../../elements/PartsSelectBtn";
import {
  PartsSelectSlider,
  PartsSelectSliderProps,
  SliderItem,
} from "../../../elements/PartsSelectSlider";
import { PartsSelectTab } from "../../../elements/PartsSelectTab";
import {
  SatelliteAssemblyDispatchContext,
  SatelliteAssemblyStateContext,
} from "../contexts";
import { SatelliteAssemblyAction } from "../hooks";
import { MasterData } from "../types";
import {
  handleMissionData,
  getMissionParts,
  getBatteryIDs,
  getBusIDs,
  getRocketIDs,
  getRocketData,
  getBusData,
  getBatteryData,
  getMissionPartsData,
  getPartDetailData,
} from "../utils";
import { PartDetailUnit } from "./PartDetailUnit";
const Main = styled.div``;
export const backGroundWhiteColor = "#fafbfd " as const;
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
const SSelectArea = styled.div`
  background-color: ${backGroundWhiteColor};
  height: 500px;
  width: 680px;
`;

interface PartsSelectAreaProps {
  missionData: MissionList;
  masterData: MasterData;
}

export const PartsSelectArea: FC<PartsSelectAreaProps> = ({
  missionData,
  masterData,
}) => {
  const state = useContext(SatelliteAssemblyStateContext);
  const dispatch = useContext(SatelliteAssemblyDispatchContext);
  console.log("state", state);

  const isSelectedIDs: string[] = useMemo(() => {
    if (state.tabIndex === 0)
      return state.selectedMissionPartsIDs ? state.selectedMissionPartsIDs : [];
    if (state.tabIndex === 1)
      return state.selectedBatteryID ? [state.selectedBatteryID] : [];
    if (state.tabIndex === 2)
      return state.selectedBusID ? [state.selectedBusID] : [];
    if (state.tabIndex === 3)
      return state.selectedRocketID ? [state.selectedRocketID] : [];
    return [];
  }, [
    state.selectedBatteryID,
    state.selectedBusID,
    state.selectedMissionPartsIDs,
    state.selectedRocketID,
    state.tabIndex,
  ]);

  useEffect(() => {
    if (state.selectedPartID) return;
    const getIDs = handleMissionData(missionData);
    dispatch({ type: "selectedPartID", val: getIDs(getMissionParts)[0] });
  }, [dispatch, missionData, state.selectedPartID]);
  const partsData = useMemo(() => {
    const getIDs = handleMissionData(missionData);
    if (state.tabIndex === 1) {
      return getBatteryData(masterData, getIDs(getBatteryIDs));
    }
    if (state.tabIndex === 2) {
      return getBusData(masterData, getIDs(getBusIDs));
    }
    if (state.tabIndex === 3) {
      return getRocketData(masterData, getIDs(getRocketIDs));
    }
    return getMissionPartsData(masterData, getIDs(getMissionParts));
  }, [masterData, missionData, state.tabIndex]);

  const sliderItem: SliderItem[] | undefined = partsData?.map((partData) => {
    const image = `${partData.part_id}_slider.png`;
    return {
      part_id: partData.part_id,
      name: partData.part_name,
      image: image,
    };
  });

  const tmpPartsSelectSliderProps: PartsSelectSliderProps = {
    selectIndex: partsData?.findIndex(
      (partData) => partData.part_id === state.selectedPartID
    ),
    selectedIDs: isSelectedIDs,
    items: sliderItem ? sliderItem : [],
    onSelect: (index: number) => {
      if (!sliderItem) return;
      dispatch({ type: "selectedPartID", val: sliderItem[index].part_id });
    },
  };
  const onTabChange = (index: number) => {
    const getIDs = handleMissionData(missionData);
    let action: SatelliteAssemblyAction = {
      type: "selectedPartID",
      val: state.selectedMissionPartsIDs
        ? state.selectedMissionPartsIDs[0]
        : getIDs(getMissionParts)[0],
    };
    if (index === 1) {
      action = {
        type: "selectedPartID",
        val: state.selectedBatteryID
          ? state.selectedBatteryID
          : getIDs(getBatteryIDs)[0],
      };
    }
    if (index === 2) {
      action = {
        type: "selectedPartID",
        val: state.selectedBusID ? state.selectedBusID : getIDs(getBusIDs)[0],
      };
    }
    if (index === 3) {
      action = {
        type: "selectedPartID",
        val: state.selectedRocketID
          ? state.selectedRocketID
          : getIDs(getRocketIDs)[0],
      };
    }
    dispatch(action);
    dispatch({ type: "tabIndex", val: index });
  };
  const onPartSelectClick = () => {
    if (!state.selectedPartID) return;
    let action: SatelliteAssemblyAction = {
      type: "selectedRocketID",
      val: state.selectedPartID,
    };
    if (state.tabIndex === 0) {
      action = { type: "selectedMissionPartsIDs", val: [state.selectedPartID] };
    }
    if (state.tabIndex === 1) {
      action = { type: "selectedBatteryID", val: state.selectedPartID };
    }
    if (state.tabIndex === 2) {
      action = { type: "selectedBusID", val: state.selectedPartID };
    }
    dispatch(action);
  };
  return (
    <Main key={state.tabIndex}>
      <PartsSelectTab index={state.tabIndex} onChange={onTabChange} />
      <SSelectArea>
        <PartDetailArea>
          <PartDetailUnit masterData={masterData} />
          <BtnArea>
            <PartsSelectBtn
              isSelected={isSelectedIDs.includes(
                state.selectedPartID ? state.selectedPartID : ""
              )}
              onClick={onPartSelectClick}
            />
          </BtnArea>
        </PartDetailArea>
        <PartsSelectSlider {...tmpPartsSelectSliderProps} />
      </SSelectArea>
    </Main>
  );
};
