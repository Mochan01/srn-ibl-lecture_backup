/**
 * Creates a URI for an asset.
 */
const getPrefix = () => {
  switch (process.env.NEXT_PUBLIC_ENV) {
    case "production":
      return "net";
    case "development":
      return "dev";
    default:
      return;
  }
};

/**
 * Creates a URI for an asset.
 */
export const createAssetUri = (
  fileName: string,
  prefix = getPrefix()
): string =>
  prefix
    ? `https://resources.ibl.surala.${prefix}/lecture/${fileName}`
    : fileName;
