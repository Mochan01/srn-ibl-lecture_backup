import React, { FC } from "react";
import { Parameter } from "../../../../../elements/Parameter";
import { MasterData } from "../../../types";
import { useWattsParameter } from "../hooks";

interface WattsParameterProps {
  masterData: MasterData;
}

export const WattsParameter: FC<WattsParameterProps> = ({ masterData }) => {
  const { totalWatts, wattsLimit } = useWattsParameter(masterData);
  return (
    <Parameter
      value={totalWatts}
      limit={wattsLimit}
      title="使用可能 電力"
      unit="W"
    />
  );
};