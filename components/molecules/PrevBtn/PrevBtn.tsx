import React, { FC } from "react";
import { MiniBtn, MINI_BUTTON_MUTATIONS } from "../../atoms/MiniBtn/MiniBtn";
import { classNames } from "../../../data/ClassNames";

export interface PrevBtnProps {
}

export const PrevBtn: FC<PrevBtnProps> = ({
}) => {
  return (
    <>
      <link rel="preload" href={ MINI_BUTTON_MUTATIONS.PREV_ON } as="image" />
      <link rel="preload" href={ MINI_BUTTON_MUTATIONS.PREV_OFF } as="image" />
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
