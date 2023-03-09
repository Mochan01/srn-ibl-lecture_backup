import React, { FC } from "react";
import styled from "styled-components";
const ImageLecture = new URL(
  "../../assets/prod/lecture_panel_answer.png",
  import.meta.url
).toString();

export const QUIZ_CHOICE_BTN = {
  /**
   * Question_button_select.png
   */
  ORANGE: "0 -3483px",
  /**
   * Question_button.png
   */
  WHITE: "0 -3563px",
  /**
   * Question_button_incorrect.png
   */
  GRAY: "0 -3403px",
} as const;

export const QUIZ_SIGN = {
  /**
   * Correct.png
   */
  CORRECT: "0 -3345px",
  /**
   * Wrong.png
   */
  INCORRECT: "0 -3643px",
} as const;

type Mutation = (typeof QUIZ_CHOICE_BTN)[keyof typeof QUIZ_CHOICE_BTN];

export interface QuizChoiceBtnProps extends MainProps {
  children: string;
  onClick?: () => void;
  className?: string;
}

interface MainProps {
  mutation: Mutation;
  sign?: "circle" | "cross";
}

// https://www.notion.so/1ca89cdacc8a4907b2894b2c29d86ba8#d74cb057bc9e4b04b23371e1136ae772
const Main = styled.div<MainProps>(
  ({ mutation, sign }) => `
  cursor: pointer;
  position: relative;
  width: 246px;
  height: 76px;
  background-image: url(${ImageLecture});
  background-position: ${mutation};
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 54px;
    padding-top: 54px;
    top: -22px;
    left: -17px;
    background-position: ${
      sign === "circle" ? QUIZ_SIGN.CORRECT : QUIZ_SIGN.INCORRECT
    };
    background-image: ${
      typeof sign === "string" ? `url(${ImageLecture})` : "none"
    };
    background-repeat: no-repeat;
    pointer-events: none;
  }
`
);

const handleColor = (mutation: Mutation) => {
  switch (mutation) {
    case QUIZ_CHOICE_BTN.ORANGE:
      return "#fff";
    case QUIZ_CHOICE_BTN.WHITE:
      return "#222222";
    case QUIZ_CHOICE_BTN.GRAY:
      return "#222222";
  }
};

const Text = styled.p<{ mutation: Mutation }>(
  ({ mutation }) => `
  color: ${handleColor(mutation)};
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  line-height: 30px;
  user-select: none;
  font-size: 24px;
  font-family: "UD デジタル 教科書体 N-B";
  text-align: center;
`
);

export const QuizChoiceBtn: FC<QuizChoiceBtnProps> = ({
  mutation,
  children,
  sign,
  onClick,
  className,
}) => {
  return (
    <Main role="button" {...{ mutation, sign, onClick, className }}>
      <Text dangerouslySetInnerHTML={{ __html: children }} {...{ mutation }} />
    </Main>
  );
};
