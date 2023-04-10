import { useContext, useEffect } from "react";
import { SatelliteAssemblyDispatchContext } from "../../../contexts";
import { MasterData } from "../../../types";
import { getTotalPriceAndMonth } from "../../../utils";
import { useSelectedPartsDetails } from "./useSelectedPartsDetails";

export const useMonthsParameter = (
  masterData: MasterData,
  preparationPeriod: number
) => {
  const { missionParts, batteryPart, busPart, rocket } =
    useSelectedPartsDetails(masterData);

  const { totalMonth } = getTotalPriceAndMonth(
    missionParts,
    batteryPart,
    busPart,
    rocket
  );

  const dispatch = useContext(SatelliteAssemblyDispatchContext);
  useEffect(() => {
    dispatch({ type: "isMonthOver", val: preparationPeriod < totalMonth });
  }, [dispatch, preparationPeriod, totalMonth]);

  return totalMonth;
};
