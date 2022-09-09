import React, { FC } from "react";
import styled from "styled-components";
import { SIZE } from "../../../data/SIZE";
const lecture_headline = new URL("../../../assets/lecture_headline.png", import.meta.url).toString();
const lecture_flame = new URL("../../../assets/lecture_flame.png", import.meta.url).toString();

export interface FrameProps {
  unitName: string;
  unitTitle: string;
}

const Main = styled.div`
  width: ${ SIZE.W }px;
  height: ${ SIZE.FRAME_H }px;
  position: relative;
`;

const Head = styled.div`
  background-image: url(${ lecture_headline });
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  position: absolute;
  width: 998px;
  height: ${ SIZE.HEAD_H }px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Rectangle = styled.div`
  background-image: url(${ lecture_flame });
  background-repeat: no-repeat;
  background-size: contain;
  width: ${ SIZE.W }px;
  height: ${ SIZE.FRAME_H }px;
  position: absolute;
`;

const Comment = styled.p`
  color: #fff;
  line-height: 1;
  padding-top: 8px;
  white-space: nowrap;
  overflow: hidden;
`;

const UnitName = styled(Comment)`
  font-size: 22px;
  width: 120px;
  padding-left: 23px;
`;

const UnitTitle = styled(Comment)`
  font-size: 30px;
  width: 880px;
`;

export const Frame: FC<FrameProps> = ({
  unitName,
  unitTitle
}) => {
  return (
    <Main>
      <Head>
        <UnitName>{ unitName }</UnitName>
        <UnitTitle>{ unitTitle }</UnitTitle>
      </Head>
      <Rectangle />
    </Main>
  );
};

