// prettier-ignore
export const pdfPath: { [key in string]: string } = {
  // TODO: pdfが追加され次第順次追加 2023/2/7  現状,確認用
  "result-4_2.pdf": new URL("../assets/prod/pdf/result-4_2.pdf", import.meta.url).toString(),
  "result-4_3.pdf": new URL("../assets/prod/pdf/result-4_3.pdf", import.meta.url).toString(),
};
