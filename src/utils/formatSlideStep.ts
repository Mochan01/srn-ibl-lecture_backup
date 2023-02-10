/**
 * 文字列を「_」で分割して、スライド名とステップ名に分けます。分けられた値をオブジェクトとして返します。
 * @param value 
 * @returns 
 */
export const formatSlideStep = (value: string) => {
  const [slide, step] = value.split("_");
  return { slide: Number(slide), step: Number(step) };
};
