import React from "react";
import styled from "styled-components";
import { SIZE } from "../../../data/SIZE";
const SLIDE_DISTANCE = 200;
const Main = styled.div `
  background-image: url(${({ image }) => image});
  background-image: ${({ image }) => image ? `url(${image})` : "none"};
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  animation-name:
    ${({ motion1 }) => motion1 ? motion1 : "none"},
    ${({ motion2 }) => motion2 ? motion2 : "none"};
  animation-duration: .3s;
  width: ${SIZE.W}px;
  height: ${SIZE.H}px;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes slideup {
    from {
      transform: translateY(-${SLIDE_DISTANCE}px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slidedown {
    from {
      transform: translateY(${SLIDE_DISTANCE}px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slideleft {
    from {
      transform: translateX(${SLIDE_DISTANCE}px);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes slideright {
    from {
      transform: translateX(-${SLIDE_DISTANCE}px);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes enlarge {
    from {
      transform: scale(.5);
    }
    to {
      transform: scale(1);
    }
  }
`;
export const Panel = props => {
    return React.createElement(Main, Object.assign({}, props), props.children);
};
//# sourceMappingURL=Panel.js.map