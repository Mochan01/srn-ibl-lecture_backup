import React, { FC } from "react";
import styled from "styled-components";

const ImgSelect = new URL(
  "../../assets/prod/button_select.png",
  import.meta.url
).toString();
const ImgSelected = new URL(
  "../../assets/prod/button_selected.png",
  import.meta.url
).toString();

const Main = styled.div<Pick<PartsSelectBtnProps, "isSelected">>(
  ({ isSelected }) => {
    return `
    background-image: ${
      isSelected ? `url(${ImgSelected})` : `url(${ImgSelect})`
    };
    background-repeat: no-repeat;
    background-size: contain;
    width: 100px;
    height: 40px;
    cursor: pointer;
`;
  }
);

export interface PartsSelectBtnProps {
  onClick: () => void;
  isSelected: boolean;
  className?: string;
}

/**
 * パーツセレクト部分のボタン
 */
export const PartsSelectBtn: FC<PartsSelectBtnProps> = ({
  onClick,
  isSelected,
}) => {
  return <Main {...{ isSelected, onClick }} />;
};
