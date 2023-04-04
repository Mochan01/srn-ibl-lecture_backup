import { isAllIncluded, splitAsCategoryID } from ".";
import { GetIsSelectedRequiredCategory } from "../types";

export type GetIsSelectedRequiredCategoryMissionReturn = (
  selectedMissionPartsIDs: string[]
) => boolean;

/**
 * 必要なカテゴリが選択されているかどうかを判定する
 */
export const getIsSelectedRequiredCategoryMission: GetIsSelectedRequiredCategory<
  GetIsSelectedRequiredCategoryMissionReturn
> = (getCategoryID, required_category) => {
  return (selectedMissionPartsIDs) => {
    const selectedMissionPartsIDsMap = selectedMissionPartsIDs.map(
      (selectedMissionPartsID) => {
        return splitAsCategoryID(selectedMissionPartsID);
      }
    );

    // 必須パーツのリストからミッションパーツのみを抽出
    const requiredCategory = required_category.filter(
      (x) =>
        x !== getCategoryID("ロケット") &&
        x !== getCategoryID("衛星バス") &&
        x !== getCategoryID("太陽電池")
    );

    // ミッションパーツが選択されているかを判定
    return (
      !selectedMissionPartsIDs.length ||
      !isAllIncluded(selectedMissionPartsIDsMap, requiredCategory)
    );
  };
};
