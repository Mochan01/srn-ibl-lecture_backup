/**
 * Creates a URI for an asset.
 * @param fileName The name of the asset.
 * @returns The URI for the asset.
 * @example
 * createAssetUri('test.mp4');
 */
export const createAssetUri = (fileName: string): string => {
  const prefix = process.env.NEXT_PUBLIC_ENV === "production" ? "net" : "dev";
  return `https://resources.ibl.surala.${prefix}/lecture/${fileName}`;
};
