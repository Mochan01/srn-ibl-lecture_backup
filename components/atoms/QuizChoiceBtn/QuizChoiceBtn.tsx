import React, { FC, useMemo } from "react";
import styled from "styled-components";
const ImageLecture = new URL("../../../assets/prod/lecture_panel_answer.png", import.meta.url).toString();

export const QUIZ_CHOICE_BTN = {
  /**
   * Question_button_select.png
   */
  ORANGE: "0 -3774px",
  /**
   * Question_button.png
   */
  WHITE: "0 -3854px"
} as const;

export const QUIZ_SIGN = {
  /**
   * Correct.png
   */
  CORRECT: "0 -3636px",
  /**
   * Wrong.png
   */
  INCORRECT: "0 -3934px"
} as const;

export interface QuizChoiceBtnProps extends MainProps {
  children: string;
  onClick?: () => void;
}

interface MainProps {
  mutation: typeof QUIZ_CHOICE_BTN[keyof typeof QUIZ_CHOICE_BTN];
  isCorrect?: boolean;
}

const SIGN_SIZE = 54;
const Main = styled.div<MainProps>`
  cursor: pointer;
  position: relative;
  width: 246px;
  height: 76px;
  background-image: url(${ ImageLecture });
  background-position: ${ ({ mutation }) => mutation };
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: ${ SIGN_SIZE }px;
    padding-top: ${ SIGN_SIZE }px;
    top: -${ SIGN_SIZE / 2 }px;
    left: -${ SIGN_SIZE / 2 }px;
    background-position:
      ${ ({ isCorrect }) => isCorrect ? QUIZ_SIGN.CORRECT :  QUIZ_SIGN.INCORRECT };
    background-image: ${ ({ isCorrect }) =>
      typeof isCorrect === "boolean" ? `url(${ ImageLecture })` : "none"  };
    background-repeat: no-repeat;
    pointer-events: none;
  }
`;

const Comment = styled.p`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: ${ ({ color }) => color };
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  line-height: 1.2;
  user-select: none;
  font-size: 18px;
  text-align: center;
`;

export const QuizChoiceBtn: FC<QuizChoiceBtnProps> = ({
  mutation,
  children,
  isCorrect,
  onClick = () => {}
}) => {

  // 文字色
  const color = useMemo(() => {
    let color: string;
    switch(mutation) {
      case QUIZ_CHOICE_BTN.ORANGE:
        color = "#fff";
        break;
      case QUIZ_CHOICE_BTN.WHITE:
        color = "#5A5A5A";
        break;
    }
    return color;
  }, [mutation]);

  return (
    <>
      <Main
        role="button"
        mutation={ mutation }
        isCorrect={ isCorrect }
        onClick={ onClick }
      >
        <Comment
          color={ color }
          dangerouslySetInnerHTML={ { __html: children } }
        / >
      </Main>
    </>
  );
};
