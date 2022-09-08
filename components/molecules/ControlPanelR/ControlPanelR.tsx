import React, { FC } from "react";
import styled from "styled-components";
import { SIZE } from "../../../data/SIZE";
import { ControlPanelA } from "../../atoms/ControlPanelA/ControlPanelA";
import { SpeedBtn, SPEED_BUTTON_MUTATIONS } from "../../atoms/SpeedBtn/SpeedBtn";

export interface ControlPanelRProps {
}

const Wrapper = styled.div`
  padding-top: ${ SIZE.BTN_PAD_T }px;
  display: flex;
  justify-content: center;
  opacity: .5;
`;

export const ControlPanelR: FC<ControlPanelRProps> = ({
}) => {
  return (
    <>
      <ControlPanelA>
        <Wrapper>
          <SpeedBtn mutation={ SPEED_BUTTON_MUTATIONS.LEVEL1 } />
        </Wrapper>
      </ControlPanelA>
    </>
  );
};
