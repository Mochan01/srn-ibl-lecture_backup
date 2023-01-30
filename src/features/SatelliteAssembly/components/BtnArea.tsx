import React, { FC } from "react";
import styled from "styled-components";
import { LaunchBtn } from "../../../elements/LaunchBtn";
import { ResetBtn } from "../../../elements/ResetBtn";
const Main = styled.div`
  height: 59px;
  width: 680px;
  display: flex;
  justify-content: space-between;
`;

const tmpResetBtnProps = {
  onClick: () => console.log("リセットの処理を実行"),
};

export const BtnArea: FC = () => {
  return (
    <Main>
      <ResetBtn {...tmpResetBtnProps} />
      <LaunchBtn variant="OFF" onClick={() => console.log("launch")} />
    </Main>
  );
};
