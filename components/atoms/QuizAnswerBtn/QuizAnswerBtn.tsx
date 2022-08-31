import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { useCalcFntSz } from "../../../hooks/useCalcFntSz";

export const QUIZ_ANSWER_BTN = {
  GRAY: "Answer_button_greyout.png",
  RED: "Answer_button_select.png",
  WHITE: "Answer_button.png"
} as const;

export interface QuizAnswerBtnProps extends MainProps {
  mutation: typeof QUIZ_ANSWER_BTN[keyof typeof QUIZ_ANSWER_BTN];
  onClick?: () => void;
}

interface MainProps {
  mutation: typeof QUIZ_ANSWER_BTN[keyof typeof QUIZ_ANSWER_BTN];
}

const Main = styled.div<MainProps>`
  border-style: solid;
  border-width: 15px;
  border-image-source: url(${ ({ mutation }) => mutation });
  border-image-slice: 15 15 15 15 fill;
  border-image-repeat: stretch;
  cursor: ${ ({ mutation }) => mutation === QUIZ_ANSWER_BTN.GRAY ? "auto" : "pointer" };
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
  text-align: center;
  user-select: none;
  line-height: 1;
  white-space: nowrap;
`;

export const QuizAnswerBtn: FC<QuizAnswerBtnProps> = ({
  mutation,
  onClick = () => {}
}) => {

  // ボタン幅に4文字分入るくらいのフォントサイズにしたいので
  const [ref, fz] = useCalcFntSz(4);

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
      <Main role="button" mutation={ mutation } onClick={ onClick }>
        <Comment ref={ ref } fz={ fz } color={ color }>解答</Comment>
      </Main>
    </>
  );
};
