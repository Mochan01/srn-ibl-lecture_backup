import React, { FC } from "react";
import styled from "styled-components";
import { Frame } from "../../atoms/Frame/Frame";
import { UnitTitle, UnitTitleProps } from "../../atoms/UnitTitle/UnitTitle";

export interface FrameUnitProps extends UnitTitleProps {
}

const Main = styled.div`
  position: relative;
`;

const UnitTitleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const FrameWrapper = styled.div`
  position: relative;
`;

export const FrameUnit: FC<FrameUnitProps> = props => {
  return (
    <>
      <Main>
        <UnitTitleWrapper>
          <UnitTitle { ...props }></UnitTitle>
        </UnitTitleWrapper>
        <FrameWrapper>
          <Frame />
        </FrameWrapper>
      </Main>
    </>
  );
};
