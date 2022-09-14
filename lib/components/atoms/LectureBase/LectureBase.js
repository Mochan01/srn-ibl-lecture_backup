import React from "react";
import styled from "styled-components";
import { SIZE } from "../../../data/SIZE";
const lecture_base = new URL("../../../assets/prod/lecture_base.png", import.meta.url).toString();
const Main = styled.div `
  width: ${SIZE.W}px;
  height: ${SIZE.FRAME_H}px;
  background-image: url(${lecture_base});
  background-repeat: no-repeat;
  background-size: contain;
`;
export const LectureBase = () => React.createElement(Main, null);
//# sourceMappingURL=LectureBase.js.map