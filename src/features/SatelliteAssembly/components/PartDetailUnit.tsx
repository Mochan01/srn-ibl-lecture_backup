import React, { FC, useContext } from "react";
import styled from "styled-components";
import { PartCost } from "../../../elements/PartCost";
import { PartDetail } from "../../../elements/PartDetail";
import { SatelliteAssemblyStateContext } from "../contexts";
import { MasterData, PartType } from "../types";
import { getCategoryDescription, getPartDetailData } from "../utils";
const Main = styled.div`
  padding-left: 20px;
  padding-top: 12px;
`;

const STable = styled.div`
  width: 640px;
  height: 40px;
  display: grid;
  column-gap: 16px;
  row-gap: 7px;
  grid-template-columns: 312px 312px;
`;

const SCategoryTitle = styled.div`
  color: #5a5a5a;
  font-size: 18px;
  line-height: 24px;
`;
const SCategoryDescription = styled.div`
  color: #5a5a5a;
  font-size: 16px;
  line-height: 24px;
`;

interface PartDetailUnitProps {
  masterData: MasterData;
}

// 全てのパーツのプロパティを持った型
// interface PartType {
//   category_id: string;
//   category_name: string;
//   part_id: string;
//   part_name: string;
//   description: string;
//   price_hundred_million?: number;
//   leo_launchable_mass_kg?: number;
//   geo_launchable_mass_kg?: number;
//   ooo_launchable_mass_kg?: number;
//   manufacturing_period_months?: number;
//   max_loading_mass_kg?: number;
//   body_mass_kg?: number;
//   required_power_watts?: number;
//   power_supply_watts?: number;
// }
export const PartDetailUnit: FC<PartDetailUnitProps> = ({ masterData }) => {
  const state = useContext(SatelliteAssemblyStateContext);

  const partData = getPartDetailData(masterData, state.selectedPartID);
  // プロパティを持たせるために型をキャストする
  let partDetail;
  if (partData) {
    partDetail = partData as PartType;
  }
  const categoryTitle = partDetail?.category_name;
  const categoryDescription = getCategoryDescription(
    masterData,
    partDetail?.category_id
  );
  const partName = partDetail ? partDetail.part_name : "";
  const partDescription = partDetail ? partDetail.description : "";
  // 打ち上げ可能質量は三つのうち、一つになる
  const launchableMassKg =
    partDetail?.geo_launchable_mass_kg ||
    partDetail?.leo_launchable_mass_kg ||
    partDetail?.ooo_launchable_mass_kg;

  // TODO:isOverCostを実装する
  return (
    <Main>
      <SCategoryTitle>{categoryTitle}</SCategoryTitle>
      <SCategoryDescription>{categoryDescription}</SCategoryDescription>
      <PartDetail partName={partName} description={partDescription} />
      <div css={"margin-top: 7px"} />
      <STable>
        {partDetail?.price_hundred_million && (
          <PartCost
            cost_name={"価格（億円）"}
            cost={partDetail?.price_hundred_million}
            isCostOver={true}
          />
        )}
        {partDetail?.manufacturing_period_months && (
          <PartCost
            cost_name={"製造期間（月）"}
            cost={partDetail?.manufacturing_period_months}
            isCostOver={true}
          />
        )}
        {launchableMassKg && (
          <PartCost
            cost_name={"打ち上げ可能質量（kg）"}
            cost={launchableMassKg}
            isCostOver={true}
          />
        )}
        {partDetail?.max_loading_mass_kg && (
          <PartCost
            cost_name={"最大積載可能質量（kg）"}
            cost={partDetail?.max_loading_mass_kg}
            isCostOver={true}
          />
        )}
        {partDetail?.body_mass_kg && (
          <PartCost
            cost_name={"本体質量（kg）"}
            cost={partDetail?.body_mass_kg}
            isCostOver={true}
          />
        )}
        {partDetail?.required_power_watts && (
          <PartCost
            cost_name={"衛星バス必要電力（W）"}
            cost={partDetail?.required_power_watts}
            isCostOver={true}
          />
        )}
        {partDetail?.power_supply_watts && (
          <PartCost
            cost_name={"供給電力（W）"}
            cost={partDetail?.power_supply_watts}
            isCostOver={true}
          />
        )}
      </STable>
    </Main>
  );
};
