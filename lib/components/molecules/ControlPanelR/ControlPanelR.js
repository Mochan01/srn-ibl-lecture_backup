import React from "react";
import styled from "styled-components";
import { SIZE } from "../../../data/SIZE";
import { ControlPanelA } from "../../atoms/ControlPanelA/ControlPanelA";
import { SpeedBtn, SPEED_BUTTON_MUTATIONS } from "../../atoms/SpeedBtn/SpeedBtn";
const Wrapper = styled.div `
  padding-top: ${SIZE.BTN_PAD_T}px;
  display: flex;
  justify-content: center;
  opacity: .5;
`;
export const ControlPanelR = ({}) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(ControlPanelA, null,
            React.createElement(Wrapper, null,
                React.createElement(SpeedBtn, { mutation: SPEED_BUTTON_MUTATIONS.LEVEL1 })))));
};
//# sourceMappingURL=ControlPanelR.js.map