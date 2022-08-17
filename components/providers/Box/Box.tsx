import React, { AllHTMLAttributes, ElementType, FC, ReactNode } from "react";
import styled, { CSSProperties, Interpolation  } from "styled-components";
import customMedia, { DeviceProps } from "../../../data/customMedia";

type Sx = Interpolation<CSSProperties>;

export interface BoxProps {
  as?: ElementType;
  sx?: Sx;
  when?: DeviceProps<Sx>;
  children?: ReactNode;
}

const Main = styled.div<DeviceProps<Sx>>`
  ${ customMedia.greaterThan<DeviceProps<Sx>>("pc")`
    ${ ({ pc }) => pc as string };
  ` };
  ${ customMedia.between<DeviceProps<Sx>>("sp", "tb")`
    ${ ({ tb }) => tb as string };
  ` };
  ${ customMedia.lessThan<DeviceProps<Sx>>("sp")`
    ${ ({ sp }) => sp as string };
  ` };
`;

/**
 * A generic component that can pass Style as props.
 * @param param0 
 * @returns 
 */
export const Box: FC<BoxProps & AllHTMLAttributes<HTMLElement>> = props => {

  const makeStyle
    = (style: Sx) => style ? Object.assign({}, props?.sx, style) : props?.sx;

  return (
    <Main
      { ...props }
      as={ props?.as }
      pc={ makeStyle(props?.when?.pc) }
      tb={ makeStyle(props?.when?.tb) }
      sp={ makeStyle(props?.when?.sp) }
    >
      { props?.children }
    </Main>
  );
};
