import React, { FC } from "react";
import styled, { css } from "styled-components";
import { AnimationType } from "src-ibl-lecture-master/variable_types/StepType";

export interface TeacherProps {
  animation?: AnimationType;
  className?: string;
}

const TEACHER = {
  T_CORRECT01: new URL("../../../assets/prod/t_correct01.png", import.meta.url).toString(),
  T_CORRECT02: new URL("../../../assets/prod/t_correct02.png", import.meta.url).toString(),
  T_BLINKING_TALKING01: new URL("../../../assets/prod/t_blinking_talking01.png", import.meta.url).toString(),
  T_BLINKING02: new URL("../../../assets/prod/t_blinking02.png", import.meta.url).toString(),
  T_TALKING02: new URL("../../../assets/prod/t_talking02.png", import.meta.url).toString(),
  T_WRONG01: new URL("../../../assets/prod/t_wrong01.png", import.meta.url).toString(),
  T_WRONG02: new URL("../../../assets/prod/t_wrong02.png", import.meta.url).toString()
} as const;

/**
 * blinking
 */
const animation_1 = css`
  animation: teacher_blinking step-start 2.15s infinite;
  @keyframes teacher_blinking {
    93% {
      background-image: url(${ TEACHER.T_BLINKING_TALKING01 });
    }
    100% {
      background-image: url(${ TEACHER.T_BLINKING02 });
    }
  }
`;

/**
 * talking
 */
const animation_2 = css`
  animation: teacher_talking step-start .6s infinite;
  @keyframes teacher_talking {
    50% {
      background-image: url(${ TEACHER.T_BLINKING_TALKING01 });
    }
    100% {
      background-image: url(${ TEACHER.T_TALKING02 });
    }
  }
`;

const animation_3 = css``;

const animation_4 = css``;

/**
 * correct
 */
const animation_5 = css`
  animation: teacher_correct step-start .6s infinite;
  @keyframes teacher_correct {
    50% {
      background-image: url(${ TEACHER.T_CORRECT01 });
    }
    100% {
      background-image: url(${ TEACHER.T_CORRECT02 });
    }
  }
`;

/**
 * wrong
 */
const animation_6 = css`
  animation: teacher_wrong step-start .6s infinite;
  @keyframes teacher_wrong {
    50% {
      background-image: url(${ TEACHER.T_WRONG01 });
    }
    100% {
      background-image: url(${ TEACHER.T_WRONG02 });
    }
  }
`;

const Main = styled.div<TeacherProps>`
  width: 236px;
  height: 348px;
  background-size: cover;
  background-repeat: no-repeat;
  ${ ({ animation }) => eval(animation) }
`;

export const Teacher: FC<TeacherProps> = ({
  animation = "animation_1",
  className
}) => {
  return (
    <>
      { Object.keys(TEACHER).map(key => (
        <link key={ key } rel="preload" href={ TEACHER[key] } as="image" /> )) }
      <Main { ...{ animation, className } } />
    </>
  );
};
