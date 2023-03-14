
/**
 * Creates a URI for an asset.
 * @param fileName The name of the asset.
 * @returns The URI for the asset.
 * @example
 * createAssetUri('test.mp4');
 */
export const createAssetUri = (fileName: string): string => {
  return `https://resources.ibl.surala.dev/lecture/${fileName}`;
};
