import React, { FC, useContext } from "react";
import { Rocket } from "src-ibl-lecture-master-special/types";
import styled from "styled-components";
import { PartCost } from "../../../elements/PartCost";
import { PartDetail } from "../../../elements/PartDetail";
import { SatelliteAssemblyStateContext } from "../contexts";
import { MasterData } from "../types";
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

interface RocketDetailUnitProps {
  masterData: MasterData;
  partsData: Rocket[];
}

export const RocketDetailUnit: FC<RocketDetailUnitProps> = ({
  masterData,
  partsData,
}) => {
  const state = useContext(SatelliteAssemblyStateContext);

  // // IDに紐づくパーツのデータ
  const partDetail = getPartDetailData<Rocket>(partsData, state.selectedPartID);
  const categoryTitle = partDetail?.category_name;
  const categoryDescription = getCategoryDescription(
    masterData,
    partDetail?.category_id
  );
  const partName = partDetail ? partDetail.part_name : "";
  const partDescription = partDetail ? partDetail.description : "";

  // missionのlaunchable_massによって変える
  let launchableMassKg;
  if (state.launchableMass === "leo") {
    launchableMassKg = partDetail?.leo_launchable_mass_kg;
  } else if (state.launchableMass === "geo") {
    launchableMassKg = partDetail?.geo_launchable_mass_kg;
  } else {
    launchableMassKg = partDetail?.ooo_launchable_mass_kg;
  }

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
        {launchableMassKg && (
          <PartCost
            cost_name={"打ち上げ可能質量（kg）"}
            cost={launchableMassKg}
            isCostOver={state.isLaunchOver}
          />
        )}
      </STable>
    </Main>
  );
};
