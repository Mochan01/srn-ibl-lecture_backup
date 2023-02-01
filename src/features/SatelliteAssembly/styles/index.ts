import styled from "styled-components";
import { backGroundWhiteColor } from "../config";

export const SPartDetailArea = styled.div`
  height: 330px;
  width: 680px;
  position: relative;
  background-color: ${backGroundWhiteColor};
`;
export const SBtnArea = styled.div`
  position: absolute;
  top: 285px;
  right: 40px;
`;

export const STable = styled.div`
  width: 640px;
  height: 40px;
  display: grid;
  column-gap: 16px;
  row-gap: 7px;
  grid-template-columns: 312px 312px;
`;

export const SCategoryTitle = styled.div`
  color: #5a5a5a;
  font-size: 18px;
  line-height: 24px;
`;
export const SCategoryDescription = styled.div`
  color: #5a5a5a;
  font-size: 16px;
  line-height: 24px;
`;
