import React, { FC } from "react";
import styled from "styled-components";
import { ArrowBtn } from "../../atoms/ArrowBtn/ArrowBtn";
import { Paginate } from "../../atoms/Paginate/Pagenate";
import { classNames } from "../../../data/ClassNames";
import { SeekBar, SeekBarProps } from "../../atoms/SeekBar/SeekBar";

export interface ControlPanelProps extends SeekBarProps {
}

const Main = styled.div`
`;

export const ControlPanel: FC<ControlPanelProps> = ({
  points
}) => {
  return (
    <>
      <Main>
        <SeekBar
          points={ points }
          onChange={ () => {} }
        />
        <ArrowBtn id={ classNames.arrowPrev } dir="prev" />
        <ArrowBtn id={ classNames.arrowNext } dir="next" />
        <Paginate id={ classNames.paginate } />
      </Main>
    </>
  );
};
