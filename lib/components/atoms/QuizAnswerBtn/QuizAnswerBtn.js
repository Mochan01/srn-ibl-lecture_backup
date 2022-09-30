import React, { useMemo } from "react";
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
};
const Main = styled.div `
  width: 150px;
  height: 60px;
  background-image: url(${ImageLecture});
  background-position: ${({ mutation }) => mutation};
  cursor: ${({ mutation }) => mutation === QUIZ_ANSWER_BTN.GRAY ? "auto" : "pointer"};
  position: relative;
`;
const Comment = styled.p `
  color: ${({ color }) => color};
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
export const QuizAnswerBtn = ({ mutation, onClick = () => { } }) => {
    // 文字色
    const color = useMemo(() => {
        let color;
        switch (mutation) {
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
    return (React.createElement(React.Fragment, null,
        React.createElement(Main, { role: "button", mutation: mutation, onClick: () => {
                if (mutation === QUIZ_ANSWER_BTN.GRAY)
                    return;
                onClick();
            } },
            React.createElement(Comment, { color: color }, "\u89E3\u7B54"))));
};
//# sourceMappingURL=QuizAnswerBtn.js.map