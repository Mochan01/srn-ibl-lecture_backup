import React, { FC, useContext } from "react";
import { MissionList } from "src-ibl-lecture-master-special/types";
import styled from "styled-components";
import {
  BatterySelectArea,
  BusSelectArea,
  MissionPartsSelectArea,
  RocketSelectArea,
} from "../components";
import { PartsSelectTab } from "../../../elements/PartsSelectTab";
import {
  SatelliteAssemblyDispatchContext,
  SatelliteAssemblyStateContext,
} from "../contexts";
import { SatelliteAssemblyAction } from "../hooks";
import { MasterData } from "../types";
import {
  getBatteryIDs,
  getBusIDs,
  getRocketIDs,
  getMissionPartsIDs,
  handleMissionDataIDs,
} from "../utils";
import { backGroundWhiteColor } from "../config";
const Main = styled.div``;

const SSelectArea = styled.div`
  background-color: ${backGroundWhiteColor};
  height: 500px;
  width: 680px;
`;
interface PartsSelectAreaProps {
  missionData: MissionList;
  masterData: MasterData;
}

// パーツを選択する部分のエリア
export const PartsSelectArea: FC<PartsSelectAreaProps> = ({
  missionData,
  masterData,
}) => {
  const state = useContext(SatelliteAssemblyStateContext);
  const dispatch = useContext(SatelliteAssemblyDispatchContext);
  const getIDs = handleMissionDataIDs(missionData);

  console.log("state", state);

  // 開いているタブでの選択中のパーツのID
  // const isSelectedIDs = useMemo(() => {
  //   switch (state.tabIndex) {
  //     case 0:
  //       return state.selectedMissionPartsIDs || [];
  //     case 1:
  //       return state.selectedBatteryID ? [state.selectedBatteryID] : [];
  //     case 2:
  //       return state.selectedBusID ? [state.selectedBusID] : [];
  //     case 3:
  //       return state.selectedRocketID ? [state.selectedRocketID] : [];
  //     default:
  //       return [];
  //   }
  // }, [
  //   state.selectedBatteryID,
  //   state.selectedBusID,
  //   state.selectedMissionPartsIDs,
  //   state.selectedRocketID,
  //   state.tabIndex,
  // ]);

  // 開いているタブでのパーツの一覧情報
  // const partsData = useMemo(() => {
  //   switch (state.tabIndex) {
  //     case 1:
  //       return getBatteryData(masterData, getIDs(getBatteryIDs));
  //     case 2:
  //       return getBusData(masterData, getIDs(getBusIDs));
  //     case 3:
  //       return getRocketData(masterData, getIDs(getRocketIDs));
  //     default:
  //       return getMissionPartsData(masterData, getIDs(getMissionPartsIDs));
  //   }
  // }, [getIDs, masterData, state.tabIndex]);

  // スライダーで表示するための情報
  // const sliderItem: SliderItem[] | undefined = partsData?.map((partData) => {
  //   // TODO:画像のファイル名に合わせる
  //   const image = `${partData.part_id}_slider.png`;
  //   return {
  //     partID: partData.part_id,
  //     name: partData.part_name,
  //     image: image,
  //   };
  // });

  // スライダーコンポーネントに渡すprops
  // const PartsSelectSliderProps: PartsSelectSliderProps = {
  //   selectIndex: partsData?.findIndex(
  //     (partData) => partData.part_id === state.selectedPartID
  //   ),
  //   selectedIDs: isSelectedIDs,
  //   items: sliderItem ? sliderItem : [],
  //   // スライダーでパーツをクリックした時の処理(黄色の枠線の移動)
  //   onSelect: (index: number) => {
  //     if (!sliderItem) return;
  //     dispatch({ type: "selectedPartID", val: sliderItem[index].partID });
  //   },
  // };

  // tabがクリックされた時の処理
  const onTabChange = (index: number) => {
    let action: SatelliteAssemblyAction;
    // 選択済みのパーツが無い場合は一番最初のパーツを黄色の枠線で囲む
    switch (index) {
      // ミッションパーツ
      case 0:
        action = {
          type: "selectedPartID",
          val:
            state.selectedMissionPartsIDs.length !== 0
              ? state.selectedMissionPartsIDs[0]
              : getIDs(getMissionPartsIDs)[0],
        };
        break;
      // 電源パーツ
      case 1:
        action = {
          type: "selectedPartID",
          val: state.selectedBatteryID
            ? state.selectedBatteryID
            : getIDs(getBatteryIDs)[0],
        };
        break;
      // 積載パーツ
      case 2:
        action = {
          type: "selectedPartID",
          val: state.selectedBusID ? state.selectedBusID : getIDs(getBusIDs)[0],
        };
        break;
      // 打ち上げロケット
      case 3:
        action = {
          type: "selectedPartID",
          val: state.selectedRocketID
            ? state.selectedRocketID
            : getIDs(getRocketIDs)[0],
        };
        break;
      default:
        return;
    }
    dispatch(action);
    dispatch({ type: "tabIndex", val: index });
  };

  // 選択ボタンを押下した時の処理
  // const onPartSelectClick = () => {
  //   if (!state.selectedPartID) return;
  //   let action: SatelliteAssemblyAction;
  //   // すでに選択されているパーツの場合は削除する
  //   switch (state.tabIndex) {
  //     // ミッションパーツ
  //     case 0:
  //       action = {
  //         type: "selectedMissionPartsIDs",
  //         val: state.selectedMissionPartsIDs?.includes(state.selectedPartID)
  //           ? state.selectedMissionPartsIDs.filter(
  //               (id) => id !== state.selectedPartID
  //             )
  //           : [...state.selectedMissionPartsIDs, state.selectedPartID],
  //       };
  //       break;
  //     // 電源パーツ
  //     case 1:
  //       action = {
  //         type: "selectedBatteryID",
  //         val:
  //           state.selectedBatteryID === state.selectedPartID
  //             ? undefined
  //             : state.selectedPartID,
  //       };
  //       break;
  //     // 積載パーツ
  //     case 2:
  //       action = {
  //         type: "selectedBusID",
  //         val:
  //           state.selectedBusID === state.selectedPartID
  //             ? undefined
  //             : state.selectedPartID,
  //       };
  //       break;
  //     // 打ち上げロケット
  //     case 3:
  //       action = {
  //         type: "selectedRocketID",
  //         val:
  //           state.selectedRocketID === state.selectedPartID
  //             ? undefined
  //             : state.selectedPartID,
  //       };
  //       break;
  //     default:
  //       return;
  //   }
  //   dispatch(action);
  // };

  return (
    <Main key={state.tabIndex}>
      <PartsSelectTab index={state.tabIndex} onChange={onTabChange} />
      <SSelectArea>
        {state.tabIndex === 0 && (
          <MissionPartsSelectArea {...{ missionData, masterData }} />
        )}
        {state.tabIndex === 1 && (
          <BatterySelectArea {...{ missionData, masterData }} />
        )}
        {state.tabIndex === 2 && (
          <BusSelectArea {...{ missionData, masterData }} />
        )}
        {state.tabIndex === 3 && (
          <RocketSelectArea {...{ missionData, masterData }} />
        )}
      </SSelectArea>
      {/* <SSelectArea>
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
        <PartsSelectSlider {...PartsSelectSliderProps} />
      </SSelectArea> */}
    </Main>
  );
};
