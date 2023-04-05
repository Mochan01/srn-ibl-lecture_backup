import styled from "styled-components";
import { PanelObjectProps } from "..";
import { keyframes } from "../assets";

export const Main = styled.div<PanelObjectProps>(
  ({ step, x, y, depth, motion1, motion2 }) => `
  ${keyframes}
  position: absolute;
  z-index: ${depth};
  left: ${x}px;
  top: ${y}px;
  cursor: pointer;
  // 現在のstepじゃないstepのボタンとかは押せないようにしてたが、
  // ボタンを出した後にstepを追加されるユースケースがあったので一旦コメントアウト
  // pointer-events: ${step === depth ? "auto" : "none"};
  user-select: none;
  animation-name: ${motion1 || "none"}, ${motion2 || "none"};
  animation-duration: .3s;
`
);
