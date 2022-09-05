import React from "react";
import styled from "styled-components";
import customMedia from "../../../data/customMedia";
const Main = styled.div `
  ${customMedia.greaterThan("pc") `
    ${({ pc }) => pc};
  `};
  ${customMedia.between("sp", "tb") `
    ${({ tb }) => tb};
  `};
  ${customMedia.lessThan("sp") `
    ${({ sp }) => sp};
  `};
`;
/**
 * A generic component that can pass Style as props.
 * @param param0
 * @returns
 */
export const Box = props => {
    var _a, _b, _c;
    const makeStyle = (style) => style ? Object.assign({}, props === null || props === void 0 ? void 0 : props.sx, style) : props === null || props === void 0 ? void 0 : props.sx;
    return (React.createElement(Main, Object.assign({}, props, { as: props === null || props === void 0 ? void 0 : props.as, pc: makeStyle((_a = props === null || props === void 0 ? void 0 : props.when) === null || _a === void 0 ? void 0 : _a.pc), tb: makeStyle((_b = props === null || props === void 0 ? void 0 : props.when) === null || _b === void 0 ? void 0 : _b.tb), sp: makeStyle((_c = props === null || props === void 0 ? void 0 : props.when) === null || _c === void 0 ? void 0 : _c.sp) }), props === null || props === void 0 ? void 0 : props.children));
};
//# sourceMappingURL=Box.js.map