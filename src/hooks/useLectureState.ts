import { Reducer, useReducer } from "react";
import {
  Missions,
  Intros,
  Lectures,
  Intro,
  Lecture as LectureData,
} from "src-ibl-lecture-master-unit/types";
import { JsonData } from "../types";
import { LectureSteps } from "../types/lectureSteps";

interface LectureState {
  missions: Missions | undefined;
  intros: Intros | undefined;
  lectures: Lectures | undefined;
}

export type SelectAction = {
  type: "intros" | "lectures";
  data: LectureSteps<Intro | LectureData>[];
  lectureID: string;
};

const reducer = (state: LectureState, action: SelectAction) => {
  return {
    missions: undefined,
    intros: undefined,
    lectures: undefined,
    [action.type]: action.data.find(
      ({ lecture_id }) => lecture_id === action.lectureID
    )?.steps,
  };
};

/**
 *  mission選択画面、タイトル画面、レクチャー画面のどれをマウントするかの状態管理
 * @param data
 * @returns
 */
export const useLectureState = (data: JsonData) => {
  const isMission = !!data.mission.length;
  const initialState = {
    missions: isMission ? data.mission[0].steps : undefined,
    intros: isMission ? undefined : data.intro[0].steps,
    lectures: undefined,
  };

  return useReducer<Reducer<LectureState, SelectAction>>(reducer, initialState);
};
