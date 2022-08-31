import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { useCalcFntSz } from "../../../hooks/useCalcFntSz";

export const QUIZ_CHOICE_BTN = {
  ORANGE: "Question_button_select.png",
  WHITE: "Question_button.png"
} as const;

export interface QuizChoiceBtnProps extends MainProps {
  children: string;
  onClick?: () => void;
}

interface MainProps {
  mutation: typeof QUIZ_CHOICE_BTN[keyof typeof QUIZ_CHOICE_BTN];
}

const Main = styled.div<MainProps>`
  padding: 2%;
  border-style: solid;
  border-width: 5px;
  border-image-source: url(${ ({ mutation }) => mutation });
  border-image-slice: 5 5 5 5 fill;
  border-image-repeat: stretch;
  cursor: pointer;
`;

interface CommentProps {
  fz: number;
  color: string;
}

const Comment = styled.p.attrs<CommentProps>(
  ({ fz }) => ({
    style: {
      fontSize: fz + "px"
    }
  })
)<CommentProps>`
  color: ${ ({ color }) => color };
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  line-height: 1.2;
  user-select: none;
`;

export const QuizChoiceBtn: FC<QuizChoiceBtnProps> = ({
  mutation,
  children,
  onClick = () => {}
}) => {

  const [ref, fz] = useCalcFntSz(10);

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
      <Main role="button" mutation={ mutation } onClick={ onClick }>
        <Comment ref={ ref } fz={ fz } color={ color }>{ children }</Comment>
      </Main>
    </>
  );
};
