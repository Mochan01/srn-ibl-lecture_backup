import React, { useState } from "react";
import styled from "styled-components";
const lecture_title_base = new URL("../../../assets/lecture_title_base.png", import.meta.url).toString();
const lecture_button_start = new URL("../../../assets/lecture_button_start.png", import.meta.url).toString();
const Main = styled.div `
  width: 700px;
  height: 327px;
  background-image: url(${lecture_title_base});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;
const Wrapper = styled.div `
  position: absolute;
  padding: 40px 32px;
  width: 400px;
  height: 240px;
  left: 270px;
  top: 56px;
  overflow: hidden;
  h1 {
    font-size: 24px;
    line-height: 1;
    margin-bottom: 40px;
    color: #1a6cf1;
    font-weight: bold;
  }
  h2 {
    font-size: 16px;
    color: #5a5a5a;
  }
`;
const ButtonArea = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  & > button {
    background: #000;
  }
`;
const StartBtn = styled.div `
  width: 253px;
  height: 82px;
  background-image: url(${lecture_button_start});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;
export const TitleBase = ({ unitName, unitTitle, onClick }) => {
    const [isShow, setShow] = useState(true);
    return (React.createElement(Main, null,
        React.createElement(Wrapper, null,
            !isShow &&
                React.createElement(React.Fragment, null,
                    React.createElement("h1", null, unitName),
                    React.createElement("h2", null, unitTitle)),
            isShow &&
                React.createElement(ButtonArea, null,
                    React.createElement(StartBtn, { onClick: () => {
                            onClick();
                            setShow(false);
                        } })))));
};
//# sourceMappingURL=TitleBase.js.map