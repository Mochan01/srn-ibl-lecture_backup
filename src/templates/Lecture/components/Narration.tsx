import React, { FC, useContext } from "react";
import { GlobalStateContext } from "../../../stores";
import { Narration as Main } from "../../../elements/Narration";

export const Narration: FC = () => {
  const { timestamp, isPlaying, progress } = useContext(GlobalStateContext);
  return (
    <>
      {/** スライド、ステップ切替時、また、リプレイ時に再マウントさせたいのでkeyを指定 */}
      {isPlaying && (
        <Main key={timestamp + "_" + progress.slide + "_" + progress.step} />
      )}
    </>
  );
};
