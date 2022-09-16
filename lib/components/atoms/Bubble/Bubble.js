import React from "react";
import styled from "styled-components";
const speech_Bubble = new URL("../../../assets/prod/speech_bubble.png", import.meta.url).toString();
const Main = styled.div `
  background-image: url(${speech_Bubble});
  background-repeat: no-repeat;
  background-size: cover;
  width: 185px;
  height: 127px;
  padding: 22px 22px 40px 22px;
`;
const Wrapper = styled.div `
  height: 100%;
  overflow: hidden;
  line-height: 1.4;
`;
export const Bubble = ({ className, children }) => {
    return (React.createElement(Main, { className: className },
        React.createElement(Wrapper, { dangerouslySetInnerHTML: { __html: children } })));
};
//# sourceMappingURL=Bubble.js.map