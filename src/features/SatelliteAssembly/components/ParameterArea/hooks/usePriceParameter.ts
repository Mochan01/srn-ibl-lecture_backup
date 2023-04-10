import { useContext, useEffect } from "react";
import { SatelliteAssemblyDispatchContext } from "../../../contexts";
import { MasterData } from "../../../types";
import { getTotalPriceAndMonth } from "../../../utils";
import { useSelectedPartsDetails } from "./useSelectedPartsDetails";

export const usePriceParameter = (
  masterData: MasterData,
  maxBudget: number
) => {
  const { missionParts, batteryPart, busPart, rocket } =
    useSelectedPartsDetails(masterData);

  const { totalPrice } = getTotalPriceAndMonth(
    missionParts,
    batteryPart,
    busPart,
    rocket
  );

  const dispatch = useContext(SatelliteAssemblyDispatchContext);
  useEffect(() => {
    dispatch({ type: "isPriceOver", val: maxBudget < totalPrice });
  }, [dispatch, maxBudget, totalPrice]);

  return totalPrice;
};
