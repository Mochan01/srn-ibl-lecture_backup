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
  type: "intro" | "lecture";
  lectureID: string;
};

const reducer = (data: Pick<JsonData, "intro" | "lecture">) => (state: LectureState, action: SelectAction) => {
  return {
    missions: undefined,
    intros: undefined,
    lectures: undefined,
    [action.type]: (
      data[action.type] as LectureSteps<Intro | LectureData>[]
    ).find(({ lecture_id }) => lecture_id === action.lectureID)?.steps,
  };
};

/**
 *  mission選択画面、タイトル画面、レクチャー画面のどれをマウントするかの状態管理
 * @param data
 * @returns
 */
export const useLectureState = (data: JsonData) => {
  const isMission = !!data.mission.length; // ミッション選択画面が存在するか？

  const initialState = {
    // ミッション選択画面が存在したら、レクチャーはミッション選択画面から始まる
    missions: isMission ? data.mission[0].steps : undefined,
    // ミッション選択画面が存在しなかったら、レクチャーはタイトル画面から始まる
    intros: isMission ? undefined : data.intro[0].steps,
    lectures: undefined,
  };

  return useReducer<Reducer<LectureState, SelectAction>>(reducer(data), initialState);
};
