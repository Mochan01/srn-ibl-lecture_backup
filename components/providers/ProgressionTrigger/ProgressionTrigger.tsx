import React, { FC, useContext, useEffect } from "react";
import { Timer, TimerProps } from "../Timer/Timer";
import { useNarration } from "../../../hooks/useNarration";
import { RunSeekContext } from "../../../components/providers/RunSeekProvider/RunSeekProvider";

export interface ProgressionTriggerProps extends TimerProps {
  sound?: string;
}

/**
 * 音声があった場合、音声を読み込んだ後に、タイマーを発動する
 * 音声がなかった場合、即時にタイマーを発動する
 * @param param0 
 * @returns 
 */
export const ProgressionTrigger: FC<ProgressionTriggerProps> = ({
  onEnd,
  duration,
  sound
}) => {

  const { isRunSeek, setIsRunSeek } = useContext(RunSeekContext);

  useNarration(sound, () => {
    setIsRunSeek(true);
  });

  useEffect(() => () => setIsRunSeek(false), []);

  return isRunSeek && <Timer
    duration={ duration }
    onEnd={ () => {
      setIsRunSeek(false);
      onEnd();
    } }
  /> ;
};
