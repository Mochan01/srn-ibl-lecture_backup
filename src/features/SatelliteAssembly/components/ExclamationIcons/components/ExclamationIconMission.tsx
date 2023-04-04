import React, { FC, useContext } from "react";
import { ExclamationIcon } from "../styles";
import { SatelliteAssemblyStateContext } from "../../../contexts";
import { GetIsSelectedRequiredCategoryMissionReturn } from "../../../utils";

interface ExclamationIconMissionProps {
  getIsSelectedRequiredCategoryMissionReturn: GetIsSelectedRequiredCategoryMissionReturn;
}

/**
 * ビックリマークのアイコン（ミッションパーツ）
 */
export const ExclamationIconMission: FC<ExclamationIconMissionProps> = ({
  getIsSelectedRequiredCategoryMissionReturn,
}) => {
  const { selectedMissionPartsIDs } = useContext(SatelliteAssemblyStateContext);
  const shouldRender = getIsSelectedRequiredCategoryMissionReturn(
    selectedMissionPartsIDs
  );

  return <>{shouldRender && <ExclamationIcon index={0} />}</>;
};
