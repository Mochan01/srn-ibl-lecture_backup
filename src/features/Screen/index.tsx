import React, { FC, Fragment, useState } from "react";
import { QuizInput } from "../../elements/QuizInput";
import { QuizSelector } from "../../elements/QuizSelector";
import { Panel, Narration } from "./components";
import { PanelObject } from "../../elements/PanelObject";
import { ScreenData } from "./types";
import {
  createSingleScreenData,
  createMultipleScreenData,
  getImageStepData,
  buildImageStepData,
  getPopupBtnStepData,
  buildPopupBtnStepData,
  getPopupStepData,
  getActionBtnStepData,
  buildActionBtnStepData,
  buildPopupStepData,
  getQuestionSelect,
  getLectureDataUpToStep,
  getLectureDataAtStep,
  getQuestionInput,
  getLaunchData,
  getResultData,
} from "./utils";
import { assetsPath } from "../../data/assetsPath";
import { solveAssetPath } from "../../utils";
import { LaunchAnimation } from "../LaunchAnimation";
import { DisplayResult } from "../DisplayResult";
import { ResultList } from "src-ibl-lecture-master-special/types";

// TODO: dataの取り方が未定なので仮の値 DisplayResult用
const mockResultList: ResultList[] = [
  {
    result_id: "result_1",
    part_a: "4_2",
    part_a_name: "高分解能サーモグラフィー",
    part_b: "",
    part_b_name: "",
    result_pdf: "result-4_2.pdf",
  },
  {
    result_id: "result_2",
    part_a: "",
    part_a_name: "",
    part_b: "4_3",
    part_b_name: "標準SAR\n",
    result_pdf: "result-4_3.pdf",
  },
  {
    result_id: "result_3",
    part_a: "",
    part_a_name: "",
    part_b: "4_6",
    part_b_name: "高分解能カメラ",
    result_pdf: "result-4_5-4_6.pdf",
  },
  {
    result_id: "result_4",
    part_a: "4_2",
    part_a_name: "高分解能サーモグラフィー",
    part_b: "4_7",
    part_b_name: "高分解能カメラ",
    result_pdf: "result-4_5-4_6.pdf",
  },
  {
    result_id: "result_5",
    part_a: "4_2",
    part_a_name: "高分解能サーモグラフィー",
    part_b: "4_3",
    part_b_name: "標準SAR\n",
    result_pdf: "result-4_2-4_3.pdf",
  },
  {
    result_id: "result_6",
    part_a: "4_5",
    part_a_name: "広域カメラ",
    part_b: "",
    part_b_name: "",
    result_pdf: "result-4_5.pdf",
  },
  {
    result_id: "result_7",
    part_a: "5_2",
    part_a_name: "地上の基地局との電波通信装置（高速）",
    part_b: "",
    part_b_name: "",
    result_pdf: "result-5_2.pdf",
  },
  {
    result_id: "result_8",
    part_a: "",
    part_a_name: "",
    part_b: "7_1",
    part_b_name: "限定処理特化型コンピュータ",
    result_pdf: "result-4_3.pdf",
  },
  {
    result_id: "result_9",
    part_a: "5_2",
    part_a_name: "地上の基地局との電波通信装置（高速）",
    part_b: "7_1",
    part_b_name: "限定処理特化型コンピュータ",
    result_pdf: "result-5_2-7_1.pdf",
  },
  {
    result_id: "result_10",
    part_a: "4_5",
    part_a_name: "広域カメラ",
    part_b: "7_1",
    part_b_name: "限定処理特化型コンピュータ",
    result_pdf: "result-5_2-7_1.pdf",
  },
];

export interface ScreenProps {
  slide: number;
  step: number;
  screenData: ScreenData;
  actionGoTo?: (actionGoto: string, missionID?: string) => void;
  onAnswer?: (isAnswer: boolean) => void;
}

/**
 * レクチャー本編の画像やクイズなどを配置する部分
 */
