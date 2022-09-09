import React, { FC } from "react";
import { MiniBtn, MINI_BUTTON_MUTATIONS } from "../../atoms/MiniBtn/MiniBtn";

export interface ReplayBtnProps {
  onClick?: () => void;
}

export const ReplayBtn: FC<ReplayBtnProps> = ({
  onClick = () => {}
}) => {
  return (
    <>
      <link rel="preload" href={ MINI_BUTTON_MUTATIONS.AGAIN_ON } as="image" />
      <link rel="preload" href={ MINI_BUTTON_MUTATIONS.AGAIN_OFF } as="image" />
      <MiniBtn
        onClick={ onClick }
        caption="もう一度"
        mutation={ MINI_BUTTON_MUTATIONS.AGAIN_ON }
        hoverMutation={ MINI_BUTTON_MUTATIONS.AGAIN_OFF }
      />
    </>
  );
};
