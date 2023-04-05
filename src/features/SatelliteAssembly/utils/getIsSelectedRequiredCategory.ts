import { isCategoryInclusionValid } from ".";
import { GetIsSelectedRequiredCategory } from "../types";
import { CategoryName } from "../types";

export type GetIsSelectedRequiredCategoryReturn = (
  categoryName: CategoryName,
  selectedID?: string
) => boolean;

/**
 * 必要なカテゴリが選択されているかどうかを判定する
 */
export const getIsSelectedRequiredCategory: GetIsSelectedRequiredCategory<
  GetIsSelectedRequiredCategoryReturn
> = (getCategoryID, required_category) => {
  return (categoryName, selectedID) => {
    // カテゴリIDを取得する
    const requiredCategory = required_category.filter(
      (x) => x === getCategoryID(categoryName)
    );

    // 何が選択されたかを取得し、アイコンを表示するかどうかを判定する
    return isCategoryInclusionValid(selectedID, requiredCategory);
  };
};
