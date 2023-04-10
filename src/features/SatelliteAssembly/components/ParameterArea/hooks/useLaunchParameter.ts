import { useContext, useEffect } from "react";
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

  let launchLimit = 0;
  if (rocket && state.launchableMass === "leo") {
    launchLimit = rocket?.leo_launchable_mass_kg;
  } else if (rocket && state.launchableMass === "geo") {
    launchLimit = rocket?.geo_launchable_mass_kg;
  } else if (rocket && state.launchableMass === "ooo") {
    launchLimit = rocket?.ooo_launchable_mass_kg;
  }

  useEffect(() => {
    dispatch({
      type: "isLaunchOver",
      val: launchLimit === 0 ? false : launchLimit < totalLaunch,
    });
  }, [dispatch, launchLimit, totalLaunch]);

  return { totalLaunch, launchLimit };
};
