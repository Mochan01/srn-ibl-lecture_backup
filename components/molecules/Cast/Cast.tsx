import React, { FC } from "react";
import styled from "styled-components";
import { Student } from "../../atoms/Student/Student";
import { Teacher } from "../../atoms/Teacher/Teacher";
import { Bubble, BubbleProps } from "../../atoms/Bubble/Bubble";
import { AnimationType } from "src-ibl-lecture-master/variable_types/StepType";

export interface CastProps extends BubbleProps {
  student: AnimationType;
  teacher: AnimationType;
}

const Main = styled.div`
  position: relative;
`;

const TeacherWrapper = styled.div`
  margin-bottom: 32px;
`;

const BubbleWrapper = styled.div`
  position: absolute;
  bottom: 254px;
`;

export const Cast: FC<CastProps> = ({
  student,
  teacher,
  children
}) => {
  return (
    <Main>
      <TeacherWrapper>
        <Teacher animation={ teacher } />
      </TeacherWrapper>
      { children &&
        <BubbleWrapper>
          <Bubble>ほげほげほげ</Bubble>
        </BubbleWrapper> }
      <Student animation={ student } />
    </Main>
  );
};
