import { AnimationType } from "src-ibl-lecture-master-unit/types/animation";

/**
 * 音声が停止中の場合、defaultAnimationを返す
 */
export const handleAnimation = (
  defaultAnimation: AnimationType,
  isPlaying: boolean
) => (isPlaying ? defaultAnimation : "animation_1");
