import React from "react";
import styled from "styled-components";
const ImageLecture = new URL("../../../assets/prod/lecture_panel_answer.png", import.meta.url).toString();
/* lecture_base.png */
const LectureBase = styled.div `
	width: 1286px;
	height: 965px;
  background-image: url(${ImageLecture});
  background-repeat: no-repeat;
  background-position: 0 0;
  position: relative;
`;
const Frame = styled.div `
  position: absolute;
  top: 0;
  left: 0;
`;
/* lecture_headline.png */
const HeadLine = styled.div `
  width: 1286px;
  height: 67px;
`;
/* lecture_headline.png */
const LectureHeadLine = styled(HeadLine) `
  background-image: url(${ImageLecture});
  background-position: 0 -1938px;
  background-repeat: no-repeat;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
/* lecture_flame.png */
const Rectangle = styled.div `
  background-image: url(${ImageLecture});
  width: 1286px;
	height: 965px;
  background-position:0 -969px;
  background-repeat: no-repeat;
  position: relative;
`;
const Comment = styled.p `
  color: #fff;
  line-height: 1;
  padding-top: 8px;
  white-space: nowrap;
  overflow: hidden;
`;
const UnitName = styled(Comment) `
  font-size: 22px;
  width: 120px;
  padding-left: 23px;
`;
const UnitTitle = styled(Comment) `
  font-size: 30px;
  width: 880px;
`;
export const LectureFrame = ({ unitName, unitTitle, children }) => {
    return (React.createElement(LectureBase, null,
        React.createElement(HeadLine, null),
        children,
        React.createElement(Frame, null,
            React.createElement(LectureHeadLine, null,
                React.createElement(UnitName, null, unitName),
                React.createElement(UnitTitle, null, unitTitle)),
            React.createElement(Rectangle, null))));
};
//# sourceMappingURL=LectureFrame.js.map