import React, { FC, Fragment, useState } from "react";
import { QuizInput } from "../../elements/QuizInput";
import { QuizSelector } from "../../elements/QuizSelector";
import { Panel, Narration, PanelObject } from "./components";
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
} from "./utils";

export interface ScreenProps {
  slide: number;
  step: number;
  screenData: ScreenData;
  actionGoTo?: (key: string) => void;
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
      {/** メイン画像 */}
      {getMultipleLectureData(getImageStepData, buildImageStepData).map(
        ({ src, depth }, i) => (
          <PanelObject key={i} {...{ step, depth }}>
            <img {...{ src }} />
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
                <QuizInput
                  {...{ onAnswer }}
                  answer={question_input.ans}
                />
              </PanelObject>
            )}
          </Fragment>
        )
      )}
      {/** アクションボタン */}
      {getMultipleLectureData(getActionBtnStepData, buildActionBtnStepData).map(
        ({ src, depth, x, y, actionGoto }, i) => (
          <PanelObject key={i} {...{ step, depth, src, x, y }}>
            <img
              {...{ src }}
              onClick={() => actionGoTo && actionGoTo(actionGoto)}
            />
          </PanelObject>
        )
      )}
      {/** ポップアップ用のボタン */}
      {getMultipleLectureData(getPopupBtnStepData, buildPopupBtnStepData).map(
        ({ src, depth, x, y, popupName }, i) => (
          <PanelObject key={i} {...{ step, depth, src, x, y }}>
            <img {...{ src }} onClick={() => setPopupName(popupName)} />
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
                  <img {...{ src }} onClick={() => setPopupName("")} />
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
