import React, { FC, useRef } from "react";
import data from "../../assets/data/unit00_master.json";
import lecture_master from "../../assets/data/lecture_master.json";
import { useLectureState } from "../../hooks";
import { JsonData } from "../../types";

export interface LectureStateTestProps {}

const jsonData = { ...data, ...lecture_master } as JsonData;

/**
 * レクチャーの主なコンポーネントのつなぎ込みのテスト
 */
export const LectureStateTest: FC<LectureStateTestProps> = () => {
  const [state, setState] = useLectureState(jsonData);

  const lectureID = useRef(jsonData.lecture[0].lecture_id);

  // missionが選択された際の処理
  // introのデータをセット
  const onClickSelectMission = (go_to: string) => {
    lectureID.current = go_to.split("_")[1];
    setState({ type: "intro", lectureID: lectureID.current });
  };

  // タイトル画面を離脱する際の処理
  // lectureのデータをセット
  const shutDownTitle = () =>
    setState({ type: "lecture", lectureID: lectureID.current });

  return (
    <>
      {state.mission && (
        <button onClick={() => onClickSelectMission("intro_c01lv01u07m01")}>
          ミッション選択画面
        </button>
      )}
      {state.intro && (
        <button onClick={shutDownTitle}>
          タイトル画面（レクチャーid: {lectureID.current}）
        </button>
      )}
      {state.lecture && (
        <button>レクチャー本編（レクチャーid: {lectureID.current}）</button>
      )}
    </>
  );
};
