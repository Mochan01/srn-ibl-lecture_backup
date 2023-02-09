import React, { FC } from "react";
import styled from "styled-components";

const ImgReset = new URL(
  "../../assets/prod/button_pdf_export.png",
  import.meta.url
).toString();

const Main = styled.div`
  background-image: url(${ImgReset});
  background-repeat: no-repeat;
  background-size: contain;
  width: 80px;
  height: 80px;
  cursor: pointer;
`;

export interface OpenPdfBtnProps {
  filePath: string;
}

/**
 * Pdfを開くボタン
 */
export const OpenPdfBtn: FC<OpenPdfBtnProps> = ({ filePath }) => {
  const openPdf = () => {
    window.open(filePath, "_blank");
  };
  return <Main role="button" onClick={openPdf} />;
};
