import React, { FC } from "react";
import styled from "styled-components";

const ImgReset = new URL(
  "../../assets/prod/button_reset.png",
  import.meta.url
).toString();

const Main = styled.div`
  background-image: url(${ImgReset});
  background-repeat: no-repeat;
  background-size: contain;
  width: 181px;
  height: 59px;
  cursor: pointer;
`;

export interface ResetBtnProps {
  onClick: () => void;
  className?: string;
}

/**
 * リセットボタン
 */
export const ResetBtn: FC<ResetBtnProps> = ({ onClick }) => {
  const handleClick = () => {
    if (window.confirm("本当にリセットしますか？")) {
      onClick();
    }
  };
  return <Main role="button" onClick={handleClick} />;
};
