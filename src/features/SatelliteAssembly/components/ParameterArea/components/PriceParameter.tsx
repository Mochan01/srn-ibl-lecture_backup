import React, { FC } from "react";
import { Parameter } from "../../../../../elements/Parameter";
import { MasterData } from "../../../types";
import { usePriceParameter } from "../hooks";

interface PriceParameterProps {
  masterData: MasterData;
  maxBudget: number;
}

/**
 * PriceParameterコンポーネント
 * @param {PriceParameterProps} props プロパティ
 * @returns {JSX.Element} JSX要素
 */
export const PriceParameter: FC<PriceParameterProps> = ({
  masterData,
  maxBudget,
}) => {
  const totalPrice = usePriceParameter(masterData, maxBudget);
  return (
    <Parameter
      value={totalPrice}
      limit={maxBudget}
      title="製造コスト"
      unit="億円"
    />
  );
};
