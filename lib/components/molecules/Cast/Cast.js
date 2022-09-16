import React from "react";
import styled from "styled-components";
import { Student } from "../../atoms/Student/Student";
import { Teacher } from "../../atoms/Teacher/Teacher";
import { Bubble } from "../../atoms/Bubble/Bubble";
const Main = styled.div `
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;
const _Teacher = styled(Teacher) `
  margin-bottom: 32px;
`;
const _Bubble = styled(Bubble) `
  position: absolute;
  bottom: 254px;
`;
export const Cast = ({ student, teacher, children, className }) => {
    return (React.createElement(Main, { className: className },
        React.createElement(_Teacher, { animation: teacher }),
        children && React.createElement(_Bubble, null, children),
        React.createElement(Student, { animation: student })));
};
//# sourceMappingURL=Cast.js.map