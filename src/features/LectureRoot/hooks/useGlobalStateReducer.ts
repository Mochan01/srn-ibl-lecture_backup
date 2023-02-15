import { useReducer, Reducer } from "react";
import { Progress } from "../../../types";

export interface GlobalState {
  isPlaying: boolean;
  progress: Progress;
  timestamp: number;
}

export type GlobalStateAction =
  | { type: "isPlaying"; val: boolean }
  | { type: "progress"; val: Progress }
  | { type: "timestamp" };

const reducer = (state: GlobalState, action: GlobalStateAction) => {
  switch (action.type) {
    case "timestamp":
      return { ...state, timestamp: new Date().getTime() };
    default:
      return { ...state, [action.type]: action.val };
  }
};

/**
 * レクチャー全体の状態管理
 * @returns
 */
export const useGlobalStateReducer = (initVal: Partial<GlobalState>) =>
  useReducer<Reducer<GlobalState, GlobalStateAction>>(reducer, {
    isPlaying: false,
    progress: { slide: 1, step: 1 },
    timestamp: new Date().getTime(),
    ...initVal,
  });
