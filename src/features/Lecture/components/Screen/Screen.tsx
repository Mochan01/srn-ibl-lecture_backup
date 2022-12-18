import React, { FC, useContext, useMemo, Fragment, useCallback } from "react";
import { Panel } from "./Panel";
import { LectureFrame } from "./LectureFrame";
import { QuizArea } from "../../../../elements/QuizArea";
import {
  GetDataProviderContext,
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../../../stores/providers";
import { MainComponentProps } from "../../../../types";
import { assetsPath } from "../../../../data/assetsPath";

export interface ScreenProps
  extends Pick<MainComponentProps, "unitName" | "unitTitle"> {}

/**
 * スライドの画面部分
 */
export const Screen: FC<ScreenProps> = (props) => {
  // スライドのデータを取得
  const getData = useContext(GetDataProviderContext);
  const { progress } = useContext(GlobalStateContext);

  const slideData = useMemo(() => {
    return getData(progress.slide).filter(
      (x) => x.progress.step <= progress.step
    );
  }, [getData, progress]);

  return (
    <LectureFrame {...props}>
      {slideData &&
        slideData.map(({ image, motion, question }, i) => (
          <Fragment key={i}>
            {image && (
              <Panel
                css="position: absolute;"
                image={image.display_file && assetsPath[image.display_file]}
                motion1={motion && motion.motion_1}
                motion2={motion && motion.motion_2}
              >
                {/* 回答ステップなら */}
                {image.display_object_1 === "question_area" && (
                  <QuizArea
                    correctIndex={[
                      question.ans_1,
                      question.ans_2,
                      question.ans_3,
                      question.ans_4,
                    ].indexOf(true)}
                    questions={
                      [
                        question.button_1,
                        question.button_2,
                        question.button_3,
                        question.button_4,
                      ].filter(Boolean) as string[]
                    }
                    $x={image.x_axis}
                    $y={image.y_axis}
                    $width={image.width}
                    $height={image.height}
                  />
                )}
              </Panel>
            )}
          </Fragment>
        ))}
    </LectureFrame>
  );
};
