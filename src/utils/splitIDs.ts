import { SplitIDs } from "../types";

/**
 * コンマ区切りれで連結されているIDを配列に変換
 * @param combinedIDs
 * @returns
 */
export const splitIDs: SplitIDs = (...combinedIDs) =>
  combinedIDs.join("").split(",");
