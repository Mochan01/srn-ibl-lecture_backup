import { useContext, useEffect, useMemo } from "react";
import { SatelliteAssemblyDispatchContext } from "../../../contexts";
import { useSelectedPartsDetails } from "./useSelectedPartsDetails";
import { MasterData } from "../../../types";
import { getTotalWatts } from "../../../utils";

export const useWattsParameter = (masterData: MasterData) => {
  const { missionParts, batteryPart, busPart } = useSelectedPartsDetails(masterData);

  const totalWatts = getTotalWatts(missionParts, busPart);
  const wattsLimit = useMemo(() => batteryPart?.power_supply_watts, [batteryPart]);

  const dispatch = useContext(SatelliteAssemblyDispatchContext);
  useEffect(() => {
    dispatch({
      type: "isWattsOver",
      val: wattsLimit === undefined ? false : wattsLimit < totalWatts,
    });
  }, [dispatch, wattsLimit, totalWatts]);

  return { totalWatts, wattsLimit };
};
