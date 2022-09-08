import { FC } from "react";
import { TimerProps } from "../Timer/Timer";
export interface ProgressionTriggerProps extends TimerProps {
    onLoad?: () => void;
    onUnMount?: () => void;
    sound?: string;
}
/**
 * 音声があった場合、音声を読み込んだ後に、タイマーを発動する
 * 音声がなかった場合、即時にタイマーを発動する
 * @param param0
 * @returns
 */
export declare const ProgressionTrigger: FC<ProgressionTriggerProps>;
