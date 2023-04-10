import { useContext, useEffect } from "react";
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

  const loadingLimit = busPart?.max_loading_mass_kg || 0;

  const dispatch = useContext(SatelliteAssemblyDispatchContext);
  useEffect(() => {
    dispatch({
      type: "isLoadingOver",
      val: loadingLimit === 0 ? false : loadingLimit < totalLoading,
    });
  }, [dispatch, loadingLimit, totalLoading]);

  return { totalLoading, loadingLimit };
};
