import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useResizeWindow } from "../../../hooks/useResizeWindow";
const Wrapper = styled.div `
  background: #000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
;
const Container = styled.div.attrs(({ $scale }) => ({ style: { transform: `scale(${$scale})` } })) ``;
export const ScaleWrapper = ({ children }) => {
    const [windowWidth, windowHeight] = useResizeWindow();
    const ref = useRef();
    const [$scale, setScale] = useState(1);
    useEffect(() => {
        const { clientWidth, clientHeight } = ref.current.children[0];
        const windowRatio = windowHeight / windowWidth;
        const clientRatio = clientHeight / clientWidth;
        const scale = windowRatio > clientRatio
            ? windowWidth / clientWidth
            : windowHeight / clientHeight;
        setScale(Math.floor(scale * 1000) / 1000);
    }, [windowWidth, windowHeight, ref.current]);
    return (React.createElement(Wrapper, null,
        React.createElement(Container, Object.assign({}, { ref, $scale }), children)));
};
//# sourceMappingURL=ScaleWrapper.js.map