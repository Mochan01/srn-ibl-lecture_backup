import { MasterData } from "../types";
import { CategoryName } from "../types";

export type CategoryIDGetter = (key: CategoryName) => number | undefined;

type GetCategoryID = (masterData: MasterData) => CategoryIDGetter;

/**
 * カテゴリ名からカテゴリIDを取得する
 * @param key
 * @param masterData
 * @returns
 */
export const getCategoryID: GetCategoryID = (masterData) => (key) => {
  return masterData.category_list.find((x) => x.category_name === key)
    ?.category_id;
};
