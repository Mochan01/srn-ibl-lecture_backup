import React, { FC, useContext, useMemo, Fragment } from "react";
import { Panel } from "./Panel";
import { LectureFrame } from "./LectureFrame";
import { QuizArea } from "./QuizArea";
import {
  GetDataProviderContext,
  ProgressProviderContext,
  PlayStatusProviderContext,
} from "../../../../stores/providers";
import _ from "lodash";
import {
  handleStep,
  getNextStepIfCorrect,
  getNextStepIfWrong,
} from "../../../../utils";
import { Props } from "../../../../types";
import { assetsPath } from "../../../../data/assetsPath";

export interface ScreenProps extends Pick<Props, "unitName" | "unitTitle"> {}

/**
 * スライドの画面部分
 */
export const Screen: FC<ScreenProps> = (props) => {
  //　スライドのデータを取得
  const getData = useContext(GetDataProviderContext);
  const { state: progress, setState: setProgress } = useContext(
    ProgressProviderContext
  );
  const slideData = useMemo(
    () =>
      getData(progress.slide).filter((x) => x.progress.step <= progress.step),
    [progress.slide, progress.step]
  );

  // 回答ボタンを押したときの処理
  const { setState: setPlayStatus } = useContext(PlayStatusProviderContext);
  const onAnswer = (isCorrect: boolean) => {
    const step = handleStep(getData(progress.slide, progress.step))(
      isCorrect ? getNextStepIfCorrect : getNextStepIfWrong
    );
    setProgress({ step });
    setPlayStatus("PLAYING");
  };

  return (
    <LectureFrame {...props}>
      {slideData &&
        slideData.map(({ image, motion, question }, i) => (
          <Fragment key={i}>
            <Panel
              css="position: absolute;"
              image={assetsPath[image.display_file]}
              motion1={motion.motion_1}
              motion2={motion.motion_2}
            >
              {/* 回答ステップなら */}
              {image.display_object_1 === "question_area" && (
                <QuizArea
                  {...{ onAnswer }}
                  questions={_.compact([
                    question.button_1,
                    question.button_2,
                    question.button_3,
                    question.button_4,
                  ])}
                  correctIndex={[
                    question.ans_1,
                    question.ans_2,
                    question.ans_3,
                    question.ans_4,
                  ].indexOf(true)}
                  $x={image.x_axis}
                  $y={image.x_axis}
                  $width={image.width}
                  $height={image.height}
                />
              )}
            </Panel>
          </Fragment>
        ))}
    </LectureFrame>
  );
};
