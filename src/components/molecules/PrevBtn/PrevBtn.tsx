import React, { FC } from "react";
import { MiniBtn, MINI_BUTTON_MUTATIONS } from "../../atoms/MiniBtn/MiniBtn";
import { classNames } from "../../../data/ClassNames";

export interface PrevBtnProps {
}

export const PrevBtn: FC<PrevBtnProps> = ({
}) => {
  return (
    <>
      <div id={ classNames.arrowPrev }>
        <MiniBtn
          caption="前ページ"
          mutation={ MINI_BUTTON_MUTATIONS.PREV_ON }
          hoverMutation={ MINI_BUTTON_MUTATIONS.PREV_OFF }
        />
      </div>
    </>
  );
};
