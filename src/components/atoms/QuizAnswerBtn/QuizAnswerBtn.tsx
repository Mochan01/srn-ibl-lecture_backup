import React, { FC, useMemo } from "react";
import styled from "styled-components";
const ImageLecture = new URL("../../../assets/prod/lecture_panel_answer.png", import.meta.url).toString();

export const QUIZ_ANSWER_BTN = {
  /**
   * Answer_button_greyout.png
   */
  GRAY: "0 -3444px",
  /**
   * Answer_button_select.png
   */
  RED: "0 -3508px",
  /**
   * Answer_button.png
   */
  WHITE: "0 -3572px"
} as const;

export interface QuizAnswerBtnProps extends MainProps {
  mutation: typeof QUIZ_ANSWER_BTN[keyof typeof QUIZ_ANSWER_BTN];
  onClick?: () => void;
  className?: string;
}

interface MainProps {
  mutation: typeof QUIZ_ANSWER_BTN[keyof typeof QUIZ_ANSWER_BTN];
}

const Main = styled.div<MainProps>`
  width: 150px;
  height: 60px;
  background-image: url(${ ImageLecture });
  background-position: ${ ({ mutation }) => mutation };
  cursor: ${ ({ mutation }) => mutation === QUIZ_ANSWER_BTN.GRAY ? "auto" : "pointer" };
  position: relative;
`;

const Comment = styled.p`
  color: ${ ({ color }) => color };
  font-size: 28px;
  text-align: center;
  user-select: none;
  line-height: 1;
  white-space: nowrap;
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  transform: translateY(-50%);
`;

export const QuizAnswerBtn: FC<QuizAnswerBtnProps> = ({
  mutation,
  onClick,
  className
}) => {

  // 文字色
  const color = useMemo(() => {
    let color: string;
    switch(mutation) {
      case QUIZ_ANSWER_BTN.GRAY:
        color = "#5A5A5A";
        break;
      case QUIZ_ANSWER_BTN.RED:
        color = "#fff";
        break;
      case QUIZ_ANSWER_BTN.WHITE:
        color = "#2365f";
        break;
    }
    return color;
  }, [mutation]);

  const clickHandle = () => {
    if (!onClick) return;
    if (mutation === QUIZ_ANSWER_BTN.GRAY) return;

    onClick();
  };

  return (
    <Main role="button" onClick={ clickHandle } { ...{ mutation, className } }>
      <Comment { ...{ color } }>解答</Comment>
    </Main>
  );
};
