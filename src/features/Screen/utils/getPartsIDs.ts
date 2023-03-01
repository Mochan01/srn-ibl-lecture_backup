import { SAVED_PARTS } from "../../../config";
import { SavedParts } from "../../DisplayResult";

export const getPartsIDs = (): SavedParts | undefined => {
  const item = localStorage.getItem(SAVED_PARTS);
  return item && JSON.parse(item);
};
