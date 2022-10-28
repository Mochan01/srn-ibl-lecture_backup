import React, { FC, useContext, useMemo } from "react";
import styled from "styled-components";
import { Student, Teacher, Bubble, BubbleProps } from "./components";
import {
  GetDataProviderContext,
  ProgressProviderContext,
  PlayStatusProviderContext,
} from "../../stores/providers";
import {
  getTeacherAnimation,
  getStudentAnimation,
  handleStep,
  getStudentDialogue,
} from "../../utils/handleStep";

export interface CharactersProps extends BubbleProps {}

const Main = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export const Characters: FC<CharactersProps> = ({ children, className }) => {
  const getData = useContext(GetDataProviderContext);
  const { state: progress } = useContext(ProgressProviderContext);

  const getStepData = useMemo(
    () => handleStep(getData(progress.slide, progress.step)),
    [progress.step]
  );

  const teacherAnimation = useMemo(
    () => getStepData(getTeacherAnimation),
    [getStepData]
  );
  const studentAnimation = useMemo(
    () => getStepData(getStudentAnimation),
    [getStepData]
  );
  const studentDialog = useMemo(
    () => getStepData(getStudentDialogue),
    [getStepData]
  );

  const { state: playStatus } = useContext(PlayStatusProviderContext);

  return (
    <Main className={className}>
      <Teacher
        animation={playStatus === "STOPPED" ? "animation_1" : teacherAnimation}
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
