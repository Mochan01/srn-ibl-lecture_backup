import React from "react";
import styled, { css } from "styled-components";
import customMedia from "../../../data/customMedia";
const styleSpacer = css `
  display: inline-block;
  ${customMedia.greaterThan("pc") `
    width: ${({ $width }) => $width.pc}px;
    height: ${({ $height }) => $height.pc}px;
  `};
  ${customMedia.between("sp", "tb") `
    width: ${({ $width }) => $width.tb}px;
    height: ${({ $height }) => $height.tb}px;
  `};
  ${customMedia.lessThan("sp") `
    width: ${({ $width }) => $width.sp}px;
    height: ${({ $height }) => $height.sp}px;
  `};
`;
const styleStacker = css `
  & > * {
    ${customMedia.greaterThan("pc") `
      margin-left: ${({ $width }) => $width.pc}px;
      margin-bottom: ${({ $height }) => $height.pc}px;
    `};
    ${customMedia.between("sp", "tb") `
      margin-left: ${({ $width }) => $width.tb}px;
      margin-bottom: ${({ $height }) => $height.tb}px;
    `};
    ${customMedia.lessThan("sp") `
      margin-left: ${({ $width }) => $width.sp}px;
      margin-bottom: ${({ $height }) => $height.sp}px;
    `};
    &:first-child { margin-left: 0; }
    &:last-child { margin-bottom: 0; }
  }
`;
const Main = styled.span `
  ${({ children }) => children ? styleStacker : styleSpacer}
`;
/**
 * For opening a space.
 * @param param0
 * @returns
 */
export const Spacer = ({ size, children, axis, when }) => {
    const createVerticalSize = (whenSize) => axis === "vertical" ? 0 : whenSize || size;
    const createHorizontalSize = (whenSize) => axis === "horizontal" ? 0 : whenSize || size;
    return (React.createElement(Main, { "$width": {
            pc: createVerticalSize(when === null || when === void 0 ? void 0 : when.pc),
            tb: createVerticalSize(when === null || when === void 0 ? void 0 : when.tb),
            sp: createVerticalSize(when === null || when === void 0 ? void 0 : when.sp)
        }, "$height": {
            pc: createHorizontalSize(when === null || when === void 0 ? void 0 : when.pc),
            tb: createHorizontalSize(when === null || when === void 0 ? void 0 : when.tb),
            sp: createHorizontalSize(when === null || when === void 0 ? void 0 : when.sp)
        } }, children));
};
//# sourceMappingURL=Spacer.js.map