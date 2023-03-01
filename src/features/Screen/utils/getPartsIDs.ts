import { SAVED_PARTS } from "../../../config";
import { SavedParts } from "../../DisplayResult";

const mockString =
  // eslint-disable-next-line quotes
  '{"missionPartsIDs":["4_2","4_3"],"rocketID":"1_5","busID":"2_4","batteryID":"3_2"}';

export const getPartsIDs = (): SavedParts | undefined => {
  const item =
    process.env.NODE_ENV === "development"
      ? mockString
      : localStorage.getItem(SAVED_PARTS);
  return item ? JSON.parse(item) : undefined;
};
