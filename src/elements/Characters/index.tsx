import React, { FC } from "react";
import styled from "styled-components";
import { Student, Teacher, Bubble } from "./components";
import { AnimationType } from "src-ibl-lecture-master/types/stepType";

export interface CharactersProps {
  isPlaying?: boolean;
  teacherAnimation?: AnimationType;
  studentAnimation?: AnimationType;
  studentDialog?: string;
  className?: string;
}

const Main = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export const Characters: FC<CharactersProps> = ({
  isPlaying = true,
  teacherAnimation = "animation_1",
  studentAnimation = "animation_1",
  studentDialog,
  ...props
}) => {
  return (
    <Main {...props}>
      <Teacher
        animation={isPlaying ? teacherAnimation : "animation_1"}
        css="margin-bottom: 32px;"
      />
      {studentDialog && (
        <Bubble css="position: absolute; bottom: 365px;">
          {studentDialog}
        </Bubble>
      )}
      <Student animation={studentAnimation} />
    </Main>
  );
};
