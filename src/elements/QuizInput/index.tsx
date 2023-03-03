import React, { FC, useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { QuizAnswerBtn } from "../QuizAnswerBtn";
import { TextBox } from "./components/TextBox";
import { convertToHalf } from "./utils/convertToHalf";
import { Variant } from "../QuizAnswerBtn/types";
import { QUIZ_SIGN } from "../QuizChoiceBtn";
import { usePingPong } from "../../hooks";

const ImageLecture = new URL(
  "../../assets/prod/lecture_panel_answer.png",
  import.meta.url
).toString();
export interface QuizInputProps {
  answer: string;
  onAnswer?: (isCorrect: boolean) => void;
}

interface MainProps {
  isAnswer: boolean;
  sign?: "circle" | "cross";
}

const Main = styled.div<MainProps>(
  ({ sign, isAnswer }) => `
  // 回答したらインタラクションできなくする
  pointer-events: ${isAnswer ? "none" : "auto"};
  width: 442px;
  height: 182px;
  position: relative;
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 54px;
    padding-top: 54px;
    top: 0px;
    right: -10px;
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

const SAnswerArea = styled.div`
  display: flex;
`;
const SAnswer = styled.div`
  font-size: 23px;
  color: #e2365f;
  font-family: "UD デジタル 教科書体 N-B";
`;

export const QuizInput: FC<QuizInputProps> = ({ answer, onAnswer }) => {
  // 解答状態の状態管理
  const [inputAnswer, setInputAnswer] = useState<string>("");
  const [isAnswer, setIsAnswer] = useState(false);

  const isCorrect = useMemo(
    () => convertToHalf(inputAnswer) === convertToHalf(answer),
    [inputAnswer, answer]
  );

  const playPingPong = usePingPong(isCorrect);

  // 解答ボタン押下またはエンターキーを押下したら発火
  const handleAnswer = useCallback(async () => {
    if (!inputAnswer) return;
    if (isAnswer) return; // 無いとエンターキーで連打できる

    setIsAnswer(true);

    await playPingPong();
    onAnswer && onAnswer(isCorrect);
  }, [inputAnswer, isAnswer, playPingPong, onAnswer, isCorrect]);

  const onChange = useCallback((input: string) => {
    setInputAnswer(input);
  }, []);

  const answerBtnColor: Variant = useMemo(
    () => (inputAnswer !== "" ? (isAnswer ? "RED" : "WHITE") : "GRAY"),
    [inputAnswer, isAnswer]
  );

  // 解答後につくマルバツの記号アイコン判定
  const sign = isAnswer ? (isCorrect ? "circle" : "cross") : void 0;

  return (
    <Main {...{ isAnswer, sign }}>
      <TextBox {...{ onChange }} onEnter={handleAnswer} />
      <div css={"margin-bottom: 28px"}></div>
      <SAnswerArea>
        {isAnswer && (
          <>
            <SAnswer>答：</SAnswer>
            {/* 答えが10文字以上の場合、改行する */}
            {answer.length > 10 ? (
              <SAnswer>
                {answer.slice(0, 10)}
                <br />
                {answer.slice(10)}
              </SAnswer>
            ) : (
              <SAnswer>{answer}</SAnswer>
            )}
          </>
        )}
        <QuizAnswerBtn
          css={"position: absolute; right:0"}
          variant={answerBtnColor}
          onClick={handleAnswer}
        />
      </SAnswerArea>
    </Main>
  );
};
