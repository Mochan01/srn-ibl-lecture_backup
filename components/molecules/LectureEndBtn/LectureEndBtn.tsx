import React, { FC, useState } from "react";
import { MiniBtn, MINI_BUTTON_MUTATIONS } from "../../atoms/MiniBtn/MiniBtn";
import { Interval } from "../../providers/Interval/Interval";

export interface LectureEndBtnProps {
  onClick?: () => void;
}

export const LectureEndBtn: FC<LectureEndBtnProps> = ({
  onClick = () => {}
}) => {

  const [mutation, setMutation] = useState(MINI_BUTTON_MUTATIONS.LECTURE_END_ON);

  return (
    <>
      <link rel="preload" href={ MINI_BUTTON_MUTATIONS.LECTURE_END_ON } as="image" />
      <link rel="preload" href={ MINI_BUTTON_MUTATIONS.LECTURE_END_OFF } as="image" />
      <MiniBtn
        onClick={ onClick }
        caption="レクチャー終了"
        mutation={ mutation }
        hoverMutation={ MINI_BUTTON_MUTATIONS.LECTURE_END_OFF }
      />
      <Interval callback={ () => {
        setMutation(s =>
          s === MINI_BUTTON_MUTATIONS.LECTURE_END_ON
            ? MINI_BUTTON_MUTATIONS.LECTURE_END_OFF
            : MINI_BUTTON_MUTATIONS.LECTURE_END_ON
          );
        } } />
    </>
  );
};
