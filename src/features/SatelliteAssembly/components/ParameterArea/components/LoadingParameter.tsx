import React, { FC } from "react";
import { Parameter } from "../../../../../elements/Parameter";
import { MasterData } from "../../../types";
import { useLoadingParameter } from "../hooks";

interface LaunchParameterProps {
  masterData: MasterData;
}

export const LoadingParameter: FC<LaunchParameterProps> = ({ masterData }) => {
  // useLoadingParameterフックを利用して合計積載量と積載量制限を取得
  const { totalLoading, loadingLimit } = useLoadingParameter(masterData);
  return (
    <Parameter
      value={totalLoading}
      limit={loadingLimit}
      title="積載可能 質量"
      unit="kg"
    />
  );
};