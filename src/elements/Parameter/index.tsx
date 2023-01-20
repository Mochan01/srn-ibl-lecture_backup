import React, { FC, ReactNode } from "react";
import styled from "styled-components";

const ImageLecture = new URL(
  "../../assets/prod/icon_alert.png",
  import.meta.url
).toString();

const Main = styled.div`
  position: relative;
  width: 100px;
  height: 150px;
`;
const SUnit = styled.div`
  text-align: center;
`;

const TEXT_H = 14;
const STitle = styled.div`
  margin-bottom: 8px;
  padding-top: 8px;
  font-weight: 700;
  font-size: ${TEXT_H}px;
`;
const SGraph = styled.div`
  position: relative;
`;

const SAlertImage = styled.img`
  height: 24px;
  width: 24px;
  left: 38px;
  position: absolute;
  z-index: 1;
`;

interface ConicGradientProps {
  gradient: string;
}
const SPie = styled.div<ConicGradientProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  width: 100px;
  height: 100px;
  font-size: 16px;
  font-weight: 700;
  background-image: radial-gradient(#f2f2f2 55%, transparent 56%),
    conic-gradient(${(props) => props.gradient});
  border-radius: 50%;
  position: absolute;
`;

const firstColor = "#00ffff";
const secondColor = "#b5ff00";
const thirdColor = "#ff82c3";
const finalColor = "#d9d9d9";

/**
 * パーセントによって円グラフのCSSに適用する文字列を返す
 * @param percentage
 * @returns
 */
const getGradient = (percentage: number) => {
  if (33 >= percentage)
    return `${firstColor} 0% ${percentage}%, ${finalColor} ${percentage}% 100%`;
  if (33 < percentage && percentage <= 67)
    return `${firstColor} 0% 33% ,${secondColor} 33% ${percentage}%, ${finalColor} ${percentage}% 100%`;
  if (67 < percentage && percentage <= 100)
    return `${firstColor} 0% 33% ,${secondColor} 33% 67%, ${thirdColor} 67% ${percentage}%,${finalColor} ${percentage}% 100%`;
  else
    return `${firstColor} 0% 33% ,${secondColor} 33% 67%, ${thirdColor} 67%  100%`;
};

export interface ParameterProps {
  value: number;
  limit: number;
  unit: string;
  title: string;
  children?: ReactNode;
  className?: string;
}

/**
 * 特別レクチャー(衛生組み立て画面）のパラメータ
 */
export const Parameter: FC<ParameterProps> = ({
  value,
  limit,
  unit,
  title,
}) => {
  const percentage = (value / limit) * 100;
  const gradient = getGradient(percentage);
  const overFlag = percentage > 100;

  return (
    <Main>
      <SUnit>
        <STitle>{title}</STitle>
        <SGraph>
          {overFlag && <SAlertImage src={ImageLecture} />}
          <SPie gradient={gradient}>{value + unit}</SPie>
        </SGraph>
      </SUnit>
    </Main>
  );
};
