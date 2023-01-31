import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { fontWeight } from "../../data/fontWeight";
const ImageLecture = new URL(
  "../../assets/prod/lecture_panel_answer.png",
  import.meta.url
).toString();

export interface LectureFrameProps {
  unitName: string;
  unitTitle: string;
  children?: ReactNode;
  countDown?: ReactNode;
}

/* lecture_base.png */
const Main = styled.div`
  width: 1286px;
  height: 965px;
  background-image: url(${ImageLecture});
  background-repeat: no-repeat;
  background-position: 0 0;
  position: relative;
`;

const Frame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  // これがないとクイズエリアがタップできなくなる
  pointer-events: none;
`;

/* lecture_headline.png */
const HeadLine = styled.div`
  width: 1286px;
  height: 67px;
`;

/* lecture_headline.png */
const LectureHeadLine = styled(HeadLine)`
  background-image: url(${ImageLecture});
  background-position: 0 -1938px;
  background-repeat: no-repeat;
  position: absolute;
  display: flex;
  justify-content: space-between;
  margin-top: 9px;
`;

/* lecture_flame.png */
const Rectangle = styled.div`
  background-image: url(${ImageLecture});
  width: 1286px;
  height: 965px;
  background-position: 0 -969px;
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

const Unit = styled(Comment)`
  font-size: 23px;
  font-weight: ${fontWeight["medium"]};
  margin: 18px 0 0 54px;
`;

export const LectureFrame: FC<LectureFrameProps> = ({
  unitName,
  unitTitle,
  children,
  countDown,
}) => {
  return (
    <Main>
      <HeadLine />
      {children}
      <Frame>
        <LectureHeadLine>
          <Unit>
            {unitName}
            <span css="width: 24px; display: inline-block;" />
            {unitTitle}
          </Unit>
          {countDown}
        </LectureHeadLine>
        <Rectangle />
      </Frame>
    </Main>
  );
};
