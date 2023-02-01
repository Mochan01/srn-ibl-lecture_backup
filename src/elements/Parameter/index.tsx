import React, { FC, ReactNode } from "react";
import styled from "styled-components";

const ImageAlert = new URL(
  "../../assets/prod/icon_alert.png",
  import.meta.url
).toString();

const Main = styled.div`
  position: relative;
  width: 94px;
  height: 150px;
`;
const SUnit = styled.div`
  text-align: center;
`;

const TEXT_H = 18;
const STitle = styled.div<{ overFlag: boolean }>`
  height: 40px;
  width: 94px;
  line-height: 21px;
  margin-bottom: 8px;
  padding-top: 8px;
  color: ${({ overFlag }) => (overFlag ? "#FF0000" : "#5a5a5a")};
  font-size: ${TEXT_H}px;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  display: flex;
`;
const SGraph = styled.div`
  position: relative;
`;

const SAlertImage = styled.img`
  height: 27px;
  width: 27px;
  left: 35px;
  bottom: -26px;
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
  width: 94px;
  height: 94px;
  font-size: 16px;
  color: #5a5a5a;
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
        <SGraph>
          {/* リミットが０の場合は非活性 */}
          {limit === 0 ? (
            <>
              <STitle overFlag={false}>{title}</STitle>
              <SPie gradient={getGradient(0)}>{"???" + unit}</SPie>
            </>
          ) : (
            <>
              <STitle {...{ overFlag }}>{title}</STitle>
              {overFlag && <SAlertImage src={ImageAlert} />}
              <SPie gradient={gradient}>{limit + unit}</SPie>
            </>
          )}
        </SGraph>
      </SUnit>
    </Main>
  );
};
