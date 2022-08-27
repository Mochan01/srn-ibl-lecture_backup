import React, { FC } from "react";
import styled from "styled-components";
import { ArrowBtn } from "../../atoms/ArrowBtn/ArrowBtn";
import { Paginate } from "../../atoms/Paginate/Pagenate";
import { classNames } from "../../../data/ClassNames";
import { SeekBar } from "../../atoms/SeekBar/SeekBar";
import { PauseBtn } from "../../atoms/PauseBtn/PauseBtn";

export interface ControlPanelProps {
}

const Main = styled.div`
`;

export const ControlPanel: FC<ControlPanelProps> = ({
}) => {

  return (
    <>
      <Main>
        <SeekBar />
        <PauseBtn />
        <ArrowBtn id={ classNames.arrowPrev } dir="prev" />
        <ArrowBtn id={ classNames.arrowNext } dir="next" />
        <Paginate id={ classNames.paginate } />
      </Main>
    </>
  );
};
