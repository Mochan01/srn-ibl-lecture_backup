import React from "react";
import styled from "styled-components";
import { Student } from "../../atoms/Student/Student";
import { Teacher } from "../../atoms/Teacher/Teacher";
import { Bubble } from "../../atoms/Bubble/Bubble";
const Main = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TeacherWrapper = styled.div `
  margin-bottom: 32px;
`;
const BubbleWrapper = styled.div `
  position: absolute;
  bottom: 254px;
`;
export const Cast = ({ student, teacher, children }) => {
    return (React.createElement(Main, null,
        React.createElement(TeacherWrapper, null,
            React.createElement(Teacher, { animation: teacher })),
        children &&
            React.createElement(BubbleWrapper, null,
                React.createElement(Bubble, null, "\u307B\u3052\u307B\u3052\u307B\u3052")),
        React.createElement(Student, { animation: student })));
};
//# sourceMappingURL=Cast.js.map