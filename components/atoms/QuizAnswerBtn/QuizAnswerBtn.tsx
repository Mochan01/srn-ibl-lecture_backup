import React, { FC, useMemo } from "react";
import styled from "styled-components";

export const QUIZ_ANSWER_BTN = {
  GRAY: new URL("../../../assets/Answer_button_greyout.png", import.meta.url).toString(),
  RED: new URL("../../../assets/Answer_button_select.png", import.meta.url).toString(),
  WHITE: new URL("../../../assets/Answer_button.png", import.meta.url).toString()
} as const;

export interface QuizAnswerBtnProps extends MainProps {
  mutation: typeof QUIZ_ANSWER_BTN[keyof typeof QUIZ_ANSWER_BTN];
  onClick?: () => void;
}

interface MainProps {
  mutation: typeof QUIZ_ANSWER_BTN[keyof typeof QUIZ_ANSWER_BTN];
}

const Main = styled.div<MainProps>`
  width: 116px;
  height: 46px;
  border-style: solid;
  border-width: 15px;
  border-image-source: url(${ ({ mutation }) => mutation });
  border-image-slice: 15 15 15 15 fill;
  border-image-repeat: stretch;
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
  onClick = () => {}
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

  return (
    <>
      <Main role="button" mutation={ mutation } onClick={ () => {
        if (mutation === QUIZ_ANSWER_BTN.GRAY) return;
        onClick();
      } }>
        <Comment color={ color }>解答</Comment>
      </Main>
    </>
  );
};