export const Screen: FC<ScreenProps> = ({
  slide,
  step,
  screenData,
  actionGoTo,
  onAnswer,
}) => {
  const [popupName, setPopupName] = useState("");

  // スライドとステップに応じて、描画するものを絞り込み
  const dataUpToStep = getLectureDataUpToStep(slide, step, screenData);
  const getMultipleDataUpToStep = createMultipleScreenData(dataUpToStep);
  const getSingleDataUpToStep = createSingleScreenData(dataUpToStep);

  const dataAtStep = getLectureDataAtStep(slide, step, screenData);
  const getSingleDataAtStep = createSingleScreenData(dataAtStep);

  // 各要素はDOM構造としては並列に出し、重ね順をcssで指定する

  return (
    <Panel>
      {/* * メイン画像 */}
      {getMultipleDataUpToStep(getImageStepData, buildImageStepData).map(
        ({ src, depth }, i) => (
          <PanelObject key={i} {...{ step, depth }}>
            <img src={solveAssetPath(assetsPath, src)} />
          </PanelObject>
        )
      )}
      {/** クイズ（選択式） */}
      {getSingleDataUpToStep(getQuestionSelect).map(
        ({ question_select, depth }, i) => (
          <Fragment key={i}>
            {question_select && (
              <PanelObject
                {...{ step, depth }}
                x={question_select.question_x}
                y={question_select.question_y}
              >
                <QuizSelector
                  {...{ onAnswer }}
                  questionSelect={question_select}
                />
              </PanelObject>
            )}
          </Fragment>
        )
      )}
      {/** クイズ（入力式） */}
      {getSingleDataUpToStep(getQuestionInput).map(
        ({ question_input, depth }, i) => (
          <Fragment key={i}>
            {question_input && question_input.ans && (
              <PanelObject
                {...{ step, depth }}
                x={question_input.question_x}
                y={question_input.question_y}
              >
                <QuizInput {...{ onAnswer }} answer={question_input.ans} />
              </PanelObject>
            )}
          </Fragment>
        )
      )}
      {/** アクションボタン */}
      {getMultipleDataUpToStep(
        getActionBtnStepData,
        buildActionBtnStepData
      ).map(({ src, depth, x, y, actionGoto, missionID }, i) => (
        <PanelObject key={i} {...{ step, depth, src, x, y }}>
          <img
            src={solveAssetPath(assetsPath, src)}
            onClick={() => actionGoTo && actionGoTo(actionGoto, missionID)}
          />
        </PanelObject>
      ))}
      {/** ポップアップ用のボタン */}
      {getMultipleDataUpToStep(getPopupBtnStepData, buildPopupBtnStepData).map(
        ({ src, depth, x, y, popupName }, i) => (
          <PanelObject key={i} {...{ step, depth, src, x, y }}>
            <img
              src={solveAssetPath(assetsPath, src)}
              onClick={() => setPopupName(popupName)}
            />
          </PanelObject>
        )
      )}
      {/* * 打ち上げ画面 */}
      {getSingleDataAtStep(getLaunchData).map(
        ({ rocketID, busID, batteryID, launch_key, depth }, i) => (
          <Fragment key={i}>
            {launch_key && (
              <PanelObject {...{ step, depth }} x={163} y={92}>
                <LaunchAnimation
                  scene={launch_key}
                  rocketID={rocketID}
                  busID={busID}
                  batteryID={batteryID}
                />
              </PanelObject>
            )}
          </Fragment>
        )
      )}
      {/* * データ確認画面 */}
      {getSingleDataAtStep(getResultData).map(
        ({ depth, display_result }, i) => (
          <Fragment key={i}>
            {display_result && (
              <PanelObject key={i} {...{ step, depth }} x={123} y={115}>
                <DisplayResult resultList={mockResultList} />
              </PanelObject>
            )}
          </Fragment>
        )
      )}
      {/** ポップアップ */}
      {getMultipleDataUpToStep(getPopupStepData, buildPopupStepData).map(
        ({ src, depth, narration }, i) => (
          <Fragment key={i}>
            {src === popupName && (
              <>
                <PanelObject {...{ step, depth, src }}>
                  <img
                    src={solveAssetPath(assetsPath, src)}
                    onClick={() => setPopupName("")}
                  />
                </PanelObject>
                <Narration {...{ narration }} />
              </>
            )}
          </Fragment>
        )
      )}
    </Panel>
  );
};
