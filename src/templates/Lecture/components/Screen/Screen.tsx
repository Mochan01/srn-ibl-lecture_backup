import React, { FC, useContext, useMemo, Fragment, useCallback } from "react";
import { Panel } from "./Panel";
import { LectureFrame } from "../../../../elements/LectureFrame";
import { QuizArea } from "../../../../elements/QuizArea";
import {
  GetDataProviderContext,
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../../../stores/providers";
import { MainComponentProps } from "../../../../types";
import { assetsPath } from "../../../../data/assetsPath";
import data from "../../../../assets/data/unit06_master.json";
import { Screen as Main } from "../../../../features/Screen";
import { LectureData } from '../../../../features/Screen/types';
import { formatSlideStep } from '../../../../utils';
// import { Quiz } from "../../../../features/Quiz/Quiz";

export interface ScreenProps
  extends Pick<MainComponentProps, "unitName" | "unitTitle"> {}

/**
 * スライドの画面部分
 */
export const Screen: FC<ScreenProps> = (props) => {
  // スライドのデータを取得
  // const getData = useContext(GetDataProviderContext);
  const { progress } = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  // const slideData = useMemo(() => {
  //   return getData(progress.slide).filter(
  //     (x) => x.progress.step <= progress.step
  //   );
  // }, [getData, progress]);

  // const _data = data.lecture[0].steps.filter(
  //   (x) =>
  //     x.progress.step <= progress.step && x.progress.slide <= progress.slide
  // );

  // @ts-ignore
  // todo: 型をあわせろ
  const lectureData: LectureData = data.lecture[0].steps;

  // クイズ回答時の処理
  const onAnswer = (isCorrect: boolean) => {};

  // アクションボタンを押したときの処理
  const actionGoTo = (value: string) => {
    dispatch({ type: "progress", val: formatSlideStep(value) });
  };

  return (
    <>
      <Main { ...progress } {...{ lectureData, onAnswer, actionGoTo }} />
    </>
  );

  // return (
  //   <LectureFrame {...props}>
  //     {slideData &&
  //       slideData.map(({ image, motion, question }, i) => (
  //         <Fragment key={i}>
  //           {image && (
  //             <Panel
  //               css="position: absolute;"
  //               image={image.display_file && assetsPath[image.display_file]}
  //               motion1={motion && motion.motion_1}
  //               motion2={motion && motion.motion_2}
  //             >
  //               {/* 回答ステップなら */}
  //               {/* {image.display_object_1 === "question_area" && (
  //                 <Quiz {...{ question, onAnswer }} />
  //               )} */}
  //             </Panel>
  //           )}
  //         </Fragment>
  //       ))}
  //   </LectureFrame>
  // );
};
