import React, { FC, useMemo } from "react";
import styled from "styled-components";
const Correct
  = new URL("../../../assets/prod/Correct.png", import.meta.url).toString();
const Wrong
  = new URL("../../../assets/prod/Wrong.png", import.meta.url).toString();

export const QUIZ_CHOICE_BTN = {
  ORANGE: new URL("../../../assets/prod/Question_button_select.png", import.meta.url).toString(),
  WHITE: new URL("../../../assets/prod/Question_button.png", import.meta.url).toString()
} as const;

export interface QuizChoiceBtnProps extends MainProps {
  children: string;
  onClick?: () => void;
}

interface MainProps {
  mutation: typeof QUIZ_CHOICE_BTN[keyof typeof QUIZ_CHOICE_BTN];
  isCorrect?: boolean;
}

const BORDER_W = 5;
const SIGN_SIZE = 42;
const Main = styled.div<MainProps>`
  border-style: solid;
  border-width: ${ BORDER_W }px;
  border-image-source: url(${ ({ mutation }) => mutation });
  border-image-slice: 5 5 5 5 fill;
  border-image-repeat: stretch;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 190px;
  height: 58px;
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: ${ SIGN_SIZE }px;
    padding-top: ${ SIGN_SIZE }px;
    top: -${ SIGN_SIZE / 2 }px;
    left: -${ SIGN_SIZE / 2 }px;
    background-image: ${ ({ isCorrect }) => typeof isCorrect === "boolean"
      ? (isCorrect ? `url(${ Correct })` :  `url(${ Wrong })`)
      : "none" };
    background-size: contain;
    background-repeat: no-repeat;
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
