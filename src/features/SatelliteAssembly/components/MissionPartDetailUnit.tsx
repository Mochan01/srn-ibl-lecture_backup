import React, { FC, useContext } from "react";
import styled from "styled-components";
import { PartCost } from "../../../elements/PartCost";
import { PartDetail } from "../../../elements/PartDetail";
import { SatelliteAssemblyStateContext } from "../contexts";
import { SCategoryTitle, SCategoryDescription, STable } from "../styles";
import { MasterData, MissionParts } from "../types";
import { getCategoryDescription, getPartDetailData } from "../utils";
const Main = styled.div`
  padding-left: 20px;
  padding-top: 12px;
`;

interface MissionPartDetailUnitProps {
  masterData: MasterData;
  partsData: MissionParts[];
}

export const MissionPartDetailUnit: FC<MissionPartDetailUnitProps> = ({
  masterData,
  partsData,
}) => {
  const state = useContext(SatelliteAssemblyStateContext);

  // IDに紐づくパーツのデータ
  const partDetail = getPartDetailData<MissionParts>(
    partsData,
    state.selectedPartID
  );
  const categoryTitle = partDetail?.category_name;
  const categoryDescription = getCategoryDescription(
    masterData,
    partDetail?.category_id
  );
  const partName = partDetail ? partDetail.part_name : "";
  const partDescription = partDetail ? partDetail.description : "";

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
            isCostOver={state.isPriceOver}
          />
        )}
        {partDetail?.manufacturing_period_months && (
          <PartCost
            cost_name={"製造期間（月）"}
            cost={partDetail?.manufacturing_period_months}
            isCostOver={state.isMonthOver}
          />
        )}
        {partDetail?.body_mass_kg && (
          <PartCost
            cost_name={"本体質量（kg）"}
            cost={partDetail?.body_mass_kg}
            isCostOver={state.isLaunchOver || state.isLoadingOver}
          />
        )}
        {partDetail?.required_power_watts && (
          <PartCost
            cost_name={"衛星バス必要電力（W）"}
            cost={partDetail?.required_power_watts}
            isCostOver={state.isWattsOver}
          />
        )}
      </STable>
    </Main>
  );
};
