import { useContext, useEffect, useMemo } from "react";
import { SatelliteAssemblyDispatchContext } from "../../../contexts";
import { MasterData } from "../../../types";
import { getTotalLaunchAndLoading } from "../../../utils";
import { useSelectedPartsDetails } from "./useSelectedPartsDetails";

export const useLoadingParameter = (masterData: MasterData) => {
  const { missionParts, batteryPart, busPart } =
    useSelectedPartsDetails(masterData);

  const { totalLoading } = getTotalLaunchAndLoading(
    missionParts,
    batteryPart,
    busPart
  );

  const loadingLimit = useMemo(() => busPart?.max_loading_mass_kg, [busPart]);

  const dispatch = useContext(SatelliteAssemblyDispatchContext);
  useEffect(() => {
    dispatch({
      type: "isLoadingOver",
      val: loadingLimit === undefined ? false : loadingLimit < totalLoading,
    });
  }, [dispatch, loadingLimit, totalLoading]);

  return { totalLoading, loadingLimit };
};
