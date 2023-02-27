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
  getCurrentData,
  getQuestionInput,
  getLaunchData,
} from "./utils";
import { assetsPath } from "../../data/assetsPath";
import { solveAssetPath } from "../../utils";
import { LaunchAnimation } from "../LaunchAnimation";

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
  const currentData = getCurrentData(slide, step, screenData);
  const getMultipleLectureData = createMultipleScreenData(currentData);
  const getSingleLectureData = createSingleScreenData(currentData);

  // 各要素はDOM構造としては並列に出し、重ね順をcssで指定する

  return (
    <Panel>
      {/* * メイン画像 */}
      {getMultipleLectureData(getImageStepData, buildImageStepData).map(
        ({ src, depth }, i) => (
          <PanelObject key={i} {...{ step, depth }}>
            <img src={solveAssetPath(assetsPath, src)} />
          </PanelObject>
        )
      )}
      {/** クイズ（選択式） */}
      {getSingleLectureData(getQuestionSelect).map(
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
      {getSingleLectureData(getQuestionInput).map(
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
      {getMultipleLectureData(getActionBtnStepData, buildActionBtnStepData).map(
        ({ src, depth, x, y, actionGoto, missionID }, i) => (
          <PanelObject key={i} {...{ step, depth, src, x, y }}>
            <img
              src={solveAssetPath(assetsPath, src)}
              onClick={() => actionGoTo && actionGoTo(actionGoto, missionID)}
            />
          </PanelObject>
        )
      )}
      {/** ポップアップ用のボタン */}
      {getMultipleLectureData(getPopupBtnStepData, buildPopupBtnStepData).map(
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
      {getSingleLectureData(getLaunchData).map(
        ({ rocketID, busID, batteryID, launch_key, depth }, i) => (
          <PanelObject key={i} {...{ step, depth }}>
            <LaunchAnimation
              scene={launch_key}
              rocketID={rocketID}
              busID={busID}
              batteryID={batteryID}
            />
          </PanelObject>
        )
      )}
      {/** ポップアップ */}
      {getMultipleLectureData(getPopupStepData, buildPopupStepData).map(
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
