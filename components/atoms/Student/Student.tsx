import React, { FC } from "react";
import styled, { css } from "styled-components";
import { AnimationType } from "src-ibl-lecture-master/variable_types/StepType";

export interface StudentProps {
  animation: AnimationType;
}

const STUDENT = {
  S_BLINKING01: new URL("../../../assets/s_blinking01.png", import.meta.url).toString(),
  S_BLINKING02: new URL("../../../assets/s_blinking02.png", import.meta.url).toString(),
  S_CORRECT01: new URL("../../../assets/s_correct01.png", import.meta.url).toString(),
  S_CORRECT02: new URL("../../../assets/s_correct02.png", import.meta.url).toString(),
  S_CORRECT03: new URL("../../../assets/s_correct03.png", import.meta.url).toString(),
  S_TALKING01: new URL("../../../assets/s_talking01.png", import.meta.url).toString(),
  S_THINK_TALKING01: new URL("../../../assets/s_think_talking01.png", import.meta.url).toString(),
  S_THINKING01: new URL("../../../assets/s_thinking01.png", import.meta.url).toString(),
  S_THINKING02: new URL("../../../assets/s_thinking02.png", import.meta.url).toString(),
  S_WRONG01: new URL("../../../assets/s_wrong01.png", import.meta.url).toString(),
  S_WRONG02: new URL("../../../assets/s_wrong02.png", import.meta.url).toString(),
  S_WRONG03: new URL("../../../assets/s_wrong03.png", import.meta.url).toString()
} as const;

/**
 * blinking
 */
const animation_1 = css`
  animation: student_blinking step-start 3.15s infinite;
  @keyframes student_blinking {
    95% {
      background-image: url(${ STUDENT.S_BLINKING01 });
    }
    100% {
      background-image: url(${ STUDENT.S_BLINKING02 });
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
      background-image: url(${ STUDENT.S_BLINKING01 });
    }
    100% {
      background-image: url(${ STUDENT.S_TALKING01 });
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
      background-image: url(${ STUDENT.S_THINKING01 });
    }
    100% {
      background-image: url(${ STUDENT.S_THINKING02 });
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
      background-image: url(${ STUDENT.S_THINKING01 });
    }
    100% {
      background-image: url(${ STUDENT.S_THINK_TALKING01 });
    }
  }
`;

/**
 * correct
 */
const animation_5 = css`
  animation: student_correct step-start 1.8s;
  background-image: url(${ STUDENT.S_CORRECT03 });
  @keyframes student_correct {
    17% {
      background-image: url(${ STUDENT.S_CORRECT03 });
    }
    33% {
      background-image: url(${ STUDENT.S_CORRECT02 });
    }
    50% {
      background-image: url(${ STUDENT.S_CORRECT01 });
    }
    66% {
      background-image: url(${ STUDENT.S_CORRECT03 });
    }
    83% {
      background-image: url(${ STUDENT.S_CORRECT02 });
    }
    100% {
      background-image: url(${ STUDENT.S_CORRECT01 });
    }
  }
`;

/**
 * wrong
 */
const animation_6 = css`
  animation: student_wrong step-start 1.8s;
  background-image: url(${ STUDENT.S_WRONG03 });
  @keyframes student_wrong {
    17% {
      background-image: url(${ STUDENT.S_WRONG03 });
    }
    33% {
      background-image: url(${ STUDENT.S_WRONG02 });
    }
    50% {
      background-image: url(${ STUDENT.S_WRONG01 });
    }
    66% {
      background-image: url(${ STUDENT.S_WRONG03 });
    }
    83% {
      background-image: url(${ STUDENT.S_WRONG02 });
    }
    100% {
      background-image: url(${ STUDENT.S_WRONG01 });
    }
  }
`;

const Main = styled.div<StudentProps>`
  width: 172px;
  height: 268px;
  background-size: cover;
  background-repeat: no-repeat;
  ${ ({ animation }) => eval(animation) }
`;

export const Student: FC<StudentProps> = ({
  animation
}) => {
  return (
    <>
      { Object.keys(STUDENT).map(key => (
        <link rel="preload" href={ STUDENT[key] } as="image" /> )) }
      <Main animation={ animation } />
    </>
  );
};
