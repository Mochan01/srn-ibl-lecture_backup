import {
  getIsSelectedRequiredCategoryMission,
  getIsSelectedRequiredCategory,
  CategoryIDGetter,
} from "../../../utils";
import { SatelliteAssemblyState } from "../../../hooks";
import { MissionList } from "src-ibl-lecture-master-special/types";

/**
 * パーツカテゴリーの選択が全てされているかを判定する
 */
export const isAllSelected = (
  requiredCategory: MissionList["required_category"],
  {
    selectedMissionPartsIDs,
    selectedBatteryID,
    selectedBusID,
    selectedRocketID,
  }: SatelliteAssemblyState,
  categoryIDGetter: CategoryIDGetter
) => {
  const getIsSelectedRequiredCategoryReturn = getIsSelectedRequiredCategory(
    categoryIDGetter,
    requiredCategory
  );

  const getIsSelectedRequiredCategoryMissionReturn =
    getIsSelectedRequiredCategoryMission(categoryIDGetter, requiredCategory);

  return (
    getIsSelectedRequiredCategoryMissionReturn(selectedMissionPartsIDs) ||
    getIsSelectedRequiredCategoryReturn("太陽電池", selectedBatteryID) ||
    getIsSelectedRequiredCategoryReturn("衛星バス", selectedBusID) ||
    getIsSelectedRequiredCategoryReturn("ロケット", selectedRocketID)
  );
};
