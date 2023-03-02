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
  getPartsIDs,
} from "./utils";
import { assetsPath } from "../../data/assetsPath";
import { solveAssetPath } from "../../utils";
import { LaunchAnimation, LaunchAnimationProps } from "../LaunchAnimation";
import { DisplayResult } from "../DisplayResult";
import { ResultList } from "src-ibl-lecture-master-special/types";

export interface ScreenProps extends Pick<LaunchAnimationProps, "isStart"> {
  slide: number;
  step: number;
  screenData: ScreenData;
  resultList: ResultList[];
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
  resultList,
  actionGoTo,
  onAnswer,
  isStart,
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
      {(() => {
        const { depth, launch_animation } =
          getSingleDataUpToStep(getLaunchData)
            .filter(({ launch_animation }) => launch_animation)
            .slice(-1)[0] || {};
        const partsIDs = getPartsIDs();
        return (
          <>
            {launch_animation && partsIDs && (
              <PanelObject {...{ step, depth }} x={163} y={92} motion1="none">
                <LaunchAnimation
                  {...{ ...partsIDs, ...{ launch_animation, isStart } }}
                />
              </PanelObject>
            )}
          </>
        );
      })()}
      {/* * データ確認画面 */}
      {getSingleDataAtStep(getResultData).map(
        ({ depth, display_result }, i) => (
          <Fragment key={i}>
            {display_result && (
              <PanelObject key={i} {...{ step, depth }} x={123} y={115}>
                <DisplayResult {...{ resultList }} />
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
