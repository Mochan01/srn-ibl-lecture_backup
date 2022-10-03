import React, { FC } from "react";
import styled from "styled-components";
import { Student } from "../../atoms/Student/Student";
import { Teacher } from "../../atoms/Teacher/Teacher";
import { Bubble, BubbleProps } from "../../atoms/Bubble/Bubble";
import { AnimationType } from "src-ibl-lecture-master/variable_types/StepType";

export interface CastProps extends BubbleProps {
  student: AnimationType;
  teacher: AnimationType;
  className?: string;
}

const Main = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

const _Teacher = styled(Teacher)`
  margin-bottom: 32px;
`;

const _Bubble = styled(Bubble)`
  position: absolute;
  bottom: 254px;
`;

export const Cast: FC<CastProps> = ({
  student,
  teacher,
  children,
  className
}) => {
  return (
    <Main className={ className }>
      <_Teacher animation={ teacher } />
      { children && <_Bubble>{ children }</_Bubble> }
      <Student animation={ student } />
    </Main>
  );
};
