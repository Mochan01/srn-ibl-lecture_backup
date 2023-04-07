import { firstColor, secondColor, thirdColor, finalColor } from "../config";

/**
 * パーセントによって円グラフのCSSに適用する文字列を返す
 * @param percentage
 * @returns
 */
export const getGradient = (percentage: number) => {
  // パーセントが33以下の場合
  if (33 >= percentage)
    return `${firstColor} 0% ${percentage}%, ${finalColor} ${percentage}% 100%`;

  // パーセントが33より大きく67以下の場合
  if (33 < percentage && percentage <= 67)
    return `${firstColor} 0% 33% ,${secondColor} 33% ${percentage}%, ${finalColor} ${percentage}% 100%`;

  // パーセントが67より大きく100以下の場合
  if (67 < percentage && percentage <= 100)
    return `${firstColor} 0% 33% ,${secondColor} 33% 67%, ${thirdColor} 67% ${percentage}%,${finalColor} ${percentage}% 100%`;

  // それ以外の場合
  else
    return `${firstColor} 0% 33% ,${secondColor} 33% 67%, ${thirdColor} 67%  100%`;
};
