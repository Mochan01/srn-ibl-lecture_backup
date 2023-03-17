import React, { FC } from "react";
import { Spacer } from "srn-ibl-component";
import styled from "styled-components";
import { MissionSelect } from "src-ibl-lecture-master-unit/types/missionSelect";
import { createAssetUri } from "../../utils";

const Main = styled.div`
  display: flex;
`;

const NavigationButton = styled.div<{ image: string }>`
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: contain;
  width: 256px;
  height: 148px;
  cursor: pointer;
`;
export interface NavigationButtonsProps {
  missionSelect: MissionSelect;
  onClick: (goto: string) => void; // ボタンをクリックしたときにどこに遷移させるか gotoはMissionSelect > m_btn_x_goto
}

/**
 * page遷移用のボタンを並べる
 */
export const NavigationButtons: FC<NavigationButtonsProps> = ({
  onClick,
  missionSelect,
}) => {
  const handleClick = (goto: string | undefined) => {
    if (!goto) return;
    onClick(goto);
  };
  return (
    <Main>
      {missionSelect.m_btn_1 && missionSelect.m_btn_1_goto && (
        <NavigationButton
          image={createAssetUri(missionSelect.m_btn_1)}
          onClick={() => handleClick(missionSelect.m_btn_1_goto)}
        />
      )}
      {missionSelect.m_btn_2 && missionSelect.m_btn_2_goto && (
        <>
          <Spacer size={64} />
          <NavigationButton
            image={createAssetUri(missionSelect.m_btn_2)}
            onClick={() => handleClick(missionSelect.m_btn_2_goto)}
          />
        </>
      )}
      {missionSelect.m_btn_3 && missionSelect.m_btn_3_goto && (
        <>
          <Spacer size={64} />
          <NavigationButton
            image={createAssetUri(missionSelect.m_btn_3)}
            onClick={() => handleClick(missionSelect.m_btn_3_goto)}
          />
        </>
      )}
      {missionSelect.m_btn_4 && missionSelect.m_btn_4_goto && (
        <>
          <Spacer size={64} />
          <NavigationButton
            image={createAssetUri(missionSelect.m_btn_4)}
            onClick={() => handleClick(missionSelect.m_btn_4_goto)}
          />
        </>
      )}
      {missionSelect.m_btn_5 && missionSelect.m_btn_5_goto && (
        <>
          <Spacer size={64} />
          <NavigationButton
            image={createAssetUri(missionSelect.m_btn_5)}
            onClick={() => handleClick(missionSelect.m_btn_5_goto)}
          />
        </>
      )}
    </Main>
  );
};
