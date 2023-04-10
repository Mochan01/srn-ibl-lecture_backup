import React, { FC } from "react";
import { Parameter } from "../../../../../elements/Parameter";
import { MasterData } from "../../../types";
import { useMonthsParameter } from "../hooks";

interface MonthsParameterProps {
  masterData: MasterData;
  preparationPeriod: number;
}

/**
 * MonthsParameterコンポーネント
 * @param {MonthsParameterProps} props プロパティ
 * @returns {JSX.Element} JSX要素
 */
export const MonthsParameter: FC<MonthsParameterProps> = ({
  masterData,
  preparationPeriod,
}) => {
  const totalMonth = useMonthsParameter(masterData, preparationPeriod);
  return (
    <Parameter
      value={totalMonth}
      limit={preparationPeriod}
      title="準備期間"
      unit="ヶ月"
    />
  );
};
