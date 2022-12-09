import React, { FC } from "react";
import styled, { css } from "styled-components";
import { AnimationType } from "src-ibl-lecture-master/types/stepType";
const ImageCommon = new URL("../../../assets/prod/close_character_spritesheet.png", import.meta.url).toString();

export interface TeacherProps {
  animation?: AnimationType;
  className?: string;
}

const TEACHER = {
  T_CORRECT01: "0 -6126px",
  T_CORRECT02: "0 -6651px",
  T_BLINKING_TALKING01: "0 -5076px",
  T_BLINKING02: "0 -5601px",
  T_TALKING02: "0 -7176px",
  T_WRONG01: "0 -7701px",
  T_WRONG02: "0 -8226px",
} as const;

/**
 * blinking
 */
const animation_1 = css`
  animation: teacher_blinking step-start 2.15s infinite;
  @keyframes teacher_blinking {
    93% {
      background-position: ${ TEACHER.T_BLINKING_TALKING01 };
    }
    100% {
      background-position: ${ TEACHER.T_BLINKING02 };
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
      background-position: ${ TEACHER.T_BLINKING_TALKING01 };
    }
    100% {
      background-position: ${ TEACHER.T_TALKING02 };
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
      background-position: ${ TEACHER.T_CORRECT01 };
    }
    100% {
      background-position: ${ TEACHER.T_CORRECT02 };
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
      background-position: ${ TEACHER.T_WRONG01 };
    }
    100% {
      background-position: ${ TEACHER.T_WRONG02 };
    }
  }
`;

const Main = styled.div<Required<Pick<TeacherProps, "animation">>>`
  width: 353px;
  height: 521px;
  background-image: url(${ ImageCommon });
  background-repeat: no-repeat;
  ${ ({ animation }) => eval(animation) }
`;

export const Teacher: FC<TeacherProps> = ({
  animation = "animation_1",
  className
}) => {
  return <Main { ...{ animation, className } } />;
};
