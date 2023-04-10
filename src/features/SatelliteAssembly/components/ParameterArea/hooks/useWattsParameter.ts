import { useContext, useEffect } from "react";
import { SatelliteAssemblyDispatchContext } from "../../../contexts";
import { useSelectedPartsDetails } from "./useSelectedPartsDetails";
import { MasterData } from "../../../types";
import { getTotalWatts } from "../../../utils";

export const useWattsParameter = (masterData: MasterData) => {
  const { missionParts, batteryPart, busPart } = useSelectedPartsDetails(masterData);

  const totalWatts = getTotalWatts(missionParts, busPart);
  const wattsLimit = batteryPart?.power_supply_watts || 0;

  const dispatch = useContext(SatelliteAssemblyDispatchContext);
  useEffect(() => {
    dispatch({
      type: "isWattsOver",
      val: wattsLimit === 0 ? false : wattsLimit < totalWatts,
    });
  }, [dispatch, wattsLimit, totalWatts]);

  return { totalWatts, wattsLimit };
};
