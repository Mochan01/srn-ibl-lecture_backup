import React, { FC, useContext } from "react";
import { Lecture } from "src-ibl-lecture-master-unit/types";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../../stores/providers";
import { MainComponentProps } from "../../../types";
import data from "../../../assets/data/unit06_master.json";
import { Screen as Main } from "../../../features/Screen";
import { formatSlideStep } from "../../../utils";
import { LectureFrame } from "../../../elements/LectureFrame";
import { CountDown } from "../../../elements/CountDown";
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
  const lectureData: Lecture[] = data.lecture[0].steps;

  // クイズ回答時の処理
  const onAnswer = (isCorrect: boolean) => {};

  // アクションボタンを押したときの処理
  const actionGoTo = (value: string) => {
    dispatch({ type: "progress", val: formatSlideStep(value) });
  };

  const countDown = (
    <CountDown css="margin: 10px 22px 0 0" initialTimeSeconds={60} />
  );

  return (
    <LectureFrame
      {...{ countDown }}
      unitName="とりあえず仮"
      unitTitle="とりあえず仮"
    >
      <Main
        {...progress}
        {...{ onAnswer, actionGoTo }}
        screenData={lectureData}
      />
    </LectureFrame>
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
