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

export const Cast: FC<CastProps> = ({
  student,
  teacher,
  children,
  className
}) => {
  return (
    <Main className={ className }>
      <Teacher animation={ teacher } css="margin-bottom: 32px;" />
      { children && 
        <Bubble css="position: absolute; bottom: 365px;">{ children }</Bubble> }
      <Student animation={ student } />
    </Main>
  );
};
