import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { Student, Teacher, Bubble } from "./components";
import { AnimationType } from "src-ibl-lecture-master-unit/types/animation";
import { handleAnimation } from "./utils";

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
  const _handleAnimation = useMemo(
    () => handleAnimation(isPlaying),
    [isPlaying]
  );

  return (
    <Main {...props}>
      <Teacher
        animation={_handleAnimation(teacherAnimation)}
        css="margin-bottom: 32px;"
      />
      {studentDialog && (
        <Bubble css="position: absolute; bottom: 365px;">
          {studentDialog}
        </Bubble>
      )}
      <Student animation={_handleAnimation(studentAnimation)} />
    </Main>
  );
};
