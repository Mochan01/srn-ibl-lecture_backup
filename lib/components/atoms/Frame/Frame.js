import React from "react";
import styled from "styled-components";
import { SIZE } from "../../../data/SIZE";
const Main = styled.div `
  width: 1000px;
  height: 750px;
  position: relative;
`;
const Head = styled.div `
  background-image: url("lecture_headline.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  position: absolute;
  width: 998px;
  height: ${SIZE.HEAD_H}px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Rectangle = styled.div `
  background-image: url("lecture_flame.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 1000px;
  height: 750px;
  position: absolute;
`;
const Comment = styled.p `
  color: #fff;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
`;
const UnitName = styled(Comment) `
  font-size: 22px;
  width: 120px;
  padding-left: 23px;
`;
const UnitTitle = styled(Comment) `
  font-size: 30px;
  width: 880px;
`;
export const Frame = ({ unitName, unitTitle }) => {
    return (React.createElement(Main, null,
        React.createElement(Head, null,
            React.createElement(UnitName, null, unitName),
            React.createElement(UnitTitle, null, unitTitle)),
        React.createElement(Rectangle, null)));
};
//# sourceMappingURL=Frame.js.map