import { useContext, useEffect, useMemo } from "react";
import {
  SatelliteAssemblyStateContext,
  SatelliteAssemblyDispatchContext,
} from "../../../contexts";
import { MasterData } from "../../../types";
import { getTotalLaunchAndLoading } from "../../../utils";
import { useSelectedPartsDetails } from "./useSelectedPartsDetails";

export const useLaunchParameter = (masterData: MasterData) => {
  const state = useContext(SatelliteAssemblyStateContext);
  const dispatch = useContext(SatelliteAssemblyDispatchContext);

  const { missionParts, batteryPart, busPart, rocket } =
    useSelectedPartsDetails(masterData);

  const { totalLaunch } = getTotalLaunchAndLoading(
    missionParts,
    batteryPart,
    busPart
  );

  const launchLimit = useMemo(() => {
    if (rocket && state.launchableMass === "leo") {
      return rocket.leo_launchable_mass_kg;
    } else if (rocket && state.launchableMass === "geo") {
      return rocket.geo_launchable_mass_kg;
    } else if (rocket && state.launchableMass === "ooo") {
      return rocket.ooo_launchable_mass_kg;
    }
  }, [rocket, state.launchableMass]);

  useEffect(() => {
    dispatch({
      type: "isLaunchOver",
      val: launchLimit === undefined ? false : launchLimit < totalLaunch,
    });
  }, [dispatch, launchLimit, totalLaunch]);

  return { totalLaunch, launchLimit };
};