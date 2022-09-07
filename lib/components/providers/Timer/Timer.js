import React from "react";
import styled from "styled-components";
import { useTimeout } from "../../../hooks/useTimeout";
const Main = styled.div.attrs((props) => ({
    style: {}
})) `
`;
export const Timer = ({ duration, onEnd }) => {
    useTimeout({ duration, onEnd });
    return (React.createElement(React.Fragment, null,
        React.createElement(Main, null)));
};
//# sourceMappingURL=Timer.js.map