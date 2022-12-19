
/**
 * fullSizeに対するsizeのパーセンテージを算出
 * @param fullSize 
 * @param size 
 * @returns 
 */
export const getPercent = (fullSize: number, size: number): number => {
  let percentage = size / fullSize;
  percentage = percentage * 100;
  percentage = Math.floor(percentage);

  return percentage;
};
