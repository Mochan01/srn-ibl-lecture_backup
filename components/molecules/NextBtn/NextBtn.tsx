import React, { FC, useEffect, useState } from "react";
import { MiniBtn, MINI_BUTTON_MUTATIONS } from "../../atoms/MiniBtn/MiniBtn";
import { classNames } from "../../../data/ClassNames";
import { Interval } from "../../providers/Interval/Interval";

export interface NextBtnProps {
  isBlink?: boolean
}

export const NextBtn: FC<NextBtnProps> = ({
  isBlink = false
}) => {

  const [mutation, setMutation]
    = useState<typeof MINI_BUTTON_MUTATIONS[keyof typeof MINI_BUTTON_MUTATIONS]>(MINI_BUTTON_MUTATIONS.NEXT_ON);
  useEffect(() => setMutation(MINI_BUTTON_MUTATIONS.NEXT_ON), [isBlink]);

  return (
    <>
      <div id={ classNames.arrowNext }>
        <MiniBtn
          caption="次ページ"
          mutation={ mutation }
          hoverMutation={ MINI_BUTTON_MUTATIONS.NEXT_OFF }
        />
      </div>
      { isBlink && 
        <Interval callback={ () => {
          setMutation(s =>
            s === MINI_BUTTON_MUTATIONS.NEXT_ON
              ? MINI_BUTTON_MUTATIONS.NEXT_OFF
              : MINI_BUTTON_MUTATIONS.NEXT_ON
          );
        } } /> }
    </>
  );
};
