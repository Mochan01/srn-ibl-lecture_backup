import React, { FC } from "react";
import { MiniBtn, MINI_BUTTON_MUTATIONS } from "../../atoms/MiniBtn/MiniBtn";

export interface LectureEndBtnProps {
  onClick?: () => void;
}

export const LectureEndBtn: FC<LectureEndBtnProps> = ({
  onClick = () => {}
}) => {
  return (
    <>
      <link rel="preload" href={ MINI_BUTTON_MUTATIONS.LECTURE_END_ON } as="image" />
      <link rel="preload" href={ MINI_BUTTON_MUTATIONS.LECTURE_END_OFF } as="image" />
      <MiniBtn
        onClick={ onClick }
        caption="レクチャー終了"
        mutation={ MINI_BUTTON_MUTATIONS.LECTURE_END_ON }
        hoverMutation={ MINI_BUTTON_MUTATIONS.LECTURE_END_OFF }
      />
    </>
  );
};
