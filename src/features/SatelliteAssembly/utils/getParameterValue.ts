import { Battery, Bus, Rocket } from "src-ibl-lecture-master-special/types";
import { MissionParts } from "../types";

export const getTotalPriceAndMonth = (
  missionParts: (MissionParts | undefined)[],
  batteryPart: Battery | undefined,
  busPart: Bus | undefined,
  rocket: Rocket | undefined
) => {
  let totalPrice = 0;
  let totalMonth = 0;
  [rocket, busPart, batteryPart, ...missionParts].forEach((part) => {
    if (part) {
      totalPrice += part.price_hundred_million;
      totalMonth += part.manufacturing_period_months;
    }
  });
  return { totalPrice, totalMonth };
};

export const getTotalLaunchAndLoading = (
  missionParts: (MissionParts | undefined)[],
  batteryPart: Battery | undefined,
  busPart: Bus | undefined
) => {
  let totalLaunch: number = 0;
  let totalLoading: number = 0;
  if (busPart) {
    totalLaunch += busPart.body_mass_kg;
  }
  if (batteryPart) {
    totalLaunch += batteryPart.body_mass_kg;
    totalLoading += batteryPart.body_mass_kg;
  }
  for (const missionPart of missionParts) {
    if (missionPart) {
      totalLaunch += missionPart.body_mass_kg;
      totalLoading += missionPart.body_mass_kg;
    }
  }
  return { totalLaunch, totalLoading };
};
export const getTotalWatts = (
  missionParts: (MissionParts | undefined)[],
  busPart: Bus | undefined
) => {
  let totalWatts: number = 0;
  [busPart, ...missionParts].forEach((part) => {
    if (part) {
      totalWatts += part.required_power_watts;
    }
  });
  return totalWatts;
};
