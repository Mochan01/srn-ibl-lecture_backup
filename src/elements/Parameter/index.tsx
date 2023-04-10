import React, { FC, useMemo } from "react";
import { Main, SUnit, SGraph, STitle, SAlertImage, SPie } from "./styles";
import { getGradient } from "./utils";

const src = new URL(
  "../../assets/prod/icon_alert.png",
  import.meta.url
).toString();

export interface ParameterProps {
  value: number;
  unit: string;
  title: string;
  limit?: number;
  className?: string;
}

/**
 * 選択したパーツのコストや電力などの総和を表示する円グラフ
 */
export const Parameter: FC<ParameterProps> = ({
  value,
  limit,
  unit,
  title,
  ...props
}) => {
  // 上限に対する現在の値の割合を計算
  const hasLimit = typeof limit !== "undefined";
  const percentage = hasLimit ? (value / limit) * 100 : 0;

  // 割合が整数かどうかを判定
  const isPercentageInteger = useMemo(
    () => Number.isInteger(Math.floor(percentage)),
    [percentage]
  );

  // グラフに占める色を算出
  const gradient = useMemo(
    () => getGradient(isPercentageInteger ? percentage : 100),
    [isPercentageInteger, percentage]
  );

  // 上限 が 0 の場合、または 割合 が 100 を超える場合は !を表示する
  const overFlag = useMemo(
    () => (hasLimit && (isPercentageInteger && percentage > 100)) || limit === 0,
    [hasLimit, isPercentageInteger, percentage, limit]
  );

  return (
    <Main {...props}>
      <SUnit>
        <SGraph>
          <STitle {...{ overFlag }}>{title}</STitle>
          {overFlag && <SAlertImage {...{ src }} />}
          <SPie {...{ gradient }}>
            {hasLimit ? limit + unit : "???" + unit}
          </SPie>
        </SGraph>
      </SUnit>
    </Main>
  );
};
