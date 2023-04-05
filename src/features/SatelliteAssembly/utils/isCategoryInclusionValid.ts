type NumList = number[];
type SplitAsCategoryID = (id: string) => number;
type IsAllIncluded = (numList: NumList, numList2: NumList) => boolean;
export type IsCategoryInclusionValid = (
  selectedID: string | undefined,
  required_category?: number[]
) => boolean;

/**
 * 第二引数の配列のすべての要素が第一引数の配列に含まれているかどうかを判定する
 * @param numList
 * @param numList2
 * @returns
 */
export const isAllIncluded: IsAllIncluded = (numList, numList2) => {
  return numList2.every((num) => numList.includes(num));
};

/**
 * idの中身を"_"で分割し、先頭の要素を返す
 * @param id
 * @returns
 */
export const splitAsCategoryID: SplitAsCategoryID = (id) =>
  Number(id.split("_")[0]);

/**
 * 選択されたIDと必要なカテゴリのリストを受け取り、アイコンを描画すべきかどうかを判断する
 * @param selectedID
 * @param required_category
 * @returns
 */
export const isCategoryInclusionValid: IsCategoryInclusionValid = (
  selectedID,
  required_category = []
) => {
  return selectedID
    ? !isAllIncluded([splitAsCategoryID(selectedID)], required_category)
    : true;
};
