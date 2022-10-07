import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import customMedia, { DeviceProps } from "../../../data/customMedia";

export interface SpacerProps {
  size?: number;
  children?: ReactNode;
  axis?: "vertical" | "horizontal";
  when?: DeviceProps<number>;
}

interface MainProps {
  $width: DeviceProps<number>;
  $height: DeviceProps<number>;
}

const styleSpacer = css`
  display: inline-block;
  ${ customMedia.greaterThan<MainProps>("pc")`
    width: ${ ({ $width }) => $width.pc }px;
    height: ${ ({ $height }) => $height.pc }px;
  ` };
  ${ customMedia.between<MainProps>("sp", "tb")`
    width: ${ ({ $width }) => $width.tb }px;
    height: ${ ({ $height }) => $height.tb }px;
  ` };
  ${ customMedia.lessThan<MainProps>("sp")`
    width: ${ ({ $width }) => $width.sp }px;
    height: ${ ({ $height }) => $height.sp }px;
  ` };
`;

const styleStacker = css`
  & > * {
    ${ customMedia.greaterThan<MainProps>("pc")`
      margin-left: ${ ({ $width }) => $width.pc }px;
      margin-bottom: ${ ({ $height }) => $height.pc }px;
    ` };
    ${ customMedia.between<MainProps>("sp", "tb")`
      margin-left: ${ ({ $width }) => $width.tb }px;
      margin-bottom: ${ ({ $height }) => $height.tb }px;
    ` };
    ${ customMedia.lessThan<MainProps>("sp")`
      margin-left: ${ ({ $width }) => $width.sp }px;
      margin-bottom: ${ ({ $height }) => $height.sp }px;
    ` };
    &:first-child { margin-left: 0; }
    &:last-child { margin-bottom: 0; }
  }
`;

const Main = styled.span<MainProps>`
  ${ ({ children }) => children ? styleStacker : styleSpacer }
`;

/**
 * For opening a space.
 * @param param0 
 * @returns 
 */
export const Spacer: FC<SpacerProps> = ({
  size,
  children,
  axis,
  when
}) => {

  const createVerticalSize
    = (whenSize: number) => axis === "vertical" ? 0 : whenSize || size;
  const createHorizontalSize
    = (whenSize: number) => axis === "horizontal" ? 0 : whenSize || size;

  return (
    <Main
      $width={ {
        pc: createVerticalSize(when?.pc),
        tb: createVerticalSize(when?.tb),
        sp: createVerticalSize(when?.sp)
      } }
      $height={ {
        pc: createHorizontalSize(when?.pc),
        tb: createHorizontalSize(when?.tb),
        sp: createHorizontalSize(when?.sp)
      } }
    >
      { children }
    </Main>
  );
};
