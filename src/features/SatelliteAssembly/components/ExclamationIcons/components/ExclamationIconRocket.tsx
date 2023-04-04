import React, { FC, useContext } from "react";
import { ExclamationIcon } from "../styles";
import { SatelliteAssemblyStateContext } from "../../../contexts";
import { ExclamationIconProps } from "../types";

/**
 * ビックリマークのアイコン（ロケット）
 */
export const ExclamationIconRocket: FC<ExclamationIconProps> = ({
  getIsSelectedRequiredCategoryReturn,
}) => {
  const { selectedRocketID } = useContext(SatelliteAssemblyStateContext);
  const shouldRender = getIsSelectedRequiredCategoryReturn(
    "ロケット",
    selectedRocketID
  );

  return <>{shouldRender && <ExclamationIcon index={3} />}</>;
};
