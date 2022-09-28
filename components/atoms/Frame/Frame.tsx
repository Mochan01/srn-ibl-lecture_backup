import React, { FC } from "react";
import styled from "styled-components";
const ImageLecture = new URL("../../../assets/prod/lecture_panel_answer.png", import.meta.url).toString();

export interface FrameProps {
  unitName: string;
  unitTitle: string;
}

const Main = styled.div`
  position: relative;
`;

/* lecture_headline.png */
const Head = styled.div`
  background-image: url(${ ImageLecture });
  width: 1286px;
	height: 67px;
  background-position: 0 -1938px;
  background-repeat: no-repeat;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

/* lecture_flame.png */
const Rectangle = styled.div`
  background-image: url(${ ImageLecture });
  width: 1286px;
	height: 965px;
  background-position:0 -969px;
  background-repeat: no-repeat;
  position: relative;
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

