import React, { FC } from "react";
import styled, { css } from "styled-components";
import { AnimationType } from "src-ibl-lecture-master-unit/types/animation";
const ImageCommon = new URL("../../../assets/prod/close_character_spritesheet.png", import.meta.url).toString();

export interface StudentProps {
  animation?: AnimationType;
  className?: string;
}

const STUDENT = {
  S_BLINKING01: "0 -87px",
  S_BLINKING02: "0 -484px",
  S_CORRECT01: "0 -881px",
  S_CORRECT02: "0 -1278px",
  S_CORRECT03: "0 -1675px",
  S_TALKING01: "0 -2072px",
  S_THINK_TALKING01: "0 -2469px",
  S_THINKING01: "0 -2866px",
  S_THINKING02: "0 -3263px",
  S_WRONG01: "0 -3660px",
  S_WRONG02: "0 -4057px",
  S_WRONG03: "0 -4454px",
} as const;

/**
 * blinking
 */
const animation_1 = css`
  animation: student_blinking step-start 3.15s infinite;
  @keyframes student_blinking {
    95% {
      background-position: ${ STUDENT.S_BLINKING01 };
    }
    100% {
      background-position: ${ STUDENT.S_BLINKING02 };
    }
  }
`;

/**
 * talking
 */
const animation_2 = css`
  animation: student_talking step-start .6s infinite;
  @keyframes student_talking {
    50% {
      background-position: ${ STUDENT.S_BLINKING01 };
    }
    100% {
      background-position: ${ STUDENT.S_TALKING01 };
    }
  }
`;

/**
 * thinking
 */
const animation_3 = css`
  animation: student_thinking step-start 1.45s infinite;
  @keyframes student_thinking {
    55% {
      background-position: ${ STUDENT.S_THINKING01 };
    }
    100% {
      background-position: ${ STUDENT.S_THINKING02 };
    }
  }
`;

/**
 * think_talking
 */
const animation_4 = css`
  animation: student_think_talking step-start .6s infinite;
  @keyframes student_think_talking {
    50% {
      background-position: ${ STUDENT.S_THINKING01 };
    }
    100% {
      background-position: ${ STUDENT.S_THINK_TALKING01 };
    }
  }
`;

/**
 * correct
 */
const animation_5 = css`
  animation: student_correct step-start 1.8s;
  background-position: ${ STUDENT.S_CORRECT03 };
  @keyframes student_correct {
    17% {
      background-position: ${ STUDENT.S_CORRECT03 };
    }
    33% {
      background-position: ${ STUDENT.S_CORRECT02 };
    }
    50% {
      background-position: ${ STUDENT.S_CORRECT01 };
    }
    66% {
      background-position: ${ STUDENT.S_CORRECT03 };
    }
    83% {
      background-position: ${ STUDENT.S_CORRECT02 };
    }
    100% {
      background-position: ${ STUDENT.S_CORRECT01 };
    }
  }
`;

/**
 * wrong
 */
const animation_6 = css`
  animation: student_wrong step-start 1.8s;
  background-position: ${ STUDENT.S_WRONG03 };
  @keyframes student_wrong {
    17% {
      background-position: ${ STUDENT.S_WRONG03 };
    }
    33% {
      background-position: ${ STUDENT.S_WRONG02 };
    }
    50% {
      background-position: ${ STUDENT.S_WRONG01 };
    }
    66% {
      background-position: ${ STUDENT.S_WRONG03 };
    }
    83% {
      background-position: ${ STUDENT.S_WRONG02 };
    }
    100% {
      background-position: ${ STUDENT.S_WRONG01 };
    }
  }
`;

const Main = styled.div<Required<Pick<StudentProps, "animation">>>`
  width: 238px;
  height: 393px;
  background-image: url(${ ImageCommon });
  background-repeat: no-repeat;
  ${ ({ animation }) => eval(animation) }
`;

export const Student: FC<StudentProps> = ({
  animation = "animation_1",
  className
}) => {
  return <Main { ...{ animation, className } } />;
};
