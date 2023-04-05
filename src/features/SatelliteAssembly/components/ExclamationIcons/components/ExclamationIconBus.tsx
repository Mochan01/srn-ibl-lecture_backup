import React, { FC, useContext } from "react";
import { ExclamationIcon } from "../styles";
import { SatelliteAssemblyStateContext } from "../../../contexts";
import { ExclamationIconProps } from "../types";

/**
 * ビックリマークのアイコン（積載バス）
 */
export const ExclamationIconBus: FC<ExclamationIconProps> = ({
  getIsSelectedRequiredCategoryReturn,
}) => {
  const { selectedBusID } = useContext(SatelliteAssemblyStateContext);
  const shouldRender = getIsSelectedRequiredCategoryReturn(
    "衛星バス",
    selectedBusID
  );

  return <>{shouldRender && <ExclamationIcon index={2} />}</>;
};
