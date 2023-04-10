import React, { FC } from "react";
import { Parameter } from "../../../../../elements/Parameter";
import { MasterData } from "../../../types";
import { useLaunchParameter } from "../hooks";

interface LaunchParameterProps {
  masterData: MasterData;
}

/**
 * LaunchParameterコンポーネント
 * @param {LaunchParameterProps} props プロパティ
 * @returns {JSX.Element} JSX要素
 */
export const LaunchParameter: FC<LaunchParameterProps> = ({ masterData }) => {
  // useLaunchParameterフックを利用して合計打ち上げ可能質量と打ち上げ質量制限を取得
  const { totalLaunch, launchLimit } = useLaunchParameter(masterData);
  return (
    <Parameter
      value={totalLaunch}
      limit={launchLimit}
      title="打ち上げ 可能質量"
      unit="kg"
    />
  );
};
