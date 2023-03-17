/**
 * プレビュー画像のファイル名を作成する
 * @param satelliteId
 * @returns
 */
export const createPreviewFileName = (satelliteId: string) => {
  return `preview-${satelliteId}.png`;
};

/**
 * サムネイル画像のファイル名を作成する
 * @param satelliteId
 * @returns
 */
export const createThumbnailFileName = (satelliteId: string) => {
  return `thumbnail-${satelliteId}.png`;
};
