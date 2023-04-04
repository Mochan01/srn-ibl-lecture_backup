import React, { FC, useContext } from "react";
import { ExclamationIcon } from "../styles";
import { SatelliteAssemblyStateContext } from "../../../contexts";
import { ExclamationIconProps } from "../types";

/**
 * ビックリマークのアイコン（電源パーツ）
 */
export const ExclamationIconBattery: FC<ExclamationIconProps> = ({
  getIsSelectedRequiredCategoryReturn,
}) => {
  const { selectedBatteryID } = useContext(SatelliteAssemblyStateContext);
  const shouldRender = getIsSelectedRequiredCategoryReturn(
    "太陽電池",
    selectedBatteryID
  );

  return <>{shouldRender && <ExclamationIcon index={1} />}</>;
};
