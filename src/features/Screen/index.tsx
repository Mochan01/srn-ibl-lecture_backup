import React, { FC, Fragment, useState } from "react";
import { LectureFrame } from "../../elements/LectureFrame";
import { QuizInput } from "../../elements/QuizInput";
import { QuizSelector } from "../../elements/QuizSelector";
import { Panel, Narration, PanelObject } from "./components";
import { LectureData } from "./types";
import {
  createSingleLectureData,
  createMultipleLectureData,
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
  lectureData: LectureData;
  actionGoTo?: (key: string) => void;
  onAnswer?: (isAnswer: boolean) => void;
}

/**
 * レクチャー本編の画像やクイズなどを配置する部分
 */
export const Screen: FC<ScreenProps> = ({
  slide,
  step,
  lectureData,
  actionGoTo,
  onAnswer,
}) => {
  const [popupName, setPopupName] = useState("");

  // スライドとステップに応じて、描画するものを絞り込み
  const currentData = getCurrentData(slide, step, lectureData);
  const getMultipleLectureData = createMultipleLectureData(currentData);
  const getSingleLLectureData = createSingleLectureData(currentData);

  // 各要素はDOM構造としては並列に出し、重ね順をcssで指定する
  return (
    <LectureFrame unitName="とりあえず仮" unitTitle="とりあえず仮">
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
        {getSingleLLectureData(getQuestionSelect).map(
          ({ question_select, depth }, i) => (
            <>
              {question_select && (
                <PanelObject
                  key={i}
                  {...{ step, depth }}
                  x={question_select.question_x}
                  y={question_select.question_y}
                >
                  <QuizSelector
                    key={i}
                    {...{ onAnswer }}
                    questionSelect={question_select}
                  />
                </PanelObject>
              )}
            </>
          )
        )}
        {/** クイズ（入力式） */}
        {getSingleLLectureData(getQuestionInput).map(
          ({ question_input, depth }, i) => (
            <>
              {question_input && (
                <PanelObject
                  key={i}
                  {...{ step, depth }}
                  x={question_input.question_x}
                  y={question_input.question_y}
                >
                  <QuizInput
                    key={i}
                    {...{ onAnswer }}
                    answer={question_input.ans}
                  />
                </PanelObject>
              )}
            </>
          )
        )}
        {/** アクションボタン */}
        {getMultipleLectureData(
          getActionBtnStepData,
          buildActionBtnStepData
        ).map(({ src, depth, x, y, actionGoto }, i) => (
          <PanelObject key={i} {...{ step, depth, src, x, y }}>
            <img
              {...{ src }}
              onClick={() => actionGoTo && actionGoTo(actionGoto)}
            />
          </PanelObject>
        ))}
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
                  <PanelObject key={i} {...{ step, depth, src }}>
                    <img {...{ src }} onClick={() => setPopupName("")} />
                  </PanelObject>
                  <Narration {...{ narration }} />
                </>
              )}
            </Fragment>
          )
        )}
      </Panel>
    </LectureFrame>
  );
};
