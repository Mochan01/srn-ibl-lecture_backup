import React, { FC } from "react";
import { ExclamationIconBattery } from "./ExclamationIconBattery";
import { ExclamationIconBus } from "./ExclamationIconBus";
import { ExclamationIconMission } from "./ExclamationIconMission";
import { ExclamationIconRocket } from "./ExclamationIconRocket";
import {
  getIsSelectedRequiredCategory,
  getIsSelectedRequiredCategoryMission,
  CategoryIDGetter,
} from "../../../utils";
import { MissionList } from "src-ibl-lecture-master-special/types";

interface ExclamationIconsProps {
  categoryIDGetter: CategoryIDGetter;
  requiredCategory: MissionList["required_category"];
}

/**
 * パーツが選択されていない場合はアラートを表示
 */
export const ExclamationIcons: FC<ExclamationIconsProps> = ({
  categoryIDGetter,
  requiredCategory
}) => {
  const getIsSelectedRequiredCategoryReturn = getIsSelectedRequiredCategory(
    categoryIDGetter,
    requiredCategory
  );

  const getIsSelectedRequiredCategoryMissionReturn =
    getIsSelectedRequiredCategoryMission(categoryIDGetter, requiredCategory);

  return (
    <>
      <ExclamationIconMission
        {...{ getIsSelectedRequiredCategoryMissionReturn }}
      />
      <ExclamationIconBattery {...{ getIsSelectedRequiredCategoryReturn }} />
      <ExclamationIconBus {...{ getIsSelectedRequiredCategoryReturn }} />
      <ExclamationIconRocket {...{ getIsSelectedRequiredCategoryReturn }} />
    </>
  );
};
