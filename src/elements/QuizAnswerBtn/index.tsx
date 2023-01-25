import React, { FC } from "react";
import styled from "styled-components";
import { getColor } from "./utils";
import { Variant } from "./types";
import { variants } from "./config";
const ImageLecture = new URL(
  "../../assets/prod/lecture_panel_answer.png",
  import.meta.url
).toString();

export interface QuizAnswerBtnProps {
  variant: Variant;
  onClick?: () => void;
  className?: string;
}

const Main = styled.div<Pick<QuizAnswerBtnProps, "variant">>(
  ({ variant }) => `
  width: 150px;
  height: 60px;
  background-image: url(${ImageLecture});
  background-position: ${variants[variant]};
  cursor: ${variant === "GRAY" ? "auto" : "pointer"};
  position: relative;
`
);

const Comment = styled.p<Pick<QuizAnswerBtnProps, "variant">>(
  ({ variant }) => `
  color: ${getColor(variant)};
  font-size: 30px;
  text-align: center;
  user-select: none;
  line-height: 1;
  white-space: nowrap;
  position: absolute;
  top: 48%; // ベベルの分少し上にする
  right: 0;
  left: 0;
  transform: translateY(-50%);
`
);

export const QuizAnswerBtn: FC<QuizAnswerBtnProps> = ({
  variant,
  onClick: fn,
  className,
}) => {
  const onClick = () => variant !== "GRAY" && fn && fn();
  return (
    <Main role="button" {...{ onClick, variant, className }}>
      <Comment {...{ variant }}>解答</Comment>
    </Main>
  );
};
